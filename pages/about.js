import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import { translations } from '../data/translations';

export default function About() {
  const { locale } = useRouter();
  const t = translations[locale] || translations.fr;
  return (
    <div className="min-h-screen bg-cream font-sans">
      <Head>
        <title>{t.about_meta_title}</title>
      </Head>

      <Navbar />

      <div className="bg-choco text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Logo 图片区域 */}
          <div className="mb-8 flex justify-center">
             {/* 关键修改：确保 public 文件夹里有 logo.png */}
             <img 
               src="/logo.png" 
               alt="JUYI CHR Emblème" 
               className="h-48 w-auto bg-cream rounded-full p-4 border-4 border-[#EAD8C0] shadow-2xl" 
             />
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl uppercase">
            {t.about_h1}
          </h1>
          <p className="mt-4 text-xl text-cream/80 max-w-2xl mx-auto">
            {t.about_tagline}
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 我们的故事 */}
        <div className="mb-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-choco mb-6 uppercase tracking-wide border-l-4 border-red-700 pl-4">
                {t.about_story_title}
              </h2>
              <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
                <p>
                  {t.about_story_p1}
                </p>
                <p>
                  {t.about_story_p2}
                </p>
                <p>
                  {t.about_story_p3}
                </p>
              </div>
            </div>
            
            {/* 工厂/团队占位图 */}
            <div className="mt-10 lg:mt-0 relative h-64 sm:h-72 md:h-96 lg:h-full bg-white border-4 border-[#EAD8C0] rounded-xl shadow-xl flex items-center justify-center overflow-hidden">
               <div className="text-center p-8">
                  <p className="text-5xl mb-2">🏭</p>
                  <p className="text-choco font-bold uppercase">{t.about_section_production_title}</p>
               </div>
            </div>
          </div>
        </div>

        {/* 三大优势 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-choco text-center hover:transform hover:-translate-y-2 transition duration-300">
            <div className="text-5xl mb-4">🏭</div>
            <h3 className="text-xl font-bold text-choco mb-3">{t.about_adv1_title}</h3>
            <p className="text-gray-600">
              {t.about_adv1_desc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-red-700 text-center hover:transform hover:-translate-y-2 transition duration-300">
            <div className="text-5xl mb-4">🇫🇷</div>
            <h3 className="text-xl font-bold text-choco mb-3">{t.about_adv2_title}</h3>
            <p className="text-gray-600">
              {t.about_adv2_desc}
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-choco text-center hover:transform hover:-translate-y-2 transition duration-300">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-choco mb-3">{t.about_adv3_title}</h3>
            <p className="text-gray-600">
              {t.about_adv3_desc}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
