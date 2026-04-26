import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import SmartAssistant from '../components/SmartAssistant';
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
              <a href="#assistant" className="px-8 py-4 bg-brand-orange text-white font-bold rounded hover:bg-orange-700 transition shadow-lg shadow-orange-900/20 uppercase tracking-wider text-sm">
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

        {/* === SECTION 4: LATEST INSIGHTS (Link to Blog) === */}
        <section className="py-16 lg:py-24 bg-slate-50" id="insights">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-orange-600 font-bold tracking-wider uppercase text-xs">{t.trend_badge || 'MARKET INTELLIGENCE'}</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900 font-serif">
                {t.insights_title || 'Tendances & Perspectives 2026'}
              </h2>
              <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg font-light">
                {t.insights_desc || 'Anticiper les évolutions du marché européen pour sécuriser votre avantage concurrentiel.'}
              </p>
            </div>

            {/* Featured Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-100">
                <div className="h-48 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800" 
                       alt="EU 2026 Refrigerant Regulations" 
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-lg">
                    {t.badge_regulation || 'Réglementation'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {t.article_refrigerant_title || '2026 : L\'UE Interdit Certains Fluides Frigorigènes'}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {t.article_refrigerant_desc || 'Découvrez les nouvelles restrictions sur les fluides frigorigènes et comment vous préparer.'}
                  </p>
                  <Link href="/blog/eu-2026-refrigerant-ban" className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors">
                    {t.read_more || 'Lire l\'article'} →
                  </Link>
                </div>
              </article>

              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-100">
                <div className="h-48 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800" 
                       alt="EU Energy Standards 2026" 
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-lg">
                    {t.badge_energy || 'Énergie'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {t.article_energy_title || 'Normes Énergétiques UE 2026 : Nouveaux Labels'}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {t.article_energy_desc || 'L\'UE renforce ses exigences énergétiques. Découvrez les nouveaux labels et exigences.'}
                  </p>
                  <Link href="/blog/eu-2026-energy-standards" className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors">
                    {t.read_more || 'Lire l\'article'} →
                  </Link>
                </div>
              </article>

              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-100">
                <div className="h-48 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=800" 
                       alt="CHR Automation Trends" 
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-lg">
                    {t.badge_trend || 'Tendance'}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {t.article_automation_title || 'Automatisation CHR 2026 : La Technologie'}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {t.article_automation_desc || 'L\'automatisation devient incontournable dans le secteur CHR. Découvrez les solutions.'}
                  </p>
                  <Link href="/blog/chr-automation-trends-2026" className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors">
                    {t.read_more || 'Lire l\'article'} →
                  </Link>
                </div>
              </article>
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
              <Link href="/blog" className="inline-block bg-brand-blue text-white px-8 py-4 rounded font-bold hover:bg-brand-orange transition shadow-lg uppercase tracking-wider text-sm">
                {t.view_all_articles || 'Voir Tous les Articles'}
              </Link>
            </div>
          </div>
        </section>

        {/* === SECTION 5: SOCIAL PROOF (Trust Signals) === */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-brand-orange font-bold tracking-wider uppercase text-xs">{t.trust_badge || 'ILS NOUS FONT CONFIANCE'}</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-dark">
                {t.trust_title || 'Partenaires de Confiance'}
              </h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                {t.trust_desc || 'Plus de 200 entreprises européennes nous font confiance pour leur sourcing en Chine.'}
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-orange mb-2">200+</div>
                <div className="text-sm text-gray-500">{t.stat_clients || 'Clients Actifs'}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-orange mb-2">50+</div>
                <div className="text-sm text-gray-500">{t.stat_factories || 'Usines Certifiées'}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-orange mb-2">15+</div>
                <div className="text-sm text-gray-500">{t.stat_countries || 'Pays Desservis'}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-orange mb-2">98%</div>
                <div className="text-sm text-gray-500">{t.stat_satisfaction || 'Satisfaction Client'}</div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">P</div>
                  <div className="ml-4">
                    <div className="font-bold text-brand-dark">Pierre Dubois</div>
                    <div className="text-sm text-gray-500">Boulangerie Artisanale, Paris</div>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "{t.testimonial_1 || 'JUYI nous a permis de réduire nos coûts d\'équipement de 40% tout en maintenant une qualité exceptionnelle. Leur service est impeccable.'}"
                </p>
                <div className="text-brand-orange">★★★★★</div>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">M</div>
                  <div className="ml-4">
                    <div className="font-bold text-brand-dark">Marco Rossi</div>
                    <div className="text-sm text-gray-500">Chaîne de Restaurants, Milan</div>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "{t.testimonial_2 || 'La transparence du modèle JUYI est remarquable. Nous savons exactement ce que nous payons et la qualité est toujours au rendez-vous.'}"
                </p>
                <div className="text-brand-orange">★★★★★</div>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">S</div>
                  <div className="ml-4">
                    <div className="font-bold text-brand-dark">Sophie Martin</div>
                    <div className="text-sm text-gray-500">Hôtel 5 étoiles, Bruxelles</div>
                  </div>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "{t.testimonial_3 || 'Le support 24/7 et la conformité CE parfaite nous ont convaincus. JUYI est devenu notre partenaire stratégique.'}"
                </p>
                <div className="text-brand-orange">★★★★★</div>
              </div>
            </div>
          </div>
        </section>

        {/* === SECTION 6: SMART ASSISTANT (Inquiry & Contact) === */}
        <section className="py-16 bg-slate-50" id="assistant">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-brand-orange font-bold tracking-wider uppercase text-xs">{t.assistant_badge || 'ASSISTANT IA'}</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-brand-dark">
                {t.assistant_section_title || 'Votre Expert CHR Personnel'}
              </h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                {t.assistant_section_desc || 'Posez vos questions, obtenez un devis, ou contactez notre équipe. Notre assistant IA vous répond instantanément.'}
              </p>
            </div>
            <SmartAssistant />
          </div>
        </section>

        {/* === CTA SECTION === */}
        <section className="py-20 bg-brand-orange text-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.cta_title || 'Prêt à Optimiser Votre Supply Chain ?'}</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              {t.cta_desc || 'Arrêtez de payer les marges des intermédiaires. Commencez à sourcer directement auprès d\'usines certifiées en toute transparence.'}
            </p>
            <a href="#assistant" className="inline-block bg-white text-brand-orange px-10 py-4 rounded font-bold hover:bg-brand-blue hover:text-white transition shadow-xl uppercase tracking-wider">
              {t.cta_btn || 'Parler à l\'Assistant IA'}
            </a>
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
