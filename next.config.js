/** @type {import('next').NextConfig} */
// Configuration for GitHub Pages deployment
// Cache-busting timestamp: 2024-01-07
const nextConfig = {
  output: 'export',
  basePath: '/ai-research-sc-analytics-v2',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.externals = [...config.externals, 'canvas'];
    return config;
  },
}

module.exports = nextConfig 