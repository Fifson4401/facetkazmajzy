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
        hostname: process.env.NODE_ENV === 'production'
          ? 'api.facetkazmajzy.pl'
          : 'localhost',
        pathname: '/uploads/**', // Allows any image from the /uploads/ path
      }
    ],
    deviceSizes: [320, 375, 575, 768, 1000, 1200, 1999],
    minimumCacheTTL: 86400000, // 1 day
  },
};

export default nextConfig;
