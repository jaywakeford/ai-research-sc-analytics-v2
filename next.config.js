/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/ai-research-sc-analytics-v2',
  assetPrefix: '/ai-research-sc-analytics-v2/',
  trailingSlash: true,
}

module.exports = nextConfig 