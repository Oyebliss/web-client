/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const nextConfig = {
  // ------------------
  webpack: (config) => {
    // Prevent problems with hooks in collabocate library, by resolving to web app's react
    config.resolve.alias['react'] = path.resolve('./node_modules/react');
    return config;
  },
  // ------------------
  async redirects() {
    return [
      {
        source: '/projects',
        has: [
          {
            type: 'host',
            value: 'app.localhost',
          },
        ],
        destination: '/',
        permanent: false,
      },
      {
        source: '/@pages_community/home',
        destination: '/',
        permanent: false,
      },
      {
        source: '/@pages_community',
        destination: '/',
        permanent: false,
      },
      {
        source: '/home',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
