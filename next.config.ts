import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    domains: ['img.freepik.com', 'res.cloudinary.com'],
  },
  basePath: '/app',
};

export default nextConfig;
