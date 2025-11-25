import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // 引入路由
import Navbar from '../components/Navbar';
import { translations } from '../data/translations'; // 引入字典

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale] || translations.fr; // 获取翻译

  // 定义轮播图 (标题和副标题动态化，不写死在数组里，而是在下面渲染时取值)
  const slides = [
    {
      image: "/products/boulangerie.jpg", 
      link: "/products/boulangerie-patisserie/petrins"
    },
    {
      image: "/products/cuisine.jpg",
      link: "/products/inox-mobilier/tables-inox" 
    },
    {
      image: "/products/inox.jpg",
      link: "/products/inox-mobilier/tables-inox"
    },
    {
      image: "/products/froid.jpg",
      link: "/products/froid/armoires-refrigerees"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // 这是一个小技巧：根据当前Slide的索引，手动匹配翻译里的文本
  // 因为我们字典里没有设计成数组，所以这里简单做个映射
  const getSlideText = (index) => {
    // 这里稍微有点硬编码，但对于目前结构最简单
    // 只是为了演示多语言切换效果
    return {
        title: t.hero_title_1, // 暂时统一标题
        subtitle: t.hero_tag // 暂时统一副标题
    };
  };

  return (
    <div className="min-h-screen bg-cream font-sans flex flex-col">
      <Head>
        <title>JUYI CHR - {t.hero_title_1}</title>
        <meta name="description" content="CHR Equipment Direct Factory." />
      </Head>

      <Navbar />

      <main className="flex-grow">
        
        {/* === 1. 全屏轮播 === */}
        <div className="relative bg-choco text-cream min-h-[85vh] flex items-center justify-center overflow-hidden">
          
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transform scale-105 transition duration-[10000ms]"
                style={{ backgroundImage: `url('${slide.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-2 px-4 rounded-full bg-white/10 text-white text-sm font-bold tracking-[0.2em] mb-8 uppercase backdrop-blur-md border border-white/20">
              {t.hero_tag}
            </span>
            
            <h1 className="text-5xl tracking-tight font-extrabold sm:text-7xl md:text-8xl uppercase text-white drop-shadow-2xl">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EAD8C0] via-white to-[#EAD8C0]">
                {t.hero_title_1}
              </span>
            </h1>

            {/* 按钮组 */}
            <div className="mt-16 flex justify-center gap-4">
              <Link href="/products/boulangerie-patisserie/petrins" className="inline-flex items-center justify-center px-10 py-4 border border-white/50 text-base font-bold rounded-full text-white hover:bg-white hover:text-choco transition duration-300 backdrop-blur-sm uppercase tracking-widest no-underline">
                {t.hero_btn_catalog}
              </Link>
            </div>
          </div>
        </div>

        {/* === 2. 信任图标 === */}
        <div className="bg-white py-8 border-b border-[#EAD8C0]/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-around flex-wrap gap-8 opacity-70 grayscale hover:grayscale-0 transition duration-500">
               <span className="text-xl font-bold text-choco">{t.trust_ce}</span>
               <span className="text-xl font-bold text-choco">{t.trust_factory}</span>
               <span className="text-xl font-bold text-choco">{t.trust_export}</span>
               <span className="text-xl font-bold text-choco">{t.trust_response}</span>
            </div>
          </div>
        </div>

        {/* === 3. 四大核心板块 === */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-choco uppercase tracking-widest">
              {t.section_univers}
            </h2>
            <p className="mt-4 text-gray-500">{t.section_univers_sub}</p>
            <div className="w-16 h-1 bg-[#EAD8C0] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 这里为了演示简单，手动应用翻译 */}
            <Link href={slides[0].link} className="group relative h-[400px] overflow-hidden shadow-2xl block">
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('${slides[0].image}')`}}></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
                <div className="absolute bottom-0 left-0 p-10">
                    <h3 className="text-3xl font-bold text-white mb-2 uppercase">{t.card_bakery}</h3>
                    <p className="text-gray-200">{t.card_bakery_sub}</p>
                </div>
            </Link>
            
            <Link href={slides[1].link} className="group relative h-[400px] overflow-hidden shadow-2xl block">
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('${slides[1].image}')`}}></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
                <div className="absolute bottom-0 left-0 p-10">
                    <h3 className="text-3xl font-bold text-white mb-2 uppercase">{t.card_cooking}</h3>
                    <p className="text-gray-200">{t.card_cooking_sub}</p>
                </div>
            </Link>

             <Link href={slides[2].link} className="group relative h-[400px] overflow-hidden shadow-2xl block">
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('${slides[2].image}')`}}></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
                <div className="absolute bottom-0 left-0 p-10">
                    <h3 className="text-3xl font-bold text-white mb-2 uppercase">{t.card_cold}</h3>
                    <p className="text-gray-200">{t.card_cold_sub}</p>
                </div>
            </Link>

             <Link href={slides[3].link} className="group relative h-[400px] overflow-hidden shadow-2xl block">
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('${slides[3].image}')`}}></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
                <div className="absolute bottom-0 left-0 p-10">
                    <h3 className="text-3xl font-bold text-white mb-2 uppercase">{t.card_cold}</h3> {/* 暂时复用 Cold */}
                    <p className="text-gray-200">Glace & Bar</p>
                </div>
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="bg-choco text-white/40 py-12 border-t border-white/5 text-center">
        <p className="text-xs uppercase tracking-widest">
          © 2025 Juyi CHR • Guangzhou & France
        </p>
      </footer>
    </div>
  );
}
