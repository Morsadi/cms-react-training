/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['i.annihil.us'],
    unoptimized :true
  },
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/', query: { __nextDefaultLocale: 'en' } },
      ...defaultPathMap
    }
  }
}

module.exports = nextConfig
