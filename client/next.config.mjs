/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_HOST: process.env.API_HOST,
        NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST,
      },
};

export default nextConfig;
