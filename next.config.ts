import type { NextConfig } from "next";

export const basePath = "/shop";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  // Sesuaikan basePath dengan nama dari repository di github. Jika reponya artikel, maka "/artikel"
  basePath: "/shop",
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
