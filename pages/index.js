import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import CTABanner from '../components/CTABanner';
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

  // 确保页面加载时始终从顶部开始渲染
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-brand-blue selection:bg-brand-orange selection:text-white">
      <Head>
        <title>JUYI CHR | Supply Chain Partner - Direct Factory, Zero Markup</title>
        <meta name="description" content="Your transparent supply chain partner for CHR & Baking equipment in China. Zero markup, factory direct prices. Minimum order: $10,000 USD." />
        <meta name="keywords" content="CHR equipment, bakery equipment, China sourcing, factory direct, supply chain, CE certified, HACCP" />
        <meta property="og:title" content="JUYI CHR | Supply Chain Partner" />
        <meta property="og:description" content="Direct factory prices for premium CHR & Baking equipment. Zero markup, full transparency." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://juyi-chr.com" />
        <link rel="canonical" href="https://juyi-chr.com" />
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
              <a href="/contact#contact" className="px-8 py-4 bg-brand-orange text-white font-bold rounded hover:bg-orange-700 transition shadow-lg shadow-orange-900/20 uppercase tracking-wider text-sm">
                {t.hero_btn_sourcing || 'Parler à l\'Assistant'}
              </a>
              <Link href="/products" className="px-8 py-4 border border-white/20 text-white font-bold rounded hover:bg-white/10 transition backdrop-blur-sm uppercase tracking-wider text-sm">
                {t.hero_btn_catalog || 'Voir le Catalogue'}
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
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-brand-orange font-bold tracking-wider uppercase text-xs">CERTIFICATIONS & CONFORMITÉ</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-dark">
                {t.qual_title || 'Qualité & Conformité'}
              </h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                {t.qual_subtitle || 'Respect rigoureux des normes européennes. Chaque équipement est certifié et testé.'}
              </p>
            </div>

            {/* Main Content - Image + Cards */}
            <div className="grid lg:grid-cols-3 gap-8 items-start mb-16">
              {/* Left: Professional Image (Spans height on large screens) */}
              <div className="lg:col-span-1 relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800" 
                  alt="Quality control and industrial standards testing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex flex-col gap-2">
                    <div className="bg-brand-orange text-white px-4 py-2 rounded-lg font-bold w-fit shadow-lg">
                      100% Certifié
                    </div>
                    <div className="text-white text-sm font-medium drop-shadow-md">
                      Contrôle qualité rigoureux sur chaque équipement
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Certification Cards Grid */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* CE Certification */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-brand-orange/50 transition duration-300 group flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-base group-hover:bg-brand-orange transition-colors shadow-sm">
                        CE
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark mb-1">{t.qual_ce_title || 'Certifié CE'}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded font-medium uppercase">Sécurité</span>
                        <span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded font-medium uppercase">Santé</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {t.qual_ce_desc || 'Chaque équipement subit des tests stricts pour répondre aux exigences européennes.'}
                  </p>
                </div>

                {/* HACCP */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-brand-orange/50 transition duration-300 group flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center group-hover:bg-brand-orange transition-colors shadow-sm">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark mb-1">{t.qual_haccp_title || 'Conception HACCP'}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded font-medium uppercase">Hygiène</span>
                        <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded font-medium uppercase">Alimentaire</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {t.qual_haccp_desc || 'Équipements conçus pour l\'hygiène avec matériaux alimentaires certifiés.'}
                  </p>
                </div>

                {/* Eco & RoHS */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-brand-orange/50 transition duration-300 group flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center group-hover:bg-brand-orange transition-colors shadow-sm">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark mb-1">{t.qual_eco_title || 'Éco-Conception'}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-emerald-100 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-medium uppercase">RoHS</span>
                        <span className="bg-emerald-100 text-emerald-700 text-[10px] px-2 py-0.5 rounded font-medium uppercase">Durable</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {t.qual_eco_desc || 'Focus sur l\'efficacité énergétique et la restriction des substances dangereuses.'}
                  </p>
                </div>

                {/* AQL & QC */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-brand-orange/50 transition duration-300 group flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center group-hover:bg-brand-orange transition-colors shadow-sm">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark mb-1">{t.qual_aql_title || 'Inspection AQL'}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-orange-100 text-orange-700 text-[10px] px-2 py-0.5 rounded font-medium uppercase">ISO 9001</span>
                        <span className="bg-orange-100 text-orange-700 text-[10px] px-2 py-0.5 rounded font-medium uppercase">0 Défaut</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {t.qual_aql_desc || 'Contrôle rigoureux sur site et inspection systématique avant expédition.'}
                  </p>
                </div>

                {/* Noise Control */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-brand-orange/50 transition duration-300 group flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center group-hover:bg-brand-orange transition-colors shadow-sm">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark mb-1">{t.qual_noise_title || 'Acoustique'}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-purple-100 text-purple-700 text-[10px] px-2 py-0.5 rounded font-medium uppercase">&lt; 70dB</span>
                        <span className="bg-purple-100 text-purple-700 text-[10px] px-2 py-0.5 rounded font-medium uppercase">Confort</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {t.qual_noise_desc || 'Conception optimisée pour un niveau sonore réduit et un meilleur confort.'}
                  </p>
                </div>

                {/* Energy Efficiency */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-brand-orange/50 transition duration-300 group flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-brand-blue rounded-lg flex items-center justify-center group-hover:bg-brand-orange transition-colors shadow-sm">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-dark mb-1">{t.qual_energy_title || 'Énergie ERP'}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="bg-yellow-100 text-yellow-700 text-[10px] px-2 py-0.5 rounded font-medium uppercase">Label A++</span>
                        <span className="bg-yellow-100 text-yellow-700 text-[10px] px-2 py-0.5 rounded font-medium uppercase">Eco-Design</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {t.qual_energy_desc || 'Conformité aux directives ERP 2024 pour une rentabilité maximale.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-brand-blue rounded-2xl p-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange mb-2">100%</div>
                <div className="text-sm text-gray-300">Équipements Certifiés CE</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange mb-2">50+</div>
                <div className="text-sm text-gray-300">Usines Certifiées</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange mb-2">0</div>
                <div className="text-sm text-gray-300">Non-Conformité</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange mb-2">24h</div>
                <div className="text-sm text-gray-300">Certificats Disponibles</div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded font-bold hover:bg-orange-700 transition shadow-lg uppercase tracking-wider text-sm">
                {t.qual_btn_certs || 'Demander les Certificats'} <span>→</span>
              </Link>
            </div>
          </div>
        </section>


        {/* CTA Banner - Remplace Assistant IA */}
        <CTABanner link="/contact#contact" />

      
{/* Build: f5cb44d */}
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
