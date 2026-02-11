'use strict';

/**
 * pdf-display service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pdf-display.pdf-display');
