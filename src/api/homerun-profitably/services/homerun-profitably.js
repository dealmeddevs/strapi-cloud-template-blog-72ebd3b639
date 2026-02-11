'use strict';

/**
 * homerun-profitably service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::homerun-profitably.homerun-profitably');
