/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'default',
    path: '/',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;