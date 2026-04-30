import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';
import blogPosts from '../../data/blogPosts';

import CTABanner from '../../components/CTABanner';

export default function Blog() {
  const { locale } = useRouter();
  const t = locale === 'en' ? 'en' : locale === 'es' ? 'es' : 'fr';

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
        {/* Featured Article */}
        {blogPosts.length > 0 && (
          <div className="mb-16">
            <Link href={`/blog/${blogPosts[0].slug}`} className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-auto overflow-hidden">
                    <img 
                      src={blogPosts[0].image.main} 
                      alt={blogPosts[0].image.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`bg-${blogPosts[0].category.color}-100 text-${blogPosts[0].category.color}-600 text-xs font-bold px-3 py-1 rounded-full`}>
                        {blogPosts[0].category.label}
                      </span>
                      <span className="text-gray-400 text-sm">{blogPosts[0].date}</span>
                      <span className="text-gray-400 text-sm">• {blogPosts[0].readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4 group-hover:text-brand-orange transition-colors">
                      {blogPosts[0].title[t] || blogPosts[0].title.fr}
                    </h2>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {blogPosts[0].subtitle[t] || blogPosts[0].subtitle.fr}
                    </p>
                    <div className="flex items-center gap-3">
                      <img 
                        src={blogPosts[0].author.avatar} 
                        alt={blogPosts[0].author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-brand-dark text-sm">{blogPosts[0].author.name}</div>
                        <div className="text-gray-500 text-xs">{blogPosts[0].author.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => {
            const title = post.title[t] || post.title.fr;
            const subtitle = post.subtitle[t] || post.subtitle.fr;
            
            return (
              <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={post.image.main} 
                    alt={post.image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`bg-${post.category.color}-600 text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {post.category.label}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <span className="text-gray-400 text-sm">• {post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-brand-dark mb-3 line-clamp-2">
                    <Link href={`/blog/${post.slug}`} className="hover:text-brand-orange transition-colors">
                      {title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {subtitle}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium text-brand-dark text-xs">{post.author.name}</div>
                      <div className="text-gray-500 text-xs">{post.author.role}</div>
                    </div>
                  </div>
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

      {/* CTA Banner */}
      <CTABanner />

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
