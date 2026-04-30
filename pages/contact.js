import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import InquiryForm from '../components/InquiryForm';
import { useRouter } from 'next/router';
import { translations } from '../data/translations';

export default function Contact() {
  const { locale } = useRouter();
  const t = translations[locale] || translations.fr;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-brand-blue flex flex-col">
      <Head>
        <title>{t.contact_meta_title || 'Contact | JUYI CHR'} | JUYI CHR</title>
        <meta name="description" content={t.contact_meta_desc || "Contactez notre équipe d'experts supply chain pour vos équipements CHR."} />
      </Head>

      <Navbar />

      {/* Hero Header */}
      <div className="bg-brand-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">
            {t.contact_hero_badge || 'SUPPORT SUPPLY CHAIN 24/7'}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl uppercase mb-6">
            {t.contact_hero_title || 'LANCEZ VOTRE SOURCING'}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            {t.contact_hero_desc || "Connectez-vous directement avec notre équipe export. Pas d'intermédiaire, juste une communication efficace."}
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-brand-blue mb-8 uppercase tracking-wide border-l-4 border-brand-orange pl-4">
              {t.contact_direct_title || 'CANAUX DIRECTS'}
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-10">
              {/* WhatsApp */}
              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue text-white group-hover:bg-brand-orange transition duration-300">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.001 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.16 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893 0-3.18-1.238-6.167-3.486-8.416"/></svg>
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-brand-blue">{t.contact_whatsapp_title || 'Support WhatsApp'}</h3>
                  <a href="https://wa.me/85269724241" target="_blank" rel="noopener noreferrer" className="mt-1 block text-lg font-medium text-gray-600 group-hover:text-brand-orange transition no-underline">
                    +852 6972 4241
                  </a>
                  <p className="text-sm text-gray-400 mt-1">{t.contact_whatsapp_desc || 'Réponse instantanée (9:00 - 18:00 UTC+8)'}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue text-white group-hover:bg-brand-orange transition duration-300">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-brand-blue">{t.contact_email_title || 'Département Export'}</h3>
                  <a href="mailto:contact@juyi-chr.com" className="mt-1 block text-lg font-medium text-gray-600 group-hover:text-brand-orange transition no-underline">
                    contact@juyi-chr.com
                  </a>
                  <p className="text-sm text-gray-400 mt-1">{t.contact_email_desc || 'Pour devis officiels & catalogues'}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-brand-blue">{t.contact_hq_title || 'Siège Social'}</h3>
                  <p className="mt-1 text-base text-gray-600">{t.contact_hq_loc || 'Shanghai, Chine'}</p>
                  <p className="text-sm text-gray-400 mt-1">{t.contact_hq_desc || 'Centre de Gestion Supply Chain'}</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-brand-blue mb-4">{t.quick_links || 'Liens Rapides'}</h3>
              <div className="space-y-2">
                <Link href="/blog/eu-2026-refrigerant-ban" className="block text-gray-600 hover:text-brand-orange transition">
                  📄 {t.link_refrigerant || 'Réglementation UE 2026 - Réfrigérants'}
                </Link>
                <Link href="/blog/eu-2026-energy-standards" className="block text-gray-600 hover:text-brand-orange transition">
                  📄 {t.link_energy || 'Normes Énergétiques UE 2026'}
                </Link>
                <Link href="/about" className="block text-gray-600 hover:text-brand-orange transition">
                  👥 {t.link_team || 'Notre Équipe'}
                </Link>
                <Link href="/products" className="block text-gray-600 hover:text-brand-orange transition">
                  📦 {t.link_catalog || 'Catalogue Produits'}
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Smart Assistant */}
          <div>
            <h2 className="text-2xl font-bold text-brand-blue mb-8 uppercase tracking-wide border-l-4 border-brand-orange pl-4">
              {t.form_title || 'DEMANDE DE DEVIS'}
            </h2>
            <InquiryForm compact={false} />
          </div>
        </div>
      </main>

      <footer className="bg-brand-dark text-slate-400 py-12 border-t border-white/5 text-center text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="uppercase tracking-widest font-bold text-white">JUYI CHR</div>
          <p>© 2026 Juyi CHR Supply Chain Management. {t.footer_rights || 'Tous droits réservés.'}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">{t.footer_privacy || 'Politique de Confidentialité'}</Link>
            <Link href="/terms" className="hover:text-white transition">{t.footer_terms || 'Conditions d\'Utilisation'}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
