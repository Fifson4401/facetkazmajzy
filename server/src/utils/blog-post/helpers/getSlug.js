const removeAccents = require("remove-accents");

async function getSlug(title, categoryName, tags, id) {

  const tagNumber = getFirstNumberTag(tags)

  let slug = buildSlug(title, categoryName, tagNumber)

  slug = removeAccentsAndSymbols(slug)

  slug = await ensureUniqueSlug(slug, id);

  return slug;
}

function getFirstNumberTag(tags) {
  let tagNumber = null;

  const numericTags = getNumberTags(tags)
  if (numericTags.length > 0) {
    tagNumber = numericTags[0].name;
  }

  return tagNumber
}

function getFirstWordTag(tags) {
  let tagWord = null;

  const numericTags = getWordTags(tags)
  if (numericTags.length > 0) {
    tagWord = numericTags[0].name;
  }

  return tagWord
}

function getNumberTags(tags) {
  return tags.filter((tag) => !isNaN(parseInt(tag.name)));
}

function getWordTags(tags) {
  return tags.filter((tag) => isNaN(parseInt(tag.name)));
}

function buildSlug(title, categoryName, tagNumber) {
  const slugParts = [];

  if (title) {
    slugParts.push(title);
  }
  if (categoryName) {
    slugParts.push(categoryName);
  }
  if (tagNumber) {
    slugParts.push(tagNumber);
  }

  return slugParts.join("-");
}

function removeAccentsAndSymbols(text) {
  text = removeAccents(text).toLowerCase();

  text = text
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-")     // Replace spaces with dashes
    .replace(/--+/g, "-");    // Remove double hyphens

  return text
}

async function ensureUniqueSlug(slug, currentId = null) {
  let uniqueSlug = slug;
  let counter = 1;

  while (true) {
    const existingEntries = await strapi.documents('api::blog-post.blog-post').findMany({
      filters: {
        slug: uniqueSlug,
        ...(currentId ? { id: { $ne: currentId } } : {}),
      },
      fields: ['id'],
    });

    if (existingEntries.length === 0) {
      break;
    }

    strapi.log.debug('Adding counter number for blog slug: ', uniqueSlug)

    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }

  return uniqueSlug;
}

module.exports = {
  getSlug,
  getFirstNumberTag,
  getFirstWordTag
};