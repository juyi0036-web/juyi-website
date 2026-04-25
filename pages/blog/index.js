import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';
import { blogPosts } from '../../data/blogPosts';

export default function Blog() {
  const { locale } = useRouter();
  const t = locale === 'en' ? 'en' : locale === 'es' ? 'es' : 'fr';

  const categories = [
    { id: 'all', label: t === 'en' ? 'All' : t === 'es' ? 'Todos' : 'Tous' },
    { id: 'Réglementation UE', label: t === 'en' ? 'EU Regulation' : t === 'es' ? 'Regulación UE' : 'Réglementation UE' },
    { id: 'Normes Énergétiques', label: t === 'en' ? 'Energy Standards' : t === 'es' ? 'Estándares Energéticos' : 'Normes Énergétiques' },
    { id: 'Tendances', label: t === 'en' ? 'Trends' : t === 'es' ? 'Tendencias' : 'Tendances' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-brand-blue">
      <Head>
        <title>{t === 'en' ? 'Blog - Industry Insights | JUYI CHR' : t === 'es' ? 'Blog - Perspectivas de la Industria | JUYI CHR' : 'Blog - Perspectives Industrie | JUYI CHR'}</title>
        <meta name="description" content={t === 'en' ? 'Latest industry insights on EU regulations, energy standards, and CHR equipment trends.' : t === 'es' ? 'Últimas perspectivas de la industria sobre regulaciones UE, estándares energéticos y tendencias de equipos CHR.' : 'Dernières perspectives de l\'industrie sur les réglementations UE, normes énergétiques et tendances des équipements CHR.'} />
      </Head>

      <Navbar />

      {/* Hero Header */}
      <div className="bg-brand-blue text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">
            {t === 'en' ? 'INDUSTRY INSIGHTS' : t === 'es' ? 'PERSPECTIVAS DE LA INDUSTRIA' : 'PERSPECTIVES INDUSTRIE'}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl uppercase mb-4">
            {t === 'en' ? 'Blog & News' : t === 'es' ? 'Blog y Noticias' : 'Blog & Actualités'}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            {t === 'en' ? 'Stay informed about EU regulations, energy standards, and industry trends.' : t === 'es' ? 'Manténgase informado sobre regulaciones UE, estándares energéticos y tendencias de la industria.' : 'Restez informé sur les réglementations UE, normes énergétiques et tendances de l\'industrie.'}
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const title = post.title[t] || post.title.fr;
            const excerpt = post.excerpt[t] || post.excerpt.fr;
            
            return (
              <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-brand-dark mb-3 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand-orange transition-colors">
                      {title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-brand-orange font-semibold text-sm hover:text-orange-700 transition-colors"
                  >
                    {t === 'en' ? 'Read More' : t === 'es' ? 'Leer Más' : 'Lire la Suite'}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-brand-blue rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {t === 'en' ? 'Stay Updated' : t === 'es' ? 'Manténgase Actualizado' : 'Restez Informé'}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t === 'en' ? 'Subscribe to our newsletter for the latest industry insights and regulatory updates.' : t === 'es' ? 'Suscríbase a nuestro boletín para las últimas perspectivas de la industria y actualizaciones regulatorias.' : 'Abonnez-vous à notre newsletter pour les dernières perspectives de l\'industrie et les mises à jour réglementaires.'}
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-brand-orange text-white px-8 py-4 rounded font-bold hover:bg-orange-700 transition shadow-xl uppercase tracking-wider"
          >
            {t === 'en' ? 'Contact Us' : t === 'es' ? 'Contáctenos' : 'Contactez-nous'}
          </Link>
        </div>
      </main>

      <footer className="bg-brand-dark text-slate-400 py-12 border-t border-white/5 text-center text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="uppercase tracking-widest font-bold text-white">JUYI CHR</div>
          <p>© 2026 Juyi CHR Supply Chain Management. {t === 'en' ? 'All rights reserved.' : t === 'es' ? 'Todos los derechos reservados.' : 'Tous droits réservés.'}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">{t === 'en' ? 'Privacy Policy' : t === 'es' ? 'Política de Privacidad' : 'Politique de Confidentialité'}</Link>
            <Link href="/terms" className="hover:text-white transition">{t === 'en' ? 'Terms of Service' : t === 'es' ? 'Términos de Servicio' : 'Conditions d\'Utilisation'}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
