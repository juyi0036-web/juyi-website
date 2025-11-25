import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream font-sans flex flex-col">
      <Head>
        <title>JUYI CHR - Équipement Boulangerie & Cuisine Pro</title>
        <meta name="description" content="Fournisseur d'équipement professionnel pour boulangerie, pâtisserie et cuisine (CHR). Direct Usine Chine-France." />
      </Head>

      <Navbar />

      <main className="flex-grow">
        
        {/* 1. 豪华首屏 (Hero Section) - 带背景图 */}
        <div className="relative bg-choco text-cream min-h-[85vh] flex items-center justify-center overflow-hidden">
          
          {/* 背景图层 (这里用了网络高清图，您可以随时换成自己的工厂视频) */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* 黑色遮罩，让文字更清晰 */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* 文字内容层 */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-red-700/80 text-white text-sm font-bold tracking-widest mb-6 uppercase backdrop-blur-sm border border-red-500/50">
              Since 2010 • Guangzhou Base
            </span>
            <h1 className="text-5xl tracking-tight font-extrabold sm:text-6xl md:text-7xl uppercase text-white drop-shadow-lg">
              <span className="block">La Puissance Industrielle</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EAD8C0] to-white mt-2">
                Au Service Du Goût
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200 sm:text-2xl md:mt-10 font-light leading-relaxed">
              Équipements de boulangerie haute performance. <br/>
              <strong className="font-bold text-white">Prix Direct Usine</strong> sans compromis sur la qualité.
            </p>
            
            {/* 按钮组 */}
            <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12 gap-4">
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

        {/* 2. 信任背书条 (Trust Bar) */}
        <div className="bg-choco py-12 border-b border-[#EAD8C0]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl mb-3">🛡️</span>
                <h3 className="text-cream font-bold uppercase tracking-wider text-sm">Normes CE</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl mb-3">🏭</span>
                <h3 className="text-cream font-bold uppercase tracking-wider text-sm">Direct Usine</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl mb-3">🚢</span>
                <h3 className="text-cream font-bold uppercase tracking-wider text-sm">Logistique Globale</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl mb-3">🔧</span>
                <h3 className="text-cream font-bold uppercase tracking-wider text-sm">SAV Pièces 1 An</h3>
              </div>
            </div>
          </div>
        </div>

        {/* 3. 视觉化分类 (Image Cards) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-choco uppercase tracking-wide">
              Solutions Complètes
            </h2>
            <div className="w-24 h-1 bg-red-700 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Boulangerie */}
            <Link href="/products/boulangerie-patisserie/petrins" className="group relative h-96 rounded-2xl overflow-hidden shadow-xl block">
              <div 
                className="absolute inset-0 bg-cover bg-center transition duration-700 transform group-hover:scale-110"
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1555507036-ab1f40388085?q=80&w=1926&auto=format&fit=crop')"}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase group-hover:text-[#EAD8C0] transition">Boulangerie</h3>
                <p className="text-gray-300 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  Pétrins, Fours, Diviseuses... <br/> La base de votre métier.
                </p>
              </div>
            </Link>

            {/* Card 2: Inox */}
            <Link href="/products/inox-mobilier/tables-inox" className="group relative h-96 rounded-2xl overflow-hidden shadow-xl block">
              <div 
                className="absolute inset-0 bg-cover bg-center transition duration-700 transform group-hover:scale-110"
                style={{backgroundImage: "url('https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=2071&auto=format&fit=crop')"}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase group-hover:text-[#EAD8C0] transition">Mobilier Inox</h3>
                <p className="text-gray-300 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  Tables, Plonges, Chariots... <br/> Robustesse AISI 304.
                </p>
              </div>
            </Link>

            {/* Card 3: Froid */}
            <Link href="/products/froid/armoires-refrigerees" className="group relative h-96 rounded-2xl overflow-hidden shadow-xl block">
              <div 
                className="absolute inset-0 bg-cover bg-center transition duration-700 transform group-hover:scale-110"
                style={{backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661331911412-d3dfc9099b30?q=80&w=2070&auto=format&fit=crop')"}}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2 uppercase group-hover:text-[#EAD8C0] transition">Froid Professionnel</h3>
                <p className="text-gray-300 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                  Armoires, Vitrines, Tours... <br/> Conservation maîtrisée.
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
