/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone", // If deploying with Docker, use standalone
};

module.exports = nextConfig;
