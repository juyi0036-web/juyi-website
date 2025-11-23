import Link from 'next/link';
import { useState } from 'react';
import { categories } from '../data/categories';

export default function Navbar() {
  const [isProductOpen, setIsProductOpen] = useState(false);

  return (
    // 1. 导航栏背景色改为奶油色 (bg-cream)，增加温暖感
    <nav className="bg-cream shadow-sm font-sans sticky top-0 z-50 border-b border-[#EAD8C0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24"> {/* 2.稍微增加高度以适应Logo */}
          
          {/* Logo 区域 */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center no-underline">
              {/* 3. 这里换成了图片 Logo */}
              <img src="/logo.png" alt="JUYI CHR Logo" className="h-16 w-auto hover:opacity-90 transition" />
            </Link>
          </div>

          {/* 电脑端菜单 */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* 链接颜色改为巧克力色 (text-choco) */}
            <Link href="/" className="text-choco hover:text-red-700 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition">
              Accueil
            </Link>

            {/* 产品下拉菜单 */}
            <div 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}
            >
              <button className="text-choco group-hover:text-red-700 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider inline-flex items-center transition bg-transparent border-none cursor-pointer h-full">
                Nos Produits
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* 下拉内容 */}
              {isProductOpen && (
                <div className="absolute left-0 top-full mt-0 w-[700px] bg-white border border-[#EAD8C0] shadow-xl rounded-b-lg overflow-hidden p-0">
                  <div className="grid grid-cols-2 gap-8 p-8 bg-white relative">
                    {/* 增加一个装饰背景 */}
                    <div className="absolute inset-0 bg-cream opacity-20 z-0"></div>
                    {categories.map((cat) => (
                      <div key={cat.slug} className="zb-10 relative z-10">
                        <h3 className="text-base font-extrabold text-choco uppercase tracking-widest mb-4 border-b-2 border-choco pb-2">
                          {cat.name}
                        </h3>
                        <ul className="space-y-3 list-none p-0 m-0">
                          {cat.subcategories.map((sub) => (
                            <li key={sub.slug}>
                              <Link 
                                href={`/products/${cat.slug}/${sub.slug}`} 
                                className="text-sm text-gray-700 hover:text-red-700 hover:translate-x-1 transform transition block no-underline font-medium"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="bg-choco px-8 py-4 text-right">
                    <Link href="/products" className="text-sm font-bold text-cream hover:text-white no-underline uppercase tracking-wider">
                      Voir tout le catalogue &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-choco hover:text-red-700 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition">
              Qui sommes-nous
            </Link>
            
            <Link href="/contact" className="text-choco hover:text-red-700 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition">
              Contact
            </Link>
          </div>

          {/* 右侧 WhatsApp 按钮 */}
          <div className="hidden md:flex items-center">
            <a 
              href="https://wa.me/85269724241" 
              target="_blank" 
              rel="noopener noreferrer"
              // 按钮样式调整为巧克力色背景，奶油色文字
              className="bg-choco text-cream border-2 border-choco px-6 py-3 rounded-full text-sm font-bold hover:bg-cream hover:text-choco transition flex items-center no-underline shadow-sm"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.001 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.16 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893 0-3.18-1.238-6.167-3.486-8.416"/></svg>
              Ismael (Export)
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
