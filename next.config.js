/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ai-research-sc-analytics-v2',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  // Disable canvas in webpack build
  webpack: (config) => {
    config.externals = [...(config.externals || []), 'canvas'];
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      canvas: false,
    };
    return config;
  },
  // Ensure trailing slashes for static export
  trailingSlash: true,
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
  // Add source maps for better debugging
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig 