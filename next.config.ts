/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    allowedDevOrigins: ["192.168.1.199"],
  },
};
module.exports = {
  allowedDevOrigins: ["192.168.1.199"],
};
export default nextConfig;
