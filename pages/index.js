import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  // 定义轮播图：精准对应您的三大主推系列
  const slides = [
    {
      // Slide 1: 面包房核心 (和面 -> 醒发 -> 烘烤)
      // 图片：展示烤箱和面包制作场景，体现专业度
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop",
      title: "Expertise Boulangerie",
      subtitle: "Pétrins, Repose-pâtons, Fermentation & Fours."
    },
    {
      // Slide 2: 不锈钢 & 推车 (Inox)
      // 图片：展示干净的不锈钢厨房环境
      image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=2071&auto=format&fit=crop",
      title: "Mobilier Inox & Logistique",
      subtitle: "Tables de travail, Plonges et Chariots échelles."
    },
    {
      // Slide 3: 制冷 & 制冰 (Froid) -> 替换了原来的烹饪图
      // 图片：展示制冰机或冷柜相关的场景 (这里选了一张带冰块和金属质感的图，暗示制冰机)
      image: "https://images.unsplash.com/photo-1561592230-64c76477c528?q=80&w=2070&auto=format&fit=crop",
      title: "Froid Technique & Bar",
      subtitle: "Tours réfrigérés, Machines à glaçons & Vitrines."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-cream font-sans flex flex-col">
      <Head>
        <title>JUYI CHR - Solutions Globales pour Cuisines & Boulangeries</title>
        <meta name="description" content="Fournisseur d'équipement professionnel CHR. Direct Usine Chine-France." />
      </Head>

      <Navbar />

      <main className="flex-grow">
        
        {/* === 动态轮播首屏 === */}
        <div className="relative bg-choco text-cream min-h-[85vh] flex items-center justify-center overflow-hidden">
          
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transform scale-105"
                style={{ backgroundImage: `url('${slide.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/55"></div>
            </div>
          ))}

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-red-700/90 text-white text-sm font-bold tracking-widest mb-6 uppercase backdrop-blur-sm border border-white/20 shadow-lg">
              Depuis 2010 • Fabrication & Export
            </span>
            
            <h1 className="text-5xl tracking-tight font-extrabold sm:text-6xl md:text-7xl uppercase text-white drop-shadow-2xl">
              <span className="block">L'équipement Pro</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EAD8C0] to-white mt-4 transition-all duration-500">
                {slides[currentSlide].title}
              </span>
            </h1>

            <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-100 sm:text-2xl font-light leading-relaxed drop-shadow-md">
              {slides[currentSlide].subtitle}
            </p>
            
            <div className="flex justify-center gap-3 mt-8">
              {slides.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-8 bg-red-600' : 'w-2 bg-white/50 hover:bg-white'
                  }`}
                />
              ))}
            </div>

            <div className="mt-12 max-w-md mx-auto sm:flex sm:justify-center gap-4">
              <div className="rounded-full shadow-xl glow-effect">
                {/* 按钮链接到核心产品：和面机 */}
                <Link href="/products/boulangerie-patisserie/petrins" className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-choco bg-[#EAD8C0] hover:bg-white md:py-4 md:text-lg md:px-10 no-underline transition duration-300 transform hover:scale-105">
                  Voir nos Produits
                </Link>
              </div>
              <div className="mt-4 sm:mt-0">
                <Link href="/contact" className="w-full flex items-center justify-center px-8 py-4 border-2 border-white/30 text-base font-bold rounded-full text-white bg-white/10 hover:bg-white/20 backdrop-blur-md md:py-4 md:text-lg md:px-10 no-underline transition duration-300">
                  Contact Export
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* === 信任背书条 === */}
        <div className="bg-choco py-10 border-b border-[#EAD8C0]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              <div className="flex flex-col items-center justify-center group">
                <span className="text-4xl mb-3 group-hover:scale-110 transition">🛡️</span>
                <h3 className="text-cream font-bold uppercase tracking-wider text-sm">Normes CE</h3>
              </div>
              <div className="flex flex-col items-center justify-center group">
                <span className="text-4xl mb-3 group-hover:scale-110 transition">🏭</span>
                <h3 className="text-cream font-bold uppercase tracking-wider text-sm">Direct Usine</h3>
              </div>
              <div className="flex flex-col items-center justify-center group">
                <span className="text-4xl mb-3 group-hover:scale-110 transition">⚡️</span>
                <h3 className="text-cream font-bold uppercase tracking-wider text-sm">380V / 220V</h3>
              </div>
              <div className="flex flex-col items-center justify-center group">
                <span className="text-4xl mb-3 group-hover:scale-110 transition">📦</span>
                <h3 className="text-cream font-bold uppercase tracking-wider text-sm">Export France</h3>
              </div>
            </div>
          </div>
        </div>

        {/* === 重点产品系列入口 === */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-choco uppercase tracking-wide">
              Nos Séries Phares
            </h2>
            <div className="w-24 h-1 bg-red-700 mx-auto mt-4"></div>
            <p className="mt-4 text-gray-600">Une gamme complète adaptée aux artisans français.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Boulangerie (重点：Pétrin, Repose Pâton, Four) */}
            <Link href="/products/boulangerie-patisserie/petrins" className="group relative h-96 rounded-2xl overflow-hidden shadow-xl block">
              <div 
                className="absolute inset-0 bg-cover bg-center transition duration-700 transform group-hover:scale-110"
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop')"}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase group-hover:text-[#EAD8C0] transition">Panification</h3>
                <p className="text-gray-300 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  Pétrins, Repose-Pâtons, Fours... <br/> La chaîne complète.
                </p>
              </div>
            </Link>

            {/* Card 2: Inox (重点：Table, Chariot) */}
            <Link href="/products/inox-mobilier/tables-inox" className="group relative h-96 rounded-2xl overflow-hidden shadow-xl block">
              <div 
                className="absolute inset-0 bg-cover bg-center transition duration-700 transform group-hover:scale-110"
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=2071&auto=format&fit=crop')"}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase group-hover:text-[#EAD8C0] transition">Univers Inox</h3>
                <p className="text-gray-300 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  Tables, Plonges & Chariots. <br/> Standard ou Sur-mesure.
                </p>
              </div>
            </Link>

            {/* Card 3: Froid (重点：Tour, Machine à glaçons) */}
            <Link href="/products/froid/armoires-refrigerees" className="group relative h-96 rounded-2xl overflow-hidden shadow-xl block">
              <div 
                className="absolute inset-0 bg-cover bg-center transition duration-700 transform group-hover:scale-110"
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1561592230-64c76477c528?q=80&w=2070&auto=format&fit=crop')"}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase group-hover:text-[#EAD8C0] transition">Froid & Bar</h3>
                <p className="text-gray-300 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  Tours Pâtissiers, Armoires <br/> & Machines à Glaçons.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="bg-choco border-t border-white/10 mt-auto text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center">
            <p className="text-sm opacity-60">
                &copy; 2025 Juyi CHR Supply Chain Management.
            </p>
        </div>
      </footer>
    </div>
  );
}
