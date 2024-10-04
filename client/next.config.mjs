/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_HOST: process.env.API_HOST,
    NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST,
  },
  telemetry: false,
  images: {
    domains: [
      process.env.NODE_ENV === 'production'
        ? 'api.facetkazmajzy.pl'
        : 'localhost'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.fbcdn.net' // * wildcard on dynamic part of domain url
      }
    ],
    deviceSizes: [320, 375, 575, 768, 1000, 1200, 1999],
    minimumCacheTTL: 86400000 // 1 day
  },
};

export default nextConfig;
