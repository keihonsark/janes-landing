import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/refer',
        destination: '/refer.html',
      },
      {
        source: '/partners',
        destination: '/partners.html',
      },
    ];
  },
};

export default nextConfig;
