'use strict';

/**
 * home-we-serve service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-we-serve.home-we-serve');
