import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import { translations } from '../data/translations';

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale] || translations.fr;

  // 直接使用高清网络图，无需上传！
  const slides = [
    {
      // 1. 面包 (Boulangerie) - 工匠撒粉图
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop",
      title: "L'Art de la Boulangerie",
      subtitle: "La tradition artisanale rencontre la précision industrielle.",
      link: "/products/boulangerie-patisserie/petrins"
    },
    {
      // 2. 烹饪 (Cuisine) - 繁忙的后厨生产线
      image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2080&auto=format&fit=crop",
      title: "Ligne de Cuisson",
      subtitle: "Solutions complètes pour l'agencement de votre cuisine chaude.",
      link: "/products/inox-mobilier/tables-inox" 
    },
    {
      // 3. 不锈钢 (Inox) - 极致干净的空间
      image: "https://images.unsplash.com/photo-1530610476181-d8ceb28bc012?q=80&w=2070&auto=format&fit=crop",
      title: "Espace & Hygiène",
      subtitle: "L'élégance de l'inox. Tables, plonges et chariots.",
      link: "/products/inox-mobilier/tables-inox"
    },
    {
      // 4. 制冷 (Froid) - 冰块特写
      image: "https://images.unsplash.com/photo-1505569127510-bde15360e651?q=80&w=2070&auto=format&fit=crop",
      title: "Froid & Glace",
      subtitle: "Machines à glaçons et armoires réfrigérées haute performance.",
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

  return (
    <div className="min-h-screen bg-cream font-sans flex flex-col">
      <Head>
        <title>JUYI CHR - {t.hero_title_1}</title>
        <meta name="description" content="Fournisseur d'équipement professionnel CHR. Direct Usine Chine-France." />
      </Head>

      <Navbar />

      <main className="flex-grow">
        
        {/* === 全屏轮播 Hero === */}
        <div className="relative bg-choco text-cream min-h-[85vh] flex items-center justify-center overflow-hidden">
          
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* 直接显示网络图片 */}
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
              <Link href="/products/boulangerie-patisserie/petrins" className="inline-flex items-center justify-center px-10 py-4 border border-white/50 text-base font-bold rounded-full text-white hover:bg-white hover:text-choco transition duration-300 backdrop-blur-sm uppercase tracking-widest no-underline">
                {t.hero_btn_catalog}
              </Link>
            </div>
          </div>
        </div>

        {/* === 信任图标 === */}
        <div className="bg-white py-8 border-b border-[#EAD8C0]/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-around flex-wrap gap-8 opacity-70 grayscale hover:grayscale-0 transition duration-500">
               <span className="text-xl font-bold text-choco">{t.trust_ce}</span>
               <span className="text-xl font-bold text-choco">{t.trust_factory}</span>
               <span className="text-xl font-bold text-choco">{t.trust_export}</span>
               <span className="text-xl font-
