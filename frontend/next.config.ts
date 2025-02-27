import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.NEXT_API_URL
          ? `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`
          : "http://localhost:5000/api/:path*",
      },
    ];
  },
  env: {
    API_URL: process.env.NEXT_API_URL || "http://localhost:5000",
  },
};

export default nextConfig;
