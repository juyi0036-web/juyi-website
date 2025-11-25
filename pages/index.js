import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  // 定义 4 组高端氛围图
  const slides = [
    {
      // 模块 1: 面包 & 烘焙 (保留您喜欢的)
      // 图片：工匠正在撒面粉，光影非常有质感
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop",
      title: "L'Art de la Boulangerie",
      subtitle: "La tradition artisanale rencontre la précision industrielle.",
      link: "/products/boulangerie-patisserie/petrins"
    },
    {
      // 模块 2: 烹饪 & 生产线 (已修改)
      // 图片：展示整齐的商用厨房生产线，不锈钢设备排列，体现“后厨流水线”
      image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2080&auto=format&fit=crop",
      title: "Ligne de Cuisson",
      subtitle: "Solutions complètes pour l'agencement de votre cuisine chaude.",
      link: "/products/inox-mobilier/tables-inox" 
    },
    {
      // 模块 3: 不锈钢 & 空间 (保留)
      // 图片：极致干净、充满线条感的现代商用厨房
      image: "https://images.unsplash.com/photo-1530610476181-d8ceb28bc012?q=80&w=2070&auto=format&fit=crop",
      title: "Espace & Hygiène",
      subtitle: "L'élégance de l'inox. Tables, plonges et chariots.",
      link: "/products/inox-mobilier/tables-inox"
    },
    {
      // 模块 4: 制冷 & 制冰机 (已修改)
      // 图片：极具质感的冰块特写，代表制冰机和冷冻技术
      image: "https://images.unsplash.com/photo-1505569127510-bde15360e651?q=80&w=2070&auto=format&fit=crop",
      title: "Froid & Glace",
      subtitle: "Machines à glaçons et armoires réfrigérées haute performance.",
      link: "/products/froid/armoires-refrigerees"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-cream font-sans flex flex-col">
      <Head>
        <title>JUYI CHR - L'Excellence Industrielle</title>
        <meta name="description" content="Équipements professionnels CHR : Boulangerie, Cuisine, Inox et Froid." />
      </Head>

      <Navbar />

      <main className="flex-grow">
        
        {/* === 1. 全屏轮播 (Hero Slider) === */}
        <div className="relative bg-choco text-cream min-h-[85vh] flex items-center justify-center overflow-hidden">
          
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* 背景图 */}
              <div 
                className="absolute inset-0 bg-cover bg-center transform scale-105 transition duration-[10000ms]"
                style={{ backgroundImage: `url('${slide.image}')` }}
              ></div>
              {/* 遮罩层 */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-2 px-4 rounded-full bg-white/10 text-white text-sm font-bold tracking-[0.2em] mb-8 uppercase backdrop-blur-md border border-white/20">
              Est. 2010 • Guangzhou 
            </span>
            
            <h1 className="text-5xl tracking-tight font-extrabold sm:text-7xl md:text-8xl uppercase text-white drop-shadow-2xl">
              <span className="block mb-2">Inspirer</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EAD8C0] via-white to-[#EAD8C0]">
                {slides[currentSlide].title}
              </span>
            </h1>

            <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-100 sm:text-2xl font-light leading-relaxed drop-shadow-lg">
              {slides[currentSlide].subtitle}
            </p>
            
            {/* 底部滑动条 */}
            <div className="flex justify-center gap-4 mt-12">
              {slides.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === currentSlide ? 'w-16 bg-[#EAD8C0]' : 'w-8 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <div className="mt-16">
              <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 border border-white/50 text-base font-bold rounded-full text-white hover:bg-white hover:text-choco transition duration-300 backdrop-blur-sm uppercase tracking-widest no-underline">
                Démarrer un Projet
              </Link>
            </div>
          </div>
        </div>

        {/* === 2. 信任图标 (简约版) === */}
        <div className="bg-white py-8 border-b border-[#EAD8C0]/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-around flex-wrap gap-8 opacity-70 grayscale hover:grayscale-0 transition duration-500">
               <span className="text-xl font-bold text-choco">CE CERTIFIED</span>
               <span className="text-xl font-bold text-choco">DIRECT FACTORY</span>
               <span className="text-xl font-bold text-choco">GLOBAL SHIPPING</span>
               <span className="text-xl font-bold text-choco">FRENCH SUPPORT</span>
            </div>
          </div>
        </div>

        {/* === 3. 四大核心板块入口 (4 Modules) === */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-choco uppercase tracking-widest">
              Nos 4 Univers
            </h2>
            <div className="w-16 h-1 bg-[#EAD8C0] mx-auto mt-6"></div>
          </div>

          {/* 2行2列 布局 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {slides.map((slide, index) => (
              <Link href={slide.link} key={index} className="group relative h-[400px] overflow-hidden rounded-none shadow-2xl block">
                {/* 图片 */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition duration-[800ms] transform group-hover:scale-110"
                  style={{backgroundImage: `url('${slide.image}')`}}
                ></div>
                
                {/* 渐变遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition duration-500"></div>
                
                {/* 文字内容 */}
                <div className="absolute bottom-0 left-0 p-10 w-full">
                  <div className="border-l-4 border-[#EAD8C0] pl-6 transform transition duration-500 translate-y-2 group-hover:translate-y-0">
                    <h3 className="text-3xl font-bold text-white mb-2 uppercase tracking-wider">
                      {slide.title}
                    </h3>
                    <p className="text-gray-300 text-lg font-light opacity-0 group-hover:opacity-100 transition duration-500 delay-100">
                      {slide.subtitle} <span className="ml-2">&rarr;</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}

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
