/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['i.annihil.us'],
    unoptimized :true
  },
  exportPathMap: async function (defaultPathMap) {
    return {
      '/': { page: '/' },
      '/api/comic': { page: '/api/comic' },
    };
  },
  NETLIFY_NEXT_PLUGIN_SKIP: true
}

module.exports = nextConfig
