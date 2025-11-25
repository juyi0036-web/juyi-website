/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
