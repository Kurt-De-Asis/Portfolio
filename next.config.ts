/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    // Remove serverComponentsExternalPackages for Tailwind CSS
    // This was causing fs module to be imported in browser
  },
  // Configure the app directory path
  appDir: './src/app',
  // Add fallback for fs module to prevent build errors
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
  // Enable Turbopack configuration to silence the warning
  turbopack: {},
};

module.exports = nextConfig;
