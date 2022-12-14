/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
// const withPwa = require("next-pwa");

const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['s.abcnews.com','dummyimage.com','imagez.tmz.com','a4.espncdn.com','en.wikipedia.org','upload.wikimedia.org','www.hamropatro.com'],
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
