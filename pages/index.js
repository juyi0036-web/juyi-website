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
        {/* Hero 区域 */}
        <div className="bg-choco text-cream py-24 border-b-8 border-[#EAD8C0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl uppercase">
              <span className="block">Votre Partenaire Industriel</span>
              <span className="block text-red-600 mt-2">pour le CHR</span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-xl text-cream/90 sm:text-2xl md:mt-10 md:max-w-3xl">
              Direct Usine. Qualité Export. Service Français.
              <br/>
              <span className="text-base font-normal mt-4 block opacity-80">
                L'équipement professionnel de boulangerie et cuisine, sans intermédiaire.
              </span>
            </p>
            
            {/* 按钮组 */}
            <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12 gap-4">
              <div className="rounded-md shadow">
                {/* 链接已修复，指向和面机页面 */}
                <Link href="/products/boulangerie-patisserie/petrins" className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-choco bg-cream hover:bg-white md:py-4 md:text-lg md:px-10 no-underline transition transform hover:-translate-y-1">
                  Voir le Catalogue
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0">
                <Link href="/contact" className="w-full flex items-center justify-center px-8 py-4 border-2 border-cream text-base font-bold rounded-md text-cream bg-transparent hover:bg-red-700 md:py-4 md:text-lg md:px-10 no-underline transition transform hover:-translate-y-1">
                  Contact Export
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 快速分类入口 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-choco uppercase tracking-wide">
              Nos Gammes Principales
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Une solution complète pour chaque étape de votre production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* 卡片 1: Boulangerie */}
            <div className="bg-white rounded-xl shadow-lg border border-[#EAD8C0] overflow-hidden group hover:shadow-2xl transition duration-300">
              <div className="h-48 bg-[#5A3E2B] flex items-center justify-center group-hover:bg-red-700 transition">
                <span className="text-6xl">🍞</span>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-choco mb-4 uppercase">Boulangerie</h3>
                <p className="text-gray-600 mb-6">Pétrins, Fours, Diviseuses... Tout pour le travail de la pâte.</p>
                <Link href="/products/boulangerie-patisserie/petrins" className="text-red-700 font-bold hover:underline">
                  Découvrir &rarr;
                </Link>
              </div>
            </div>

            {/* 卡片 2: Inox */}
            <div className="bg-white rounded-xl shadow-lg border border-[#EAD8C0] overflow-hidden group hover:shadow-2xl transition duration-300">
              <div className="h-48 bg-[#7A7A7A] flex items-center justify-center group-hover:bg-gray-600 transition">
                <span className="text-6xl">🔧</span>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-choco mb-4 uppercase">Mobilier Inox</h3>
                <p className="text-gray-600 mb-6">Tables, Plonges, Chariots... La robustesse de l'acier 304.</p>
                <Link href="/products/inox-mobilier/tables-inox" className="text-red-700 font-bold hover:underline">
                  Découvrir &rarr;
                </Link>
              </div>
            </div>

            {/* 卡片 3: Froid */}
            <div className="bg-white rounded-xl shadow-lg border border-[#EAD8C0] overflow-hidden group hover:shadow-2xl transition duration-300">
              <div className="h-48 bg-[#2C5282] flex items-center justify-center group-hover:bg-blue-700 transition">
                <span className="text-6xl">❄️</span>
              </div>
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold text-choco mb-4 uppercase">Froid Pro</h3>
                <p className="text-gray-600 mb-6">Armoires, Tours, Vitrines... La conservation parfaite.</p>
                <Link href="/products/froid/armoires-refrigerees" className="text-red-700 font-bold hover:underline">
                  Découvrir &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-[#EAD8C0] mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 text-center">
            <p className="text-sm text-gray-400">
                &copy; 2025 Juyi CHR Supply Chain Management.
            </p>
        </div>
      </footer>
    </div>
  );
}
