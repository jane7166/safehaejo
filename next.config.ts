import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  presets: ["next/babel"],
  plugins: [["styled-components", { "ssr": true }]],
};


export default nextConfig;
