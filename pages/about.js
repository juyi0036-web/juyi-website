import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import InquiryForm from '../components/InquiryForm';
import { useRouter } from 'next/router';
import { translations } from '../data/translations';

export default function About() {
  const { locale } = useRouter();
  const t = translations[locale] || translations.fr;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-brand-blue">
      <Head>
        <title>{t.about_meta_title || 'About Us | JUYI CHR'}</title>
        <meta name="description" content={t.about_meta_desc || 'Learn about JUYI CHR - your transparent supply chain partner for CHR & Baking equipment in China.'} />
      </Head>

      <Navbar />

      {/* Hero Header */}
      <div className="bg-brand-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">
            {t.about_hero_badge || 'QUI SOMMES-NOUS'}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl uppercase mb-6">
            {t.about_h1 || 'JUYI CHR'}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            {t.about_tagline || 'Votre partenaire transparent en Chine pour les équipements CHR & Boulangerie premium.'}
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="mb-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6 uppercase tracking-wide border-l-4 border-brand-orange pl-4">
                {t.about_story_title || 'Notre Histoire'}
              </h2>
              <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
                <p>{t.about_story_p1 || 'Fondée en 2018 à Shanghai, JUYI CHR est née d\'une vision simple : éliminer les intermédiaires coûteux dans l\'achat d\'équipements CHR en Chine.'}</p>
                <p>{t.about_story_p2 || 'Notre équipe d\'experts combine une connaissance approfondie de l\'industrie européenne avec un accès direct aux meilleures usines chinoises.'}</p>
                <p>{t.about_story_p3 || 'Aujourd\'hui, nous servons plus de 200 clients à travers l\'Europe, leur offrant une transparence totale et des économies significatives.'}</p>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0 relative h-80 sm:h-96 md:h-[420px] lg:h-[520px] bg-white border-4 border-gray-200 rounded-xl shadow-xl overflow-hidden">
               <img 
                 src="/products/equip-01.jpg"
                 alt="Production & Équipements"
                 className="absolute inset-0 w-full h-full object-cover"
                 onError={(e) => { e.currentTarget.src = '/hero-stainless-20251204.jpg'; }}
               />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              {t.about_values_title || 'Nos Valeurs'}
            </h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {t.about_value_transparency || 'Transparence'}
              </h3>
              <p className="text-gray-600">
                {t.about_value_transparency_desc || 'Pas de marges cachées. Vous voyez exactement ce que vous payez.'}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {t.about_value_quality || 'Qualité'}
              </h3>
              <p className="text-gray-600">
                {t.about_value_quality_desc || 'Chaque équipement est rigoureusement testé et certifié CE.'}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {t.about_value_service || 'Service'}
              </h3>
              <p className="text-gray-600">
                {t.about_value_service_desc || 'Support dédié 24/7 pour accompagner votre projet de A à Z.'}
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              {t.about_team_title || 'Notre Équipe'}
            </h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              {t.about_team_desc || 'Une équipe multiculturelle d\'experts dédiés à votre succès.'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-center">
              <div className="h-48 bg-gradient-to-br from-brand-blue to-brand-dark flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-brand-blue">S</div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-brand-dark">Sophie Chen</h3>
                <p className="text-sm text-brand-orange mb-2">{t.about_team_sophie_role || 'Directrice Export'}</p>
                <p className="text-sm text-gray-500">{t.about_team_sophie_desc || '15 ans d\'expérience dans l\'export CHR'}</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-center">
              <div className="h-48 bg-gradient-to-br from-brand-blue to-brand-dark flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-brand-blue">M</div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-brand-dark">Marc Wang</h3>
                <p className="text-sm text-brand-orange mb-2">{t.about_team_marc_role || 'Responsable QC'}</p>
                <p className="text-sm text-gray-500">{t.about_team_marc_desc || 'Expert en contrôle qualité et conformité CE'}</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-center">
              <div className="h-48 bg-gradient-to-br from-brand-blue to-brand-dark flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-brand-blue">L</div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-brand-dark">Li Wei</h3>
                <p className="text-sm text-brand-orange mb-2">{t.about_team_li_role || 'Directeur Usines'}</p>
                <p className="text-sm text-gray-500">{t.about_team_li_desc || 'Gestion des relations avec nos 50+ usines partenaires'}</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden text-center">
              <div className="h-48 bg-gradient-to-br from-brand-blue to-brand-dark flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-brand-blue">P</div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-brand-dark">Pierre Martin</h3>
                <p className="text-sm text-brand-orange mb-2">{t.about_team_pierre_role || 'Responsable Europe'}</p>
                <p className="text-sm text-gray-500">{t.about_team_pierre_desc || 'Basé à Paris, il gère nos clients européens'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-brand-orange rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {t.about_cta_title || 'Prêt à Commencer ?'}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t.about_cta_desc || 'Contactez-nous dès aujourd\'hui pour discuter de votre projet d\'équipement.'}
          </p>
          <a href="#inquiry" className="inline-block bg-white text-brand-orange px-8 py-4 rounded font-bold hover:bg-brand-blue hover:text-white transition shadow-xl uppercase tracking-wider">
            {t.about_cta_btn || 'Demander un Devis'}
          </a>
        </div>

        {/* Inquiry Form */}
        <div className="mt-20" id="inquiry">
          <InquiryForm />
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
