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

  // === 这里修改了：全部使用您上传到 public/products 的本地图片 ===
  const slides = [
    {
      // 1. 面包 (Boulangerie)
      // 对应文件：public/products/boulangerie.jpg
      image: "/products/boulangerie.jpg", 
      title: "L'Art de la Boulangerie",
      subtitle: "La tradition artisanale rencontre la précision industrielle.",
      link: "/products/boulangerie-patisserie/petrins"
    },
    {
      // 2. 烹饪 (Cuisine)
      // 对应文件：public/products/cuisine.jpg
      image: "/products/cuisine.jpg",
      title: "Ligne de Cuisson",
      subtitle: "Solutions complètes pour l'agencement de votre cuisine chaude.",
      link: "/products/inox-mobilier/tables-inox" 
    },
    {
      // 3. 不锈钢 (Inox)
      // 对应文件：public/products/inox.jpg
      image: "/products/inox.jpg",
      title: "Espace & Hygiène",
      subtitle: "L'élégance de l'inox. Tables, plonges et chariots.",
      link: "/products/inox-mobilier/tables-inox"
    },
    {
      // 4. 制冷 (Froid)
      // 对应文件：public/products/froid.jpg
      image: "/products/froid.jpg",
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
              {/* 显示本地图片 */}
              <img 
                src={slide.image} 
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              {/* 黑色遮罩 */}
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
               <span className="text-xl font-bold text-choco">{t.trust_response}</span>
            </div>
          </div>
        </div>

        {/* === 四大核心板块入口 (2x2 布局) === */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-choco uppercase tracking-widest">
              {t.section_univers}
            </h2>
            <div className="w-16 h-1 bg-[#EAD8C0] mx-auto mt-6"></div>
          </div>

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
