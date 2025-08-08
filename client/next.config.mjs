/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_HOST: process.env.API_HOST,
    NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST,
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.NODE_ENV === 'production' ? 'https' : 'http',
        hostname:
          process.env.NODE_ENV === 'production'
            ? 'api.facetkazmajzy.pl'
            : 'localhost',
      },
      {
        protocol: 'https',
        hostname: '**.fbcdn.net',
      },
    ],
    deviceSizes: [320, 375, 575, 768, 1000, 1200, 1999],
    minimumCacheTTL: 86400000,
  },

  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );
    config.module.rules.push(
      { ...fileLoaderRule, test: /\.svg$/i, resourceQuery: /url/ },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: /url/ },
        use: ['@svgr/webpack'],
      },
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },

  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;