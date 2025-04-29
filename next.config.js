const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["media.licdn.com"],
  },
  experimental: {
    serverActions: true,
  },
  i18n,
  reactStrictMode: true,
};

module.exports = nextConfig;
