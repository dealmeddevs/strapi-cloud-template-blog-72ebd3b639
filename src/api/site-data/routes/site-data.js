'use strict'

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/site-data/bundle',
      handler: 'site-data.bundle',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
}
