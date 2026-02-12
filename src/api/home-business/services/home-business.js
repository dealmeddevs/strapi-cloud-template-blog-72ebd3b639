'use strict';

/**
 * home-business service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-business.home-business');
