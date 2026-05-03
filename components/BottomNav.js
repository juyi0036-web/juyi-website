import Link from 'next/link';
import { useRouter } from 'next/router';
import { translations } from '../data/translations';

export default function BottomNav() {
  const { locale } = useRouter();
  const t = translations[locale] || translations.fr;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-[100] md:hidden">
      <div className="flex justify-around items-center h-16 px-2">
        <Link href="/" className="flex flex-col items-center justify-center w-full h-full text-brand-blue no-underline active:scale-95 transition-transform">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-[10px] mt-1 font-bold uppercase">{t.nav_home}</span>
        </Link>

        <Link href="/products" className="flex flex-col items-center justify-center w-full h-full text-brand-blue no-underline active:scale-95 transition-transform">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <span className="text-[10px] mt-1 font-bold uppercase">{t.nav_products}</span>
        </Link>

        <Link href="/blog" className="flex flex-col items-center justify-center w-full h-full text-brand-blue no-underline active:scale-95 transition-transform">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 2v4a2 2 0 002 2h4" />
          </svg>
          <span className="text-[10px] mt-1 font-bold uppercase">{t.nav_blog || 'Blog'}</span>
        </Link>

        <Link href="/contact" className="flex flex-col items-center justify-center w-full h-full text-brand-blue no-underline active:scale-95 transition-transform">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="text-[10px] mt-1 font-bold uppercase">{t.nav_contact}</span>
        </Link>
      </div>
      {/* 底部安全区占位（针对 iPhone 全屏） */}
      <div className="h-safe-bottom bg-white"></div>
    </div>
  );
}
