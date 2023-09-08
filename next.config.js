/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["media.licdn.com"]
    },
    experimental: {
        serverActions: true,
      },
}

module.exports = nextConfig
