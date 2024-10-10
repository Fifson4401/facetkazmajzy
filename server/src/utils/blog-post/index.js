const { getDescription } = require('./helpers/getDescription');
const { getContentText } = require('./helpers/getContentText');
const { getTagsAndCategory } = require('./helpers/getTagsAndCategory');
const { getSlug } = require('./helpers/getSlug');
const { getSeo } = require('./helpers/getSeo');

exports.handleBlogPost = async function handleBlogPost(ctx) {
  const { content, title, id, category, tags, seo } = ctx.request.body;


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

    ctx.request.body.slug = await getSlug(title, categoryName, tagsArray, id)

    // if (seo) {
    //   ctx.request.body.seo = getSeo(seo, categoryName, tagsArray, title, description)
    // }

  } catch (error) {
    strapi.log.error(`Error in blog post:`, error);
    ctx.throw(500, 'Internal Server Error');
  }
};
