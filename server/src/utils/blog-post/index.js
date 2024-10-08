const { getDescription, getContentText } = require('./helpers');

exports.handleBlogPost = function handleBlogPost(ctx) {
  const { content } = ctx.request.body;

  console.log(JSON.stringify(ctx.request.body));

  try {
    ctx.request.body.description = getDescription(content)
    ctx.request.body.contentText = getContentText(content)

  } catch (error) {
    strapi.log.error(`Error in blog post:`, error);
  }
};
