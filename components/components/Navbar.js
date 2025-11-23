import Link from 'next/link';
import { useState } from 'react';
import { categories } from '../data/categories';

export default function Navbar() {
  const [isProductOpen, setIsProductOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md font-sans sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo 区域 */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center no-underline">
              <span className="text-2xl font-bold text-[#5A3E2B] tracking-tight">
                JUYI <span className="text-red-700">CHR</span>
              </span>
            </Link>
          </div>

          {/* 电脑端菜单 */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-[#5A3E2B] px-3 py-2 rounded-md text-sm font-medium transition">
              Accueil
            </Link>

            {/* 产品下拉菜单 */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}
            >
              <button className="text-gray-700 group-hover:text-[#5A3E2B] px-3 py-2 rounded-md text-sm font-medium inline-flex items-center transition bg-transparent border-none cursor-pointer">
                Nos Produits
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* 下拉内容 */}
              {isProductOpen && (
                <div className="absolute left-0 mt-0 w-[600px] bg-white border border-gray-100 shadow-lg rounded-b-lg overflow-hidden">
                  <div className="grid grid-cols-2 gap-6 p-6 bg-gray-50">
                    {categories.map((cat) => (
                      <div key={cat.slug}>
                        <h3 className="text-sm font-bold text-[#5A3E2B] uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
                          {cat.name}
                        </h3>
                        <ul className="space-y-2 list-none p-0 m-0">
                          {cat.subcategories.map((sub) => (
                            <li key={sub.slug}>
                              <Link 
                                href={`/products/${cat.slug}/${sub.slug}`} 
                                className="text-sm text-gray-600 hover:text-red-700 hover:underline block no-underline"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#5A3E2B] px-6 py-3 text-right">
                    <Link href="/products" className="text-xs font-medium text-white hover:text-[#F5E9D3] no-underline">
                      Voir tout le catalogue &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-[#5A3E2B] px-3 py-2 rounded-md text-sm font-medium transition">
              Qui sommes-nous
            </Link>
            
            <Link href="/contact" className="text-gray-700 hover:text-[#5A3E2B] px-3 py-2 rounded-md text-sm font-medium transition">
              Contact
            </Link>
          </div>

          {/* 右侧 WhatsApp 按钮 */}
          <div className="hidden md:flex items-center">
            <a 
              href="https://wa.me/85269724241" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#5A3E2B] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition flex items-center no-underline"
            >
              <span className="mr-2 font-bold">WhatsApp</span>
              Service Export
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
