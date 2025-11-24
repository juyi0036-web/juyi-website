import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      <Head>
        <title>Qui sommes-nous | JUYI CHR</title>
      </Head>

      <Navbar />

      {/* 头部区域 */}
      <div className="bg-choco text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* --- 修改点：Logo 放大 --- */}
          <div className="mb-8 flex justify-center">
             {/* h-32 改成了 h-48 (更大)，p-2 改成了 p-4 (留白更多)，shadow-xl 改成了 shadow-2xl (更立体) */}
             <img 
               src="/logo.png" 
               alt="JUYI CHR Emblème" 
               className="h-48 w-auto bg-cream rounded-full p-4 border-4 border-[#EAD8C0] shadow-2xl" 
             />
          </div>
          {/* ------------------------- */}

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl uppercase">
            L'Excellence du Matériel
          </h1>
          <p className="mt-4 text-xl text-cream/80 max-w-2xl mx-auto">
            Le pont direct entre l'industrie de pointe et votre fournil.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 我们的故事 */}
        <div className="mb-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-choco mb-6 uppercase tracking-wide border-l-4 border-red-700 pl-4">
                Notre Histoire
              </h2>
              <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
                <p>
                  <strong>JUYI CHR Supply Chain Management</strong> est né d'une ambition simple : supprimer les intermédiaires inutiles entre les fabricants d'équipements de boulangerie de haute qualité et les artisans français.
                </p>
                <p>
                  Avec notre base opérationnelle au cœur des zones de production en Chine et <strong>notre équipe technique basée en France</strong> (disposant de plus de 40 ans d'expérience cumulée sur le marché CHR), nous garantissons non seulement le meilleur prix, mais surtout la qualité et le service de proximité.
                </p>
                <p>
                  Nous ne sommes pas de simples vendeurs. Nous sommes vos <strong>partenaires industriels</strong>.
                </p>
              </div>
            </div>
            
            {/* 工厂/团队占位图 */}
            <div className="mt-10 lg:mt-0 relative h-64 sm:h-72 md:h-96 lg:h-full bg-white border-4 border-[#EAD8C0] rounded-xl shadow-xl flex items-center justify-center overflow-hidden">
               <div className="text-center p-8">
                  <p className="text-5xl mb-2">🏭</p>
                  <p className="text-choco font-bold uppercase">Production & Logistique</p>
               </div>
            </div>
          </div>
        </div>

        {/* 三大优势 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-choco text-center hover:transform hover:-translate-y-2 transition duration-300">
            <div className="text-5xl mb-4">🏭</div>
            <h3 className="text-xl font-bold text-choco mb-3">Direct Usine</h3>
            <p className="text-gray-600">
              Aucun grossiste intermédiaire. Vous accédez directement aux prix de sortie d'usine avec un contrôle qualité rigoureux.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-red-700 text-center hover:transform hover:-translate-y-2 transition duration-300">
            <div className="text-5xl mb-4">🇫🇷</div>
            <h3 className="text-xl font-bold text-choco mb-3">Équipe Française</h3>
            <p className="text-gray-600">
              Connaissance parfaite des standards CHR. Notre équipe en France facilite vos échanges et comprend vos exigences techniques.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-choco text-center hover:transform hover:-translate-y-2 transition duration-300">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-choco mb-3">Logistique Maîtrisée</h3>
            <p className="text-gray-600">
              De l'emballage à l'expédition, nous gérons toute la chaîne d'approvisionnement jusqu'à votre entrepôt.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
