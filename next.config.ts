import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash:true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
