import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import { translations } from '../data/translations';

export default function About() {
  const { locale } = useRouter();
  const t = translations[locale] || translations.fr;
  const cols = (t.services_cols || translations.fr.services_cols || []).map((c, i) => ({
    ...c,
    // 优先使用实拍照片，失败时回退到矢量图标
    photo: i === 0 ? '/services/real/supply-chain.jpg' : i === 1 ? '/services/real/qc.jpg' : '/services/real/sales.jpg',
    icon: i === 0 ? '/services/factory.svg' : i === 1 ? '/services/qc.svg' : '/services/rocket.svg'
  }))
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
                <p>{t.about_story_p1}</p>
                <p>{t.about_story_p2}</p>
                <p>{t.about_story_p3}</p>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0 relative h-80 sm:h-96 md:h-[420px] lg:h-[520px] bg-white border-4 border-[#EAD8C0] rounded-xl shadow-xl overflow-hidden">
               <img 
                 src="/equip-01.jpg"
                 alt="Production & Équipements"
                 className="absolute inset-0 w-full h-full object-cover"
                 onError={(e) => { e.currentTarget.src = '/hero-bakery-pro.jpg'; }}
               />
            </div>
          </div>
        </div>

        {/* 服务与支持 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-choco uppercase tracking-widest">{t.nav_services}</h2>
          <div className="w-16 h-1 bg-[#EAD8C0] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cols.map((col, idx) => (
            <div key={idx} className={`bg-white rounded-lg shadow-md border-t-4 ${idx===1 ? 'border-red-700' : 'border-choco'} hover:transform hover:-translate-y-2 transition duration-300 overflow-hidden`}>
              <div className="relative h-40 w-full">
                <img 
                  src={col.photo}
                  alt={col.headline}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = col.icon; e.currentTarget.className = 'absolute inset-0 w-12 h-12 object-contain mx-auto my-14'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg font-extrabold text-white tracking-wider uppercase">{col.headline}</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="space-y-5 text-left">
                  {col.items.map((item, i) => (
                    <div key={i}>
                      <div className="text-base font-extrabold text-choco mb-1">{item.title}</div>
                      <p className="text-gray-700 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
