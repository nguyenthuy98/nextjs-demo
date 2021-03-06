/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['randomuser.me'],
    formats: ['image/avif', 'image/webp'],
  },
}

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['randomuser.me'],
    formats: ['image/avif', 'image/webp'],
  },
}