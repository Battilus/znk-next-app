const { i18n } = require('./next-i18next.config')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  i18n,
  images: {
    domains: ['znakproject.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'znakproject.com',
        port: '8443',
        pathname: '/project-image/**',
      },
    ],
  },
  env: {
    ZNAK_API_URL: process.env.ZNAK_API_URL,
    ZNAK_BASE_URL: process.env.ZNAK_BASE_URL
  }
}

module.exports = nextConfig
