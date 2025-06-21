import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  allowedDevOrigins: ['http://192.168.100.20:3000'],
};

export default nextConfig;
