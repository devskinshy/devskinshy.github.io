const { withContentlayer } = require("next-contentlayer");

const isGithubActions = process.env.GITHUB_ACTIONS || false
const isProduction = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  ...((isGithubActions || isProduction) && {
    output: 'export',
    images: {
      unoptimized: true,
    },
  })
};

module.exports = withContentlayer(nextConfig);
