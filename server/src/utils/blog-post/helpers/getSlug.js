const removeAccents = require("remove-accents");

async function getSlug(title, categoryName, tags, id) {

  let tagNumber = null;

  const numericTags = getNumberTags(tags)
  if (numericTags.length > 0) {
    tagNumber = numericTags[0].name;
  }

  let slug = buildSlug(title, categoryName, tagNumber)

  slug = removeAccentsAndSymbols(slug)

  slug = await ensureUniqueSlug(slug, id);

  return slug;
}

function getNumberTags(tags) {
  return tags.filter((tag) => !isNaN(parseInt(tag.name)));
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
    const existingEntries = await strapi.entityService.findMany(
      'api::blog-post.blog-post',
      {
        filters: {
          slug: uniqueSlug,
          ...(currentId ? { id: { $ne: currentId } } : {}),
        },
        fields: ['id'],
      }
    );

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
};