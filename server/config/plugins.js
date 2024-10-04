module.exports = () => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        "blog-post": {
          field: "slug",
          references: "slug",
        },
      },
    },
  },
  sitemap: {
    enabled: true,
    config: { xsl: true, allowedFields: ["id", "uid", "slug"] },
  },
});
