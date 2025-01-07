/** @type {import('next').NextConfig} */
// Configuration for GitHub Pages deployment v2
const nextConfig = {
  output: 'export',
  basePath: '/ai-research-sc-analytics-v2',
  images: {
    unoptimized: true,
  },
  // Disable canvas in webpack build
  webpack: (config) => {
    config.externals = [...config.externals, 'canvas'];
    return config;
  },
}

module.exports = nextConfig 