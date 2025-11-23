import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>JUYI CHR - Équipement Boulangerie & Cuisine Pro</title>
        <meta name="description" content="Fournisseur d'équipement professionnel pour boulangerie, pâtisserie et cuisine (CHR). Qualité, Service et Export." />
      </Head>

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Votre Partenaire Industriel</span>{' '}
            <span className="block text-red-700 xl:inline">pour le CHR</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Depuis la Chine vers la France. Une gamme complète d'équipements de boulangerie, de froid et de préparation.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#5A3E2B] hover:bg-gray-800 md:py-4 md:text-lg md:px-10 no-underline">
                Découvrir le Catalogue
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white mt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <p className="text-center text-base text-gray-400">
                &copy; 2025 Juyi CHR Supply Chain Management. All rights reserved.
            </p>
        </div>
      </footer>
    </div>
  );
}
