'use strict';

/**
 * random router
 */

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/random',
      handler: 'random.getRandomPost',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
