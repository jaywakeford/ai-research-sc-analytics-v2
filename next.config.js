/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf|mp3|mp4)$/,
      type: 'asset/resource',
      generator: {
        filename: 'media/[path][name][ext]',
      },
    });

    // Handle canvas module
    config.resolve.alias.canvas = false;
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false,
    };

    return config;
  },
}

module.exports = nextConfig 