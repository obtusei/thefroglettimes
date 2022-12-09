/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')
const nextConfig = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['s.abcnews.com','imagez.tmz.com','a4.espncdn.com','en.wikipedia.org','upload.wikimedia.org'],
  },
})

module.exports = nextConfig
