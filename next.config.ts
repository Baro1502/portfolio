/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: ['images.unsplash.com', 'assets.aceternity.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
