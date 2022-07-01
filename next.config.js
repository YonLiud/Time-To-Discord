/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.yonchukku.dev',
      'www.yonchukku.dev',
      'yonchukku.dev',
      'cdn.vercel.app'
    ]
  }
}

module.exports = nextConfig
