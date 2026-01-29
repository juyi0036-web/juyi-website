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

  // Use existing slides but adapt for the new look if needed
  const slides = (t.home_slides || []).map((s) => ({
    image: s.image,
    title: s.title,
    subtitle: s.subtitle,
    link: s.link,
    fit: s.fit || 'cover',
    position: s.position || 'center'
  }));

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-brand-blue selection:bg-brand-orange selection:text-white">
      <Head>
        <title>JUYI CHR | Supply Chain Partner</title>
        <meta name="description" content="Your transparent supply chain partner for CHR & Baking equipment in China. Zero markup, factory direct prices." />
      </Head>

      <Navbar />

      <main className="flex-col">
        
        {/* === HERO SECTION: Industrial Minimalism === */}
        <div className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-brand-dark">
          {/* Background Slides */}
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-40' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover ${
                    slide.position === 'left' ? 'object-left' :
                    slide.position === 'right' ? 'object-right' :
                    slide.position === 'top' ? 'object-top' :
                    slide.position === 'bottom' ? 'object-bottom' : 'object-center'
                } grayscale`} // Grayscale for industrial look
              />
            </div>
          ))}
          
          {/* Hero Content */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <span className="inline-block py-1 px-3 border border-brand-orange/50 text-brand-orange text-xs font-bold tracking-[0.2em] mb-6 uppercase bg-brand-orange/10 rounded-sm">
              {t.hero_badge}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              {t.hero_title_1}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{t.hero_title_2}</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              {t.hero_desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="px-8 py-4 bg-brand-orange text-white font-bold rounded hover:bg-orange-700 transition shadow-lg shadow-orange-900/20 uppercase tracking-wider text-sm">
                {t.hero_btn_catalog}
              </Link>
              <Link href="/contact" className="px-8 py-4 border border-white/20 text-white font-bold rounded hover:bg-white/10 transition backdrop-blur-sm uppercase tracking-wider text-sm">
                {t.hero_btn_sourcing}
              </Link>
            </div>
          </div>
        </div>

        {/* === SECTION 2: TRANSPARENCY MODEL (The Philosophy) === */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{t.trans_title}</h2>
              <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                {t.trans_desc}
              </p>
            </div>

            <div className="flex justify-center">
              {/* Juyi Model (Centered) */}
              <div className="relative p-10 border border-brand-orange/20 rounded-2xl bg-white shadow-2xl shadow-brand-blue/5 hover:-translate-y-2 transition duration-300 max-w-3xl w-full text-center">
                <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  {t.trans_juyi_badge}
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-6 uppercase tracking-wider">{t.trans_juyi_title}</h3>
                <ul className="space-y-5 text-brand-dark">
                  <li className="flex justify-center items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                    <span className="font-semibold">{t.trans_juyi_1}</span>
                  </li>
                  <li className="flex justify-center items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                    <span>{t.trans_juyi_2}</span>
                  </li>
                  <li className="flex justify-center items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                    <span>{t.trans_juyi_3}</span>
                  </li>
                  <li className="flex justify-center items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                    <span>{t.trans_juyi_4}</span>
                  </li>
                  <li className="flex justify-center items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                    <span>{t.trans_juyi_5}</span>
                  </li>
                  <li className="flex justify-center items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                    <span>{t.trans_juyi_6}</span>
                  </li>
                  <li className="flex justify-center items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                    <span>{t.trans_juyi_7}</span>
                  </li>
                  <li className="flex justify-center items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                    <span>{t.trans_juyi_8}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* === SECTION 3: QUALITY & COMPLIANCE (Industry Standards) === */}
        <section className="py-24 bg-brand-blue text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.qual_title}</h2>
                <p className="text-gray-400">{t.qual_subtitle}</p>
              </div>
              <Link href="/contact" className="text-brand-orange hover:text-white transition font-semibold flex items-center gap-2">
                {t.qual_btn_certs} <span className="text-xl">→</span>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: CE */}
              <div className="bg-brand-dark/50 p-8 rounded-xl border border-white/10 hover:border-brand-orange/50 transition duration-300 group">
                <div className="text-4xl mb-6 text-brand-orange group-hover:scale-110 transition duration-300">CE</div>
                <h3 className="text-xl font-bold mb-3">{t.qual_ce_title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t.qual_ce_desc}
                </p>
              </div>

              {/* Card 2: HACCP */}
              <div className="bg-brand-dark/50 p-8 rounded-xl border border-white/10 hover:border-brand-orange/50 transition duration-300 group">
                <div className="text-4xl mb-6 text-brand-orange group-hover:scale-110 transition duration-300">🛡️</div>
                <h3 className="text-xl font-bold mb-3">{t.qual_haccp_title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t.qual_haccp_desc}
                </p>
              </div>

              {/* Card 3: Eco & RoHS */}
              <div className="bg-brand-dark/50 p-8 rounded-xl border border-white/10 hover:border-brand-orange/50 transition duration-300 group">
                <div className="text-4xl mb-6 text-brand-orange group-hover:scale-110 transition duration-300">🌱</div>
                <h3 className="text-xl font-bold mb-3">{t.qual_eco_title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t.qual_eco_desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === SECTION 4: INDUSTRY TRENDS 2026 (Insights) === */}
        <section className="py-16 bg-slate-50" id="trends">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-slate-900 font-serif">
                {t.trend_title}
              </h2>
              <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                {t.trend_subtitle_main}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Trend Card 1: Focus on Automation (Product Strength) */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img src="https://placehold.co/600x400/e2e8f0/475569?text=Automation+Bakery" 
                       alt="Industrial Bakery Automation" 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t.trend_badge_hot}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-slate-400 mb-2">2026 {t.trend_label_prefix} #1</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {t.trend_1_title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {t.trend_1_desc}
                  </p>
                  <Link href="/products" className="inline-flex items-center text-orange-600 font-semibold text-sm hover:underline">
                    {t.trend_link_supply} <i className="fa-solid fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>

              {/* Trend Card 2: Focus on Business Model (Service Fee) */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img src="https://placehold.co/600x400/e2e8f0/475569?text=Direct+Sourcing" 
                       alt="Direct Supply Chain Model" 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t.trend_badge_model}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-slate-400 mb-2">2026 {t.trend_label_prefix} #2</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {t.trend_2_title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {t.trend_2_desc}
                  </p>
                  <Link href="/services" className="inline-flex items-center text-orange-600 font-semibold text-sm hover:underline">
                    {t.trend_link_rates} <i className="fa-solid fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>

              {/* Trend Card 3: Focus on Compliance (QC/Standards) */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <img src="https://placehold.co/600x400/e2e8f0/475569?text=Eco+Design+EU" 
                       alt="Eco-Design Compliance" 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t.trend_badge_compliance}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-slate-400 mb-2">2026 {t.trend_label_prefix} #3</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {t.trend_3_title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {t.trend_3_desc}
                  </p>
                  <Link href="/contact" className="inline-flex items-center text-orange-600 font-semibold text-sm hover:underline">
                    {t.trend_link_qc} <i className="fa-solid fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* === CTA SECTION === */}
        <section className="py-20 bg-brand-orange text-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.cta_title}</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              {t.cta_desc}
            </p>
            <Link href="/contact" className="inline-block bg-white text-brand-orange px-10 py-4 rounded font-bold hover:bg-brand-blue hover:text-white transition shadow-xl uppercase tracking-wider">
              {t.cta_btn}
            </Link>
          </div>
        </section>

      </main>

      <footer className="bg-brand-dark text-slate-400 py-12 border-t border-white/5 text-center text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="uppercase tracking-widest font-bold text-white">JUYI CHR</div>
          <p>© 2026 Juyi CHR Supply Chain Management. {t.footer_rights}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">{t.footer_privacy}</Link>
            <Link href="/terms" className="hover:text-white transition">{t.footer_terms}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
