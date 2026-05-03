/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  async headers() {
    return [
      {
        source: '/:file(hero-bakery-20251204|hero-hotline-20251204|hero-stainless-20251204|hero-cold-20251204).jpg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }
        ],
      },
      {
        source: '/:file(hero-bakery-pro|hero-hotline-pro|hero-stainless-pro|hero-cold-pro).jpg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }
        ],
      },
      {
        source: '/hero-01.jpg',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }
        ],
      },
      {
        source: '/products/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }
        ],
      },
    ];
  },
  // 这里开启国际化 (i18n)
  i18n: {
    // 支持的语言列表：法语(默认), 英语, 西班牙语
    locales: ['fr', 'en', 'es'],
    // 默认语言：法语
    defaultLocale: 'fr',
    // 禁用自动跳转（可选，建议开启以免混淆）
    localeDetection: false,
  },
}

module.exports = nextConfig
