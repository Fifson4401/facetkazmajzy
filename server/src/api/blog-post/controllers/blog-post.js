'use strict';

/**
 *  blog-post controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController(
  'api::blog-post.blog-post',
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id: slug } = ctx.params;
      const { query } = ctx;
      //@ts-ignore
      if (!query.filters) query.filters = {};

      //@ts-ignore
      query.filters.slug = { $eq: slug };
      const entity = await strapi
        .service('api::blog-post.blog-post')
        .find(query);
      //@ts-ignore
      const { results } = await this.sanitizeOutput(entity, ctx);

      console.log('results: ', results);

      return this.transformResponse(results[0]);
    },
  })
);
