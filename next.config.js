/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: true,
    appDir: false, // deployment
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**images.unsplash.com',
      },
    ],
  },
};

module.exports = nextConfig;
