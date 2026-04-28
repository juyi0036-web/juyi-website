import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import InquiryForm from '../components/InquiryForm';
import { useRouter } from 'next/router';
import { translations } from '../data/translations';

export default function About() {
  const { locale } = useRouter();
  const t = translations[locale] || translations.fr;

  const teamMembers = [
    {
      name: "Philippe Dubois",
      role: t.team_philippe_role || "Fondateur & Directeur Général",
      experience: "38 ans d'expérience",
      description: t.team_philippe_desc || "Expert reconnu dans l'industrie CHR européenne. A occupé des postes de direction dans les plus grands groupes de restauration avant de fonder JUYI.",
      image: "/team/philippe-dubois.jpg",
      fallback: "P"
    },
    {
      name: "sheng yu",
      role: t.team_sheng_role || "Directeur Supply Chain Chine",
      experience: "12 ans d'expertise",
      description: t.team_sheng_desc || "Spécialiste de l'intégration de la chaîne d'approvisionnement CHR en Chine. 12 ans d'expertise en sourcing.",
      image: "/team/sheng yu.jpg",
      fallback: "S"
    },
    {
      name: "Marc Laurent",
      role: t.team_marc_role || "Directeur Logistique Europe",
      experience: "25 ans d'expérience",
      description: t.team_marc_desc || "Expert en logistique et entreposage en Europe. Gère notre réseau de distribution et nos entrepôts stratégiques.",
      image: "/team/marc.jpg",
      fallback: "M"
    },
    {
      name: "Sophie Martin",
      role: t.team_sophie_role || "Directrice Commerciale",
      experience: "20 ans d'expérience",
      description: t.team_sophie_desc || "Leader expérimentée en distribution et développement commercial. Dirige notre équipe de vente européenne.",
      image: "/team/sophie.jpg",
      fallback: "S"
    },
    {
      name: "Li Ming",
      role: t.team_liming_role || "Directeur Régional Chine",
      experience: "15 ans d'expérience",
      description: t.team_liming_desc || "Supervise nos opérations en Chine, gère les relations avec nos 50+ usines partenaires et assure la qualité de production.",
      image: "/team/liming.jpg",
      fallback: "L"
    },
    {
      name: "Jean-Pierre Moreau",
      role: t.team_jp_role || "Directeur Régional Europe",
      experience: "22 ans d'expérience",
      description: t.team_jp_desc || "Basé à Paris, il supervise nos opérations européennes et nos relations clients à travers 15 pays.",
      image: "/team/jp.jpg",
      fallback: "J"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-brand-blue">
      <Head>
        <title>{t.about_meta_title || 'À Propos | JUYI CHR - Supply Chain Partner'}</title>
        <meta name="description" content={t.about_meta_desc || "Découvrez l'équipe JUYI CHR - 38 ans d'expertise dans l'industrie CHR, supply chain intégrée en Chine, logistique européenne."} />
        <meta property="og:title" content="À Propos | JUYI CHR" />
        <meta property="og:description" content="Notre équipe d'experts combine 100+ ans d'expérience dans l'industrie CHR." />
      </Head>

      <Navbar />

      {/* Hero Header */}
      <div className="bg-brand-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">
            {t.about_hero_badge || "QUI SOMMES-NOUS"}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl uppercase mb-6">
            {t.about_h1 || "JUYI CHR"}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            {t.about_tagline || "100+ ans d'expertise combinée dans l'industrie CHR"}
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Story */}
        <div className="mb-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark mb-6 uppercase tracking-wide border-l-4 border-brand-orange pl-4">
                {t.about_story_title || "Notre Histoire"}
              </h2>
              <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
                <p>{t.about_story_p1 || "Fondée en 2018 à Shanghai, JUYI CHR est née d'une vision simple : éliminer les intermédiaires coûteux dans l'achat d'équipements CHR en Chine."}</p>
                <p>{t.about_story_p2 || "Notre fondateur, Philippe Dubois, apporte 38 ans d'expérience dans l'industrie CHR européenne. Il a dirigé des opérations pour les plus grands groupes de restauration avant de créer JUYI."}</p>
                <p>{t.about_story_p3 || "Aujourd'hui, notre équipe de 6 experts combine plus de 100 ans d'expérience, servant plus de 200 clients à travers l'Europe."}</p>
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
              {t.about_values_title || "Nos Valeurs"}
            </h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {t.about_value_transparency || "Transparence"}
              </h3>
              <p className="text-gray-600">
                {t.about_value_transparency_desc || "Pas de marges cachées. Vous voyez exactement ce que vous payez."}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {t.about_value_quality || "Qualité"}
              </h3>
              <p className="text-gray-600">
                {t.about_value_quality_desc || "Chaque équipement est rigoureusement testé et certifié CE."}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">
                {t.about_value_service || "Service"}
              </h3>
              <p className="text-gray-600">
                {t.about_value_service_desc || "Support dédié 24/7 pour accompagner votre projet de A à Z."}
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              {t.about_team_title || "Notre Équipe d'Experts"}
            </h2>
            <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              {t.about_team_desc || "100+ ans d'expérience combinée dans l'industrie CHR, la supply chain et la logistique."}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-brand-blue to-brand-dark flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement.querySelector('.fallback-avatar').style.display = 'flex';
                    }}
                  />
                  <div className="fallback-avatar hidden w-24 h-24 bg-white rounded-full items-center justify-center text-3xl font-bold text-brand-blue z-10">
                    {member.fallback}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-brand-dark text-lg">{member.name}</h3>
                  <p className="text-sm text-brand-orange font-semibold mb-1">{member.role}</p>
                  <p className="text-xs text-gray-400 mb-3">{member.experience}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-brand-orange rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {t.about_cta_title || "Prêt à Commencer ?"}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t.about_cta_desc || "Contactez-nous dès aujourd'hui pour discuter de votre projet d'équipement."}
          </p>
          <a href="#inquiry" className="inline-block bg-white text-brand-orange px-8 py-4 rounded font-bold hover:bg-brand-blue hover:text-white transition shadow-xl uppercase tracking-wider">
            {t.about_cta_btn || "Demander un Devis"}
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
          <p>© 2026 Juyi CHR Supply Chain Management. {t.footer_rights || "Tous droits réservés."}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">{t.footer_privacy || "Politique de Confidentialité"}</Link>
            <Link href="/terms" className="hover:text-white transition">{t.footer_terms || "Conditions d'Utilisation"}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
