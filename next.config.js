/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ai-research-sc-analytics-v2',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
}

module.exports = nextConfig 