/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  typescript: {
    // Ensure TypeScript is used for all .ts/.tsx files
    ignoreBuildErrors: false,
  },
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

    // Ensure TypeScript files are processed
    config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];

    return config;
  },
  // Enable source maps in production
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig 