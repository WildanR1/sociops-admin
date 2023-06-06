/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.SOCIOPS_ADMIN_API_URL,
  },
};

module.exports = nextConfig;
