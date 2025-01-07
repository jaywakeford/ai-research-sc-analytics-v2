/** @type {import('next').NextConfig} */
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