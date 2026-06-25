/** @type {import('next').NextConfig} */
const serverApiUrl = process.env.NEXT_PUBLIC_API_URL || process.env.BACKEND_URL || 'http://backend:3001';

const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${serverApiUrl}/api/:path*`,
      },
      {
        source: '/health',
        destination: `${serverApiUrl}/health`,
      },
      {
        source: '/ws',
        destination: `${serverApiUrl.replace(/^http/, 'ws')}/ws`,
      },
    ];
  },
};

export default nextConfig;
