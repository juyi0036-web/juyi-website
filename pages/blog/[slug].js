import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const { locale } = router;
  const t = locale === 'en' ? 'en' : locale === 'es' ? 'es' : 'fr';

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans text-brand-blue">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">
            {t === 'en' ? 'Article Not Found' : t === 'es' ? 'Artículo No Encontrado' : 'Article Non Trouvé'}
          </h1>
          <Link href="/blog" className="text-brand-orange hover:text-orange-700">
            {t === 'en' ? '← Back to Blog' : t === 'es' ? '← Volver al Blog' : '← Retour au Blog'}
          </Link>
        </div>
      </div>
    );
  }

  const title = post.title[t] || post.title.fr;
  const excerpt = post.excerpt[t] || post.excerpt.fr;
  const content = post.content[t] || post.content.fr;

  // Simple markdown to HTML conversion
  const htmlContent = content
    .replace(/## (.*?)(\n|$)/g, '<h2 class="text-2xl font-bold text-brand-dark mt-8 mb-4">$1</h2>')
    .replace(/### (.*?)(\n|$)/g, '<h3 class="text-xl font-bold text-brand-dark mt-6 mb-3">$1</h3>')
    .replace(/#### (.*?)(\n|$)/g, '<h4 class="text-lg font-bold text-brand-dark mt-4 mb-2">$1</h4>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/\n/g, '<br/>');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-brand-blue">
      <Head>
        <title>{title} | JUYI CHR Blog</title>
        <meta name="description" content={excerpt} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:type" content="article" />
      </Head>

      <Navbar />

      {/* Hero Header */}
      <div className="bg-brand-blue text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/blog" className="inline-flex items-center text-brand-orange mb-6 hover:text-orange-300 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t === 'en' ? 'Back to Blog' : t === 'es' ? 'Volver al Blog' : 'Retour au Blog'}
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-gray-300 text-sm">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-gray-300 text-lg">{excerpt}</p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Image */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
          <img 
            src={post.image} 
            alt={title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Article Content */}
        <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div 
            className="prose prose-lg max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-brand-dark mb-6">
            {t === 'en' ? 'Related Articles' : t === 'es' ? 'Artículos Relacionados' : 'Articles Connexes'}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => {
                const relatedTitle = relatedPost.title[t] || relatedPost.title.fr;
                return (
                  <Link 
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                      <span className="text-gray-400 text-sm">{relatedPost.date}</span>
                    </div>
                    <h3 className="text-lg font-bold text-brand-dark mb-2">{relatedTitle}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {(relatedPost.excerpt[t] || relatedPost.excerpt.fr).substring(0, 100)}...
                    </p>
                  </Link>
                );
              })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-brand-orange rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t === 'en' ? 'Need Compliant Equipment?' : t === 'es' ? '¿Necesita Equipos Conformes?' : 'Besoin d\'Équipements Conformes ?'}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t === 'en' ? 'Contact us for a free quote on EU-compliant CHR equipment.' : t === 'es' ? 'Contáctenos para un presupuesto gratuito de equipos CHR conformes con la UE.' : 'Contactez-nous pour un devis gratuit sur des équipements CHR conformes UE.'}
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-brand-orange px-8 py-4 rounded font-bold hover:bg-brand-blue hover:text-white transition shadow-xl uppercase tracking-wider"
          >
            {t === 'en' ? 'Get a Free Quote' : t === 'es' ? 'Obtener Presupuesto Gratis' : 'Obtenir un Devis Gratuit'}
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
