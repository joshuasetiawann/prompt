/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@scaffold/engine"],
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};
export default nextConfig;
