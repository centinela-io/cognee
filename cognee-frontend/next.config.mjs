/** @type {import('next').NextConfig} */
const BACKEND = process.env.NEXT_PUBLIC_LOCAL_API_URL || "http://localhost:8000";

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  async rewrites() {
    return [
      // Proxy all backend calls through the UI origin so auth cookies flow same-site
      { source: "/api/v1/:path*", destination: `${BACKEND}/api/v1/:path*` },
      { source: "/health",        destination: `${BACKEND}/health` },
    ];
  },
};

export default nextConfig;
