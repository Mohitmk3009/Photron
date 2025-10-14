import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    unoptimized: true, // Disables Vercel Image Optimization for ALL images
  },
};

export default nextConfig;
