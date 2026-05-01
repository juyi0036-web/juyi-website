import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';
import blogPosts from '../../data/blogPosts';

import CTABanner from '../../components/CTABanner';


export async function getStaticPaths({ locales }) {
  const paths = [];
  
  blogPosts.forEach(post => {
    locales.forEach(locale => {
      paths.push({
        params: { slug: post.slug },
        locale
      });
    });
  });

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params, locale }) {
  const slug = params.slug;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      notFound: true
    };
  }

  const t = locale === 'en' ? 'en' : locale === 'es' ? 'es' : 'fr';

  return {
    props: {
      post,
      t
    }
  };
}


export default function BlogPost({ post, t }) {
  

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
  const subtitle = post.subtitle[t] || post.subtitle.fr;
  const content = post.content[t] || post.content.fr;

  return (
    <div className="min-h-screen bg-white font-sans text-brand-blue">
      <Head>
        <title>{title} | JUYI CHR Blog</title>
        <meta name="description" content={subtitle} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={subtitle} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post.image.main} />
      </Head>

      <Navbar />

      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img 
          src={post.image.main} 
          alt={post.image.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className={`bg-${post.category.color}-600 text-white text-xs font-bold px-3 py-1 rounded-full`}>
                {post.category.label}
              </span>
              {/* <span className="text-white/80 text-sm">{post.date}</span>
              <span className="text-white/80 text-sm">• {post.readTime}</span> */}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-white/80 text-lg max-w-3xl">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Author Info */}
        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200">
          <img 
            src={post.author.avatar} 
            alt={post.author.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <div className="font-bold text-brand-dark">{post.author.name}</div>
            <div className="text-sm text-gray-500">{post.author.role}</div>
          </div>
          <div className="ml-auto text-sm text-gray-400">
            {/* {post.readTime} {t === 'en' ? 'read' : t === 'es' ? 'de lectura' : 'de lecture'} */}
          </div>
        </div>

        {/* Article Content */}
        <article 
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Share & CTA */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-brand-blue rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t === 'en' ? 'Need Compliant Equipment?' : t === 'es' ? '¿Necesita Equipos Conformes?' : 'Besoin d\'Équipements Conformes ?'}
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              {t === 'en' ? 'Our expert team can help you choose equipment adapted to your needs and budget.' : t === 'es' ? 'Nuestro equipo de expertos puede ayudarle a elegir los equipos adaptados a sus necesidades y presupuesto.' : 'Notre équipe d\'experts peut vous aider à choisir les équipements adaptés à vos besoins et à votre budget.'}
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-brand-orange text-white px-8 py-4 rounded font-bold hover:bg-orange-700 transition shadow-xl uppercase tracking-wider"
            >
              {t === 'en' ? 'Request a Free Quote' : t === 'es' ? 'Solicitar Presupuesto Gratis' : 'Demander un Devis Gratuit'}
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-brand-dark mb-8">
            {t === 'en' ? 'Related Articles' : t === 'es' ? 'Artículos Relacionados' : 'Articles Connexes'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => {
                const relatedTitle = relatedPost.title[t] || relatedPost.title.fr;
                const relatedSubtitle = relatedPost.subtitle[t] || relatedPost.subtitle.fr;
                return (
                  <Link 
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={relatedPost.image.main} 
                          alt={relatedPost.image.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`bg-${relatedPost.category.color}-100 text-${relatedPost.category.color}-600 text-xs font-bold px-3 py-1 rounded-full`}>
                            {relatedPost.category.label}
                          </span>
                          {/* <span className="text-gray-400 text-sm">{relatedPost.readTime}</span> */}
                        </div>
                        <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-orange transition-colors">
                          {relatedTitle}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {relatedSubtitle}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
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
