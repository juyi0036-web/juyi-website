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
  }, []);

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
              Supply Chain Service Provider
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Direct from Factory.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Zero Markup.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              We are not a middleman. We are your transparent partner in China for premium CHR & Baking equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products" className="px-8 py-4 bg-brand-orange text-white font-bold rounded hover:bg-orange-700 transition shadow-lg shadow-orange-900/20 uppercase tracking-wider text-sm">
                View Catalog
              </Link>
              <Link href="/contact" className="px-8 py-4 border border-white/20 text-white font-bold rounded hover:bg-white/10 transition backdrop-blur-sm uppercase tracking-wider text-sm">
                Start Sourcing
              </Link>
            </div>
          </div>
        </div>

        {/* === SECTION 2: TRANSPARENCY MODEL (The Philosophy) === */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Our Transparency Model</h2>
              <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                We disrupt the traditional trading model. No hidden margins, just pure service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Traditional Model (Contrast) */}
              <div className="p-8 border border-gray-100 rounded-2xl bg-gray-50 opacity-60 grayscale hover:grayscale-0 transition duration-500">
                <h3 className="text-xl font-bold text-gray-400 mb-6 uppercase tracking-wider">Traditional Trader</h3>
                <ul className="space-y-4 text-gray-500">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span>High Product Markup (30-50%)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span>Hidden Factory Information</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span>Limited Quality Control</span>
                  </li>
                </ul>
              </div>

              {/* Juyi Model (Hero) */}
              <div className="relative p-10 border border-brand-orange/20 rounded-2xl bg-white shadow-2xl shadow-brand-blue/5 hover:-translate-y-2 transition duration-300">
                <div className="absolute top-0 right-0 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  JUYI MODEL
                </div>
                <h3 className="text-2xl font-bold text-brand-blue mb-6 uppercase tracking-wider">Supply Chain Partner</h3>
                <ul className="space-y-5 text-brand-dark">
                  <li className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                    <span className="font-semibold">Zero Markup on Products</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                    <span>Factory Direct Price (Transparent)</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                    <span>Professional Sourcing & QC Service</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                    <span>One Service Fee (Clear & Simple)</span>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Quality & Compliance</h2>
                <p className="text-gray-400">Rigorous adherence to EU standards.</p>
              </div>
              <Link href="/contact" className="text-brand-orange hover:text-white transition font-semibold flex items-center gap-2">
                Request Certificates <span className="text-xl">→</span>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: CE */}
              <div className="bg-brand-dark/50 p-8 rounded-xl border border-white/10 hover:border-brand-orange/50 transition duration-300 group">
                <div className="text-4xl mb-6 text-brand-orange group-hover:scale-110 transition duration-300">CE</div>
                <h3 className="text-xl font-bold mb-3">CE Certified</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Every piece of equipment undergoes strict testing to meet European safety, health, and environmental protection requirements.
                </p>
              </div>

              {/* Card 2: HACCP */}
              <div className="bg-brand-dark/50 p-8 rounded-xl border border-white/10 hover:border-brand-orange/50 transition duration-300 group">
                <div className="text-4xl mb-6 text-brand-orange group-hover:scale-110 transition duration-300">🛡️</div>
                <h3 className="text-xl font-bold mb-3">HACCP Design</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Equipment designed for hygiene. Easy to clean surfaces, food-grade materials, and compliance with hazard analysis standards.
                </p>
              </div>

              {/* Card 3: Eco & RoHS */}
              <div className="bg-brand-dark/50 p-8 rounded-xl border border-white/10 hover:border-brand-orange/50 transition duration-300 group">
                <div className="text-4xl mb-6 text-brand-orange group-hover:scale-110 transition duration-300">🌱</div>
                <h3 className="text-xl font-bold mb-3">Eco-Design & RoHS</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Focus on energy efficiency and restriction of hazardous substances. Sustainable solutions for the modern kitchen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === SECTION 4: FUTURE TRENDS 2026 (Innovation) === */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-brand-orange font-bold tracking-widest uppercase text-sm">Innovation Watch</span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">Future Trends 2026</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Trend 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  {/* Placeholder for trend image - using gradient for now */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
                  <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded text-white text-xs font-bold">
                    TREND #1
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-orange transition">Mechanized Artisan</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Bridging the gap between handmade quality and industrial efficiency. Spiral mixers and dividers that respect the dough.
                  </p>
                  <span className="text-brand-blue font-semibold text-sm border-b border-brand-orange/30 pb-1">Explore Mixers</span>
                </div>
              </div>

              {/* Trend 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900"></div>
                  <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded text-white text-xs font-bold">
                    TREND #2
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-orange transition">Energy Efficiency</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Rising energy costs demand smarter equipment. Next-gen ovens and cooling systems with superior insulation and recovery.
                  </p>
                  <span className="text-brand-blue font-semibold text-sm border-b border-brand-orange/30 pb-1">View Eco Ovens</span>
                </div>
              </div>

              {/* Trend 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-900 to-red-900"></div>
                  <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded text-white text-xs font-bold">
                    TREND #3
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-orange transition">Smart Kitchen</h3>
                  <p className="text-gray-500 text-sm mb-4">
                    IoT integration and programmable workflows. Digital control panels that ensure consistency across franchise locations.
                  </p>
                  <span className="text-brand-blue font-semibold text-sm border-b border-brand-orange/30 pb-1">Smart Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === CTA SECTION === */}
        <section className="py-20 bg-brand-orange text-white">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Supply Chain?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Stop paying middleman markups. Start sourcing directly from certified factories with full transparency.
            </p>
            <Link href="/contact" className="inline-block bg-white text-brand-orange px-10 py-4 rounded font-bold hover:bg-brand-blue hover:text-white transition shadow-xl uppercase tracking-wider">
              Partner with Us
            </Link>
          </div>
        </section>

      </main>

      <footer className="bg-brand-dark text-slate-400 py-12 border-t border-white/5 text-center text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="uppercase tracking-widest font-bold text-white">JUYI CHR</div>
          <p>© 2026 Juyi CHR Supply Chain Management. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
