import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Enabling the React Compiler for automatic memoization and performance */
  reactCompiler: true,

  /* Configuring external image domains for the Artistic Hero Section */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },

  /* Ensuring strict mode for better catching of side-effects */
  reactStrictMode: true,
};

export default nextConfig;