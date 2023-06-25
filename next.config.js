/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.SOCIOPS_ADMIN_API_URL,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sociops-backend-production.up.railway.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
