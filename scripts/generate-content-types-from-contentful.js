/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const CONTENTFUL_TYPES_PATH =
  'C:/Users/simos/Documents/Scripts/contentful-strapi-migration/exports/1hmer34wvcv9/content_types.json';
const API_ROOT = path.join(__dirname, '..', 'src', 'api');

function splitWords(input) {
  return String(input)
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function singularizeWord(word) {
  const lower = word.toLowerCase();
  if (lower.endsWith('ies') && word.length > 3) {
    return `${word.slice(0, -3)}y`;
  }
  if (lower.endsWith('sses') && word.length > 4) {
    return word.slice(0, -2);
  }
  if (lower.endsWith('s') && !lower.endsWith('ss') && word.length > 1) {
    return word.slice(0, -1);
  }
  return word;
}

function pluralizeWord(word) {
  const lower = word.toLowerCase();
  if (lower.endsWith('y') && word.length > 1 && !/[aeiou]y$/i.test(word)) {
    return `${word.slice(0, -1)}ies`;
  }
  if (lower.endsWith('s')) {
    return word;
  }
  return `${word}s`;
}

function toKebabFromWords(words) {
  return words.map((w) => w.toLowerCase()).join('-');
}

function toSnake(input) {
  return splitWords(input)
    .map((w) => w.toLowerCase())
    .join('_');
}

function getUniqueFromValidations(validations) {
  if (!Array.isArray(validations)) return false;
  return validations.some((v) => v && v.unique === true);
}

function mapField(field) {
  const type = field.type;

  if (type === 'Symbol') return { type: 'string' };
  if (type === 'Text') return { type: 'text' };
  if (type === 'Integer') return { type: 'integer' };
  if (type === 'Number') return { type: 'decimal' };
  if (type === 'Boolean') return { type: 'boolean' };
  if (type === 'Date') return { type: 'datetime' };
  if (type === 'RichText') return { type: 'richtext' };
  if (type === 'Object') return { type: 'json' };
  if (type === 'Location') return { type: 'json' };

  if (type === 'Link') {
    if (field.linkType === 'Asset') {
      return {
        type: 'media',
        multiple: false,
        allowedTypes: ['images', 'files', 'videos', 'audios'],
      };
    }
    return { type: 'json' };
  }

  if (type === 'Array') {
    const itemType = field.items?.type;
    const itemLinkType = field.items?.linkType;
    if (itemType === 'Link' && itemLinkType === 'Asset') {
      return {
        type: 'media',
        multiple: true,
        allowedTypes: ['images', 'files', 'videos', 'audios'],
      };
    }
    return { type: 'json' };
  }

  return { type: 'json' };
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, contents) {
  fs.writeFileSync(filePath, contents, 'utf8');
}

function buildCoreFile(kind, uid) {
  const factoryByKind = {
    controller: 'createCoreController',
    router: 'createCoreRouter',
    service: 'createCoreService',
  };
  const labelByKind = {
    controller: 'controller',
    router: 'router',
    service: 'service',
  };
  const factory = factoryByKind[kind];
  const label = labelByKind[kind];

  return `'use strict';\n\n/**\n * ${uid.split('.').pop()} ${label}\n */\n\nconst { ${factory} } = require('@strapi/strapi').factories;\n\nmodule.exports = ${factory}('${uid}');\n`;
}

function main() {
  const raw = JSON.parse(fs.readFileSync(CONTENTFUL_TYPES_PATH, 'utf8'));
  const contentTypes = raw.items || [];

  const created = [];
  const skipped = [];

  for (const ct of contentTypes) {
    const id = ct?.sys?.id;
    if (!id) continue;

    const words = splitWords(id);
    if (words.length === 0) continue;

    const singularWords = [...words];
    singularWords[singularWords.length - 1] = singularizeWord(
      singularWords[singularWords.length - 1]
    );
    const pluralWords = [...singularWords];
    pluralWords[pluralWords.length - 1] = pluralizeWord(
      pluralWords[pluralWords.length - 1]
    );

    const singularName = toKebabFromWords(singularWords);
    const pluralName = toKebabFromWords(pluralWords);

    const apiDir = path.join(API_ROOT, singularName);
    if (fs.existsSync(apiDir)) {
      skipped.push({ id, singularName, reason: 'api exists' });
      continue;
    }

    const schemaDir = path.join(apiDir, 'content-types', singularName);
    const controllersDir = path.join(apiDir, 'controllers');
    const routesDir = path.join(apiDir, 'routes');
    const servicesDir = path.join(apiDir, 'services');

    ensureDir(schemaDir);
    ensureDir(controllersDir);
    ensureDir(routesDir);
    ensureDir(servicesDir);

    const attributes = {
      contentful_id: {
        type: 'string',
        required: true,
        unique: true,
      },
    };

    for (const field of ct.fields || []) {
      const attr = mapField(field);
      const required = field.required === true;
      const unique = getUniqueFromValidations(field.validations);

      if (required) attr.required = true;
      if (unique) attr.unique = true;
      attributes[field.id] = attr;
    }

    const schema = {
      kind: 'collectionType',
      collectionName: toSnake(pluralName),
      info: {
        singularName,
        pluralName,
        displayName: ct.name || id,
        description: `Imported from Contentful type ${id}`,
      },
      options: {
        draftAndPublish: false,
      },
      pluginOptions: {},
      attributes,
    };

    const uid = `api::${singularName}.${singularName}`;

    writeFile(
      path.join(schemaDir, 'schema.json'),
      `${JSON.stringify(schema, null, 2)}\n`
    );
    writeFile(
      path.join(controllersDir, `${singularName}.js`),
      buildCoreFile('controller', uid)
    );
    writeFile(
      path.join(routesDir, `${singularName}.js`),
      buildCoreFile('router', uid)
    );
    writeFile(
      path.join(servicesDir, `${singularName}.js`),
      buildCoreFile('service', uid)
    );

    created.push({ id, singularName });
  }

  console.log(`contentful_types=${contentTypes.length}`);
  console.log(`created=${created.length}`);
  console.log(`skipped=${skipped.length}`);
  if (created.length) {
    console.log('created_types=');
    for (const c of created) console.log(`- ${c.id} -> ${c.singularName}`);
  }
}

main();
