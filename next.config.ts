import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdcssl.ibsrv.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
