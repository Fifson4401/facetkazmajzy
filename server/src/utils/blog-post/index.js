const { getDescription } = require('./helpers/getDescription');
const { getContentText } = require('./helpers/getContentText');
const { getTagsAndCategory } = require('./helpers/getTagsAndCategory');
const { getSlug } = require('./helpers/getSlug');
const { getSeo } = require('./helpers/getSeo');

exports.handleBlogPost = async function handleBlogPost(ctx) {
  const { content, title, id, category, tags, seo, updatedAt, publishedAt, video } = ctx.request.body;

  try {
    let description = ''

    if (Array.isArray(content) && content.length > 0) {
      description = getDescription(content);
      ctx.request.body.description = description;

      ctx.request.body.contentText = getContentText(content);
    }

    const { categoriesArray, tagsArray } = await getTagsAndCategory(category, tags, id)

    let categoryName = null;

    if (categoriesArray.length > 0) {
      categoryName = categoriesArray[0].name;
    }

    const slug = await getSlug(title, categoryName, tagsArray, id)
    ctx.request.body.slug = slug

    const updatedSeo = getSeo(seo, categoryName, tagsArray, title, description, slug, publishedAt, updatedAt, video);
    ctx.request.body.seo = updatedSeo;

  } catch (error) {
    strapi.log.error(`Error in blog post:`, error);
    ctx.throw(500, 'Internal Server Error');
  }
};
