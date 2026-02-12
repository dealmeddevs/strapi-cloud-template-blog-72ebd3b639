'use strict';

/**
 * homeaccount service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::homeaccount.homeaccount');
