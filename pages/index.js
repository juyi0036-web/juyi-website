import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react'; // 引入需要的 React 功能
import Navbar from '../components/Navbar';

export default function Home() {
  // 定义轮播图的图片和对应的文字主题
  const slides = [
    {
      // 图片1：专业厨房/餐饮 (Cuisine & Restaurant)
      image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop",
      title: "Cuisine Professionnelle",
      subtitle: "Des équipements performants pour les chefs exigeants."
    },
    {
      // 图片2：烘焙 (Boulangerie)
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop",
      title: "Boulangerie & Pâtisserie",
      subtitle: "La tradition du goût alliée à la puissance industrielle."
    },
    {
      // 图片3：不锈钢/仓储 (Inox & Stockage)
      image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=2071&auto=format&fit=crop",
      title: "Agencement Inox & Froid",
      subtitle: "Hygiène irréprochable et conservation maîtrisée."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // 自动切换逻辑：每 5 秒换一张图
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
        <meta name="description" content="Fournisseur d'équipement professionnel CHR : Cuisine, Boulangerie, Froid et Inox. Direct Usine Chine-France." />
      </Head>

      <Navbar />

      <main className="flex-grow">
        
        {/* === 动态轮播首屏 (Hero Slider) === */}
        <div className="relative bg-choco text-cream min-h-[85vh] flex items-center justify-center overflow-hidden">
          
          {/* 背景图片层 (循环生成所有图片，通过透明度控制显示哪一张) */}
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
              {/* 黑色遮罩 */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}

          {/* 文字内容层 */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-red-700/90 text-white text-sm font-bold tracking-widest mb-6 uppercase backdrop-blur-sm border border-white/20 shadow-lg">
              Depuis 2010 • Expert CHR Global
            </span>
            
            <h1 className="text-5xl tracking-tight font-extrabold sm:text-6xl md:text-7xl uppercase text-white drop-shadow-2xl">
              <span className="block">Votre Partenaire Industriel</span>
              {/* 动态变化的副标题，对应当前图片 */}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EAD8C0] to-white mt-4 transition-all duration-500">
                {slides[currentSlide].title}
              </span>
            </h1>

            <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-100 sm:text-2xl font-light leading-relaxed drop-shadow-md">
              {slides[currentSlide].subtitle}
            </p>
            
            {/* 底部滑动指示点 */}
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

            {/* 按钮组 */}
            <div className="mt-12 max-w-md mx-auto sm:flex sm:justify-center gap-4">
              <div className="rounded-full shadow-xl glow-effect">
                <Link href="/products/boulangerie-patisserie/petrins" className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-choco bg-[#EAD8C0] hover:bg-white md:py-4 md:text-lg md:px-10 no-underline transition duration-300 transform hover:scale-105">
                  Voir le Catalogue
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

        {/* === 2. 信任背书条 === */}
        <div className="bg-choco py-10 border-b border-[#EAD8C0]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              <div className="flex flex-col items-center justify-center group">
                <span className="text-4xl mb-3 group-hover:scale-110 transition">🛡️</span>
                <h3 className="text-cream font-bold uppercase tracking-wider text-sm">Normes CE & UE</h3>
              </div>
              <div className="flex flex-col items-center justify-center group">
                <span className="text-4xl mb-3 group-hover:scale-110 transition">🏭</span>
                <h3 className="text-cream font-bold uppercase tracking-wider text-sm">Prix Direct Usine</h3>
              </div>
              <div className="flex flex-col items-center justify-center group">
                <span className="text-4xl mb-3 group-hover:scale-110 transition">⚡️</span>
                <h3 className="text-cream font-bold uppercase tracking-wider text-sm">Réponse sous 24h</h3>
              </div>
              <div className="flex flex-col items-center justify-center group">
                <span className="text-4xl mb-3 group-hover:scale-110 transition">📦</span>
                <h3 className="text-cream font-bold uppercase tracking-wider text-sm">Export Sécurisé</h3>
              </div>
            </div>
          </div>
        </div>

        {/* === 3. 全品类入口 (不仅是烘焙) === */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-choco uppercase tracking-wide">
              Nos Univers CHR
            </h2>
            <div className="w-24 h-1 bg-red-700 mx-auto mt-4"></div>
            <p className="mt-4 text-gray-600">Tout pour équiper votre établissement, de A à Z.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Cuisine & Restauration */}
            <Link href="/products/inox-mobilier/tables-inox" className="group relative h-96 rounded-2xl overflow-hidden shadow-xl block">
              <div 
                className="absolute inset-0 bg-cover bg-center transition duration-700 transform group-hover:scale-110"
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop')"}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase group-hover:text-[#EAD8C0] transition">Cuisine Pro</h3>
                <p className="text-gray-300 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  Fourneaux, Friteuses, Grills... <br/> La performance au service du chef.
                </p>
              </div>
            </Link>

            {/* Card 2: Boulangerie */}
            <Link href="/products/boulangerie-patisserie/petrins" className="group relative h-96 rounded-2xl overflow-hidden shadow-xl block">
              <div 
                className="absolute inset-0 bg-cover bg-center transition duration-700 transform group-hover:scale-110"
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop')"}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase group-hover:text-[#EAD8C0] transition">Boulangerie</h3>
                <p className="text-gray-300 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  Pétrins, Fours Rotatifs... <br/> L'art de la pâte.
                </p>
              </div>
            </Link>

            {/* Card 3: Froid & Inox */}
            <Link href="/products/froid/armoires-refrigerees" className="group relative h-96 rounded-2xl overflow-hidden shadow-xl block">
              <div 
                className="absolute inset-0 bg-cover bg-center transition duration-700 transform group-hover:scale-110"
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=2071&auto=format&fit=crop')"}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase group-hover:text-[#EAD8C0] transition">Inox & Froid</h3>
                <p className="text-gray-300 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  Armoires, Tables, Plonges... <br/> Hygiène et durabilité.
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
