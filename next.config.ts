// next.config.js

module.exports = {
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Set default port to 3000
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};
