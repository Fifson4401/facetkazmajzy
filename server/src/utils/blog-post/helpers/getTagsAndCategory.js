// @ts-nocheck

async function getTagsAndCategory(category, tags, id) {
  try {
    let categoryIds = [];
    let tagIds = [];

    const categoryConnect = category?.connect?.map(item => item.id) || [];
    const categoryDisconnect = category?.disconnect?.map(item => item.id) || [];

    const tagConnect = tags?.connect?.map(item => item.id) || [];
    const tagDisconnect = tags?.disconnect?.map(item => item.id) || [];

    if (id) {
      const existingEntry = await fetchBlogEntry(id)

      let existingCategoryIds = existingEntry.category ? [existingEntry.category.id] : [];
      let existingTagIds = existingEntry.tags ? existingEntry.tags.map(tag => tag.id) : [];

      categoryIds = calculateCurrentCategoryIds(existingCategoryIds, categoryConnect, categoryDisconnect)
      tagIds = calculateCurrentTagIds(existingTagIds, tagConnect, tagDisconnect)
    } else {
      // new post
      categoryIds = categoryConnect;
      tagIds = tagConnect;
    }

    let categoriesArray = [];
    let tagsArray = [];

    if (categoryIds.length > 0) {
      categoriesArray = await fetchCategories(categoryIds)
    }

    if (tagIds.length > 0) {
      tagsArray = await fetchTags(tagIds)
    }

    return { categoriesArray, tagsArray }
  } catch (error) {
    strapi.log.error(`Error in getTagsAndCategory:`, error);
    return { categoriesArray: [], tagsArray: [] }
  }

}

function calculateCurrentTagIds(existingTagIds, tagConnect, tagDisconnect) {
  return existingTagIds
    .concat(tagConnect)
    .filter(tagId => !tagDisconnect.includes(tagId));
}

function calculateCurrentCategoryIds(existingCategoryIds, categoryConnect, categoryDisconnect) {
  return existingCategoryIds
    .concat(categoryConnect)
    .filter(catId => !categoryDisconnect.includes(catId));
}

async function fetchBlogEntry(id) {
  return await strapi.entityService.findOne('api::blog-post.blog-post', id, {
    populate: ['category', 'tags'],
  });
}

async function fetchCategories(categoryIds) {
  return await strapi.entityService.findMany("api::category.category", {
    filters: { id: { $in: categoryIds } },
    fields: ["name"],
  });
}

async function fetchTags(tagIds) {
  return await strapi.entityService.findMany("api::tag.tag", {
    filters: { id: { $in: tagIds } },
    fields: ["name"],
  });
}

module.exports = {
  getTagsAndCategory,
};
