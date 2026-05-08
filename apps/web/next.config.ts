import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@finance-app/ui", "@finance-app/core", "@finance-app/content", "@finance-app/data"],
};

export default nextConfig;
