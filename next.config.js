/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
// const withPwa = require("next-pwa");

const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
     remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
//  pwa: {
//    dest: 'public',
//    register: true,
//    skipWaiting: true,
//     // disable: process.env.NODE_ENV === 'development'
//   }
}
// const pwaConfig = withPwa(config)

const nextConfig = nextTranslate(config)

module.exports = nextConfig
