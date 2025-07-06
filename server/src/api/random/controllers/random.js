'use strict';

/**
 * random controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::random.random', ({ strapi }) => ({
  async find(ctx) {
    try {
      const { category, slug } = ctx.query;

      const filters = {};

      if (category) {
        filters.category = category;
      }

      if (slug) {
        filters.slug = { $ne: slug };
      }

      const count = await strapi.documents('api::blog-post.blog-post').count({
        filters,
      });

      if (count === 0) {
        return { slug: null };
      }

      const randomOffset = Math.floor(Math.random() * count);

      const [randomPost] = await strapi.documents('api::blog-post.blog-post').findMany({
        filters,
        fields: ['slug'],
        start: randomOffset,
        limit: 1,
      });

      if (!randomPost) {
        return ctx.notFound('No posts found after applying filters.');
      }

      return { slug: randomPost.slug };
    } catch (error) {
      strapi.log.error('Error fetching random post:', error);
      return ctx.internalServerError('An error occurred while fetching a random post.');
    }
  },
}));
