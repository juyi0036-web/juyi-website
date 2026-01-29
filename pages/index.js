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
  const [selectedTrend, setSelectedTrend] = useState(null);

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
        <section className="py-16 lg:py-24 bg-slate-50" id="trends">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-orange-600 font-bold tracking-wider uppercase text-xs">{t.trend_badge}</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900 font-serif">
                {t.trend_title}
              </h2>
              <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg font-light">
                {t.trend_subtitle_main}
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1: Automation (Real Bakery Factory Image) */}
              <article 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-100 flex flex-col h-full" 
                onClick={() => setSelectedTrend('automation')}
              >
                <div className="h-64 overflow-hidden relative">
                  {/* Image: Industrial Dough Mixer / Bakery Line */}
                  <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop" 
                       alt="Industrial Bakery Automation" 
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-lg">
                    {t.trend_badge_hot}
                  </div>
                  {/* Dark Gradient Overlay for text contrast if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-orange-600 mb-3 font-semibold">
                    <i className="fa-solid fa-robot mr-2"></i> {t.trend_label_1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {t.trend_1_title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {t.trend_1_desc}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-sm font-medium text-slate-900 group-hover:text-orange-600 transition-colors">
                    <span>{t.trend_link_supply}</span>
                    <i className="fa-solid fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </article>

              {/* Card 2: Direct Model (Supply Chain/Logistics Image) */}
              <article 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-100 flex flex-col h-full" 
                onClick={() => setSelectedTrend('model')}
              >
                <div className="h-64 overflow-hidden relative">
                  {/* Image: Shipping Containers / Global Trade */}
                  <img src="https://images.unsplash.com/photo-1494412574643-35d32468817e?q=80&w=1000&auto=format&fit=crop" 
                       alt="Supply Chain Logistics" 
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-lg">
                    {t.trend_badge_model}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-blue-700 mb-3 font-semibold">
                    <i className="fa-solid fa-handshake mr-2"></i> {t.trend_label_2}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {t.trend_2_title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {t.trend_2_desc}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-sm font-medium text-slate-900 group-hover:text-blue-700 transition-colors">
                    <span>{t.trend_link_rates}</span>
                    <i className="fa-solid fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </article>

              {/* Card 3: Compliance (Eco/Green Tech Image) */}
              <article 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-100 flex flex-col h-full" 
                onClick={() => setSelectedTrend('compliance')}
              >
                <div className="h-64 overflow-hidden relative">
                  {/* Image: Eco Friendly Factory / Solar Panels */}
                  <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=1000&auto=format&fit=crop" 
                       alt="Eco Design Compliance" 
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-lg">
                    {t.trend_badge_compliance}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-green-700 mb-3 font-semibold">
                    <i className="fa-solid fa-leaf mr-2"></i> {t.trend_label_3}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-green-700 transition-colors">
                    {t.trend_3_title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                    {t.trend_3_desc}
                  </p>
                  <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between text-sm font-medium text-slate-900 group-hover:text-green-700 transition-colors">
                    <span>{t.trend_link_qc}</span>
                    <i className="fa-solid fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </article>

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

      {/* Simple Modal Overlay */}
      {selectedTrend && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedTrend(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative animate-fadeIn" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedTrend(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center mb-6">
              <span className="inline-block py-1 px-3 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                {t.trend_badge}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                {selectedTrend === 'automation' && t.trend_1_title}
                {selectedTrend === 'model' && t.trend_2_title}
                {selectedTrend === 'compliance' && t.trend_3_title}
              </h3>
            </div>
            
            <div className="prose prose-slate mx-auto text-slate-600 leading-relaxed">
              <p className="text-lg mb-6">
                {selectedTrend === 'automation' && t.trend_1_desc}
                {selectedTrend === 'model' && t.trend_2_desc}
                {selectedTrend === 'compliance' && t.trend_3_desc}
              </p>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2 text-sm uppercase">{t.trend_takeaway_title}</h4>
                <p className="text-sm">
                  {selectedTrend === 'automation' && t.trend_1_takeaway}
                  {selectedTrend === 'model' && t.trend_2_takeaway}
                  {selectedTrend === 'compliance' && t.trend_3_takeaway}
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/contact" className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition shadow-lg shadow-orange-600/20">
                {t.hero_btn_sourcing}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
