const { handleBlogPost } = require('../../utils/blog-post');

module.exports = (plugin) => {
  const { update, create } = plugin.controllers['collection-types'];

  plugin.controllers['collection-types'].update = (ctx) => {
    if (ctx.url.includes('api::blog-post.blog-post')) {
      handleBlogPost(ctx);
    }
    return update(ctx);
  };

  plugin.controllers['collection-types'].create = (ctx) => {
    if (ctx.url.includes('api::blog-post.blog-post')) {
      handleBlogPost(ctx);
    }
    return create(ctx);
  };

  return plugin;
};
