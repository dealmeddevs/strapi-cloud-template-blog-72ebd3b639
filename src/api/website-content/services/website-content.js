'use strict';

/**
 * website-content service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::website-content.website-content');
