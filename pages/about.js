1|     1|import Head from 'next/head';
     2|     2|import Link from 'next/link';
     3|     3|import Navbar from '../components/Navbar';
     4|     4|
     5|     5|import { useRouter } from 'next/router';
     6|     6|import { translations } from '../data/translations';
     7|     7|
     8|     8|import CTABanner from '../components/CTABanner';
     9|     9|
    10|    10|export default function About() {
    11|    11|  const { locale } = useRouter();
    12|    12|  const t = translations[locale] || translations.fr;
    13|    13|
    14|    14|  const teamMembers = [
    15|    15|    {
    16|    16|      name: "Philippe Dubois",
    17|    17|      role: t.team_philippe_role || "Fondateur & Directeur Général",
    18|    18|      experience: "38 ans d'expérience",
    19|    19|      description: t.team_philippe_desc || "Expert reconnu dans l'industrie CHR européenne. A occupé des postes de direction dans les plus grands groupes de restauration avant de fonder JUYI.",
    20|    20|      image: "/team/philippe-dubois.jpg",
    21|    21|      fallback: "P"
    22|    22|    },
    23|    23|    {
    24|    24|      name: "sheng yu",
    25|    25|      role: t.team_sheng_role || "Directeur Supply Chain Chine",
    26|    26|      experience: "20 ans d'expérience",
    27|    27|      description: t.team_sheng_desc || "Spécialiste de l'intégration de la chaîne d'approvisionnement CHR en Chine. 20 ans d'expertise en sourcing.",
    28|    28|      image: "/team/sheng-yu.jpg",
    29|    29|      fallback: "S"
    30|    30|    },
    31|    31|    {
    32|    32|      name: "Nathalie Garnier",
    33|    33|      role: t.team_nathalie_role || "Directrice Commerciale",
    34|    34|      experience: "28 ans d'expérience",
    35|    35|      description: t.team_nathalie_desc || "Leader expérimentée en distribution et développement commercial. Dirige notre équipe de vente européenne.",
    36|    36|      image: "/team/Nathalie-Garnier.jpg",
    37|    37|      fallback: "N"
    38|    38|    }
    39|    39|  ];
    40|    40|
    41|    41|  return (
    42|    42|    <div className="min-h-screen bg-slate-50 font-sans text-brand-blue">
    43|    43|      <Head>
    44|    44|        <title>{t.about_meta_title || 'À Propos | JUYI CHR - Supply Chain Partner'}</title>
    45|    45|        <meta name="description" content={t.about_meta_desc || "Découvrez l'équipe JUYI CHR - 38 ans d'expertise dans l'industrie CHR, supply chain intégrée en Chine, logistique européenne."} />
    46|    46|        <meta property="og:title" content="À Propos | JUYI CHR" />
    47|    47|        <meta property="og:description" content="Notre équipe d'experts combine 100+ ans d'expérience dans l'industrie CHR." />
    48|    48|      </Head>
    49|    49|
    50|    50|      <Navbar />
    51|    51|
    52|    52|      {/* Hero Header */}
    53|    53|      <div className="bg-brand-blue text-white py-20 relative overflow-hidden">
    54|    54|        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
    55|    55|        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    56|    56|          <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">
    57|    57|            {t.about_hero_badge || "QUI SOMMES-NOUS"}
    58|    58|          </span>
    59|    59|          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl uppercase mb-6">
    60|    60|            {t.about_h1 || "JUYI CHR"}
    61|    61|          </h1>
    62|    62|          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
    63|    63|            {t.about_tagline || "100+ ans d'expertise combinée dans l'industrie CHR"}
    64|    64|          </p>
    65|    65|        </div>
    66|    66|      </div>
    67|    67|
    68|    68|      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    69|    69|        {/* Our Story */}
    70|    70|        <div className="mb-20">
    71|    71|          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
    72|    72|            <div>
    73|    73|              <h2 className="text-3xl font-bold text-brand-dark mb-6 uppercase tracking-wide border-l-4 border-brand-orange pl-4">
    74|    74|                {t.about_story_title || "Notre Histoire"}
    75|    75|              </h2>
    76|    76|              <div className="text-lg text-gray-700 space-y-6 leading-relaxed">
    77|    77|                <p>{t.about_story_p1 || "Fondée en 2018 à Shanghai, JUYI CHR est née d'une vision simple : éliminer les intermédiaires coûteux dans l'achat d'équipements CHR en Chine."}</p>
    78|    78|                <p>{t.about_story_p2 || "Notre fondateur, Philippe Dubois, apporte 38 ans d'expérience dans l'industrie CHR européenne. Il a dirigé des opérations pour les plus grands groupes de restauration avant de créer JUYI."}</p>
    79|    79|                <p>{t.about_story_p3 || "Aujourd'hui, notre équipe de 6 experts combine plus de 100 ans d'expérience, servant plus de 200 clients à travers l'Europe."}</p>
    80|    80|              </div>
    81|    81|            </div>
    82|    82|            
    83|    83|            <div className="mt-10 lg:mt-0 relative h-80 sm:h-96 md:h-[420px] lg:h-[520px] bg-white border-4 border-gray-200 rounded-xl shadow-xl overflow-hidden">
    84|    84|               <img 
    85|    85|                 src="/products/equip-01.jpg"
    86|    86|                 alt="Production & Équipements"
    87|    87|                 className="absolute inset-0 w-full h-full object-cover object-top"
    88|    88|                 onError={(e) => { e.currentTarget.src = '/hero-stainless-20251204.jpg'; }}
    89|    89|               />
    90|    90|            </div>
    91|    91|          </div>
    92|    92|        </div>
    93|    93|
    94|    94|        {/* Our Values */}
    95|    95|        <div className="mb-20">
    96|    96|          <div className="text-center mb-12">
    97|    97|            <h2 className="text-3xl font-bold text-brand-dark mb-4">
    98|    98|              {t.about_values_title || "Nos Valeurs"}
    99|    99|            </h2>
   100|   100|            <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
   101|   101|          </div>
   102|   102|          
   103|   103|          <div className="grid md:grid-cols-3 gap-8">
   104|   104|            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
   105|   105|              <div className="text-4xl mb-4">🔍</div>
   106|   106|              <h3 className="text-xl font-bold text-brand-dark mb-3">
   107|   107|                {t.about_value_transparency || "Transparence"}
   108|   108|              </h3>
   109|   109|              <p className="text-gray-600">
   110|   110|                {t.about_value_transparency_desc || "Pas de marges cachées. Vous voyez exactement ce que vous payez."}
   111|   111|              </p>
   112|   112|            </div>
   113|   113|            
   114|   114|            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
   115|   115|              <div className="text-4xl mb-4">✅</div>
   116|   116|              <h3 className="text-xl font-bold text-brand-dark mb-3">
   117|   117|                {t.about_value_quality || "Qualité"}
   118|   118|              </h3>
   119|   119|              <p className="text-gray-600">
   120|   120|                {t.about_value_quality_desc || "Chaque équipement est rigoureusement testé et certifié CE."}
   121|   121|              </p>
   122|   122|            </div>
   123|   123|            
   124|   124|            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
   125|   125|              <div className="text-4xl mb-4">🤝</div>
   126|   126|              <h3 className="text-xl font-bold text-brand-dark mb-3">
   127|   127|                {t.about_value_service || "Service"}
   128|   128|              </h3>
   129|   129|              <p className="text-gray-600">
   130|   130|                {t.about_value_service_desc || "Support dédié 24/7 pour accompagner votre projet de A à Z."}
   131|   131|              </p>
   132|   132|            </div>
   133|   133|          </div>
   134|   134|        </div>
   135|   135|
   136|   136|        {/* Team Section */}
   137|   137|        <div className="mb-20">
   138|   138|          <div className="text-center mb-12">
   139|   139|            <h2 className="text-3xl font-bold text-brand-dark mb-4">
   140|   140|              {t.about_team_title || "Notre Équipe d'Experts"}
   141|   141|            </h2>
   142|   142|            <div className="w-20 h-1 bg-brand-orange mx-auto"></div>
   143|   143|            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
   144|   144|              {t.about_team_desc || "100+ ans d'expérience combinée dans l'industrie CHR, la supply chain et la logistique."}
   145|   145|            </p>
   146|   146|          </div>
   147|   147|          
   148|   148|          <div className="grid md:grid-cols-3 gap-8">
   149|   149|            {teamMembers.map((member, idx) => (
   150|   150|              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
   151|   151|                <div className="relative bg-gradient-to-br from-brand-blue to-brand-dark flex items-center justify-center h-80">
   152|   152|                  <img
   153|   153|                    src={member.image}
   154|   154|                    alt={member.name}
   155|   155|                    className="w-full h-full object-cover bg-gray-50"
   156|   156|                    onError={(e) => {
   157|   157|                      e.currentTarget.style.display = 'none';
   158|   158|                      const fallback = e.currentTarget.parentElement.querySelector('.fallback-avatar');
   159|   159|                      if (fallback) fallback.style.display = 'flex';
   160|   160|                    }}
   161|   161|                  />
   162|   162|                  <div className="fallback-avatar hidden w-24 h-24 bg-white rounded-full items-center justify-center text-3xl font-bold text-brand-blue z-10">
   163|   163|                    {member.fallback}
   164|   164|                  </div>
   165|   165|                </div>
   166|   166|                <div className="p-6">
   167|   167|                  <h3 className="font-bold text-brand-dark text-lg">{member.name}</h3>
   168|   168|                  <p className="text-sm text-brand-orange font-semibold mb-1">{member.role}</p>
   169|   169|                  <p className="text-xs text-gray-400 mb-3">{member.experience}</p>
   170|   170|                  <p className="text-sm text-gray-600">{member.description}</p>
   171|   171|                </div>
   172|   172|              </div>
   173|   173|            ))}
   174|   174|          </div>
   175|   175|        </div>
   176|   176|
   177|        {/* CTA Section */}
   178|        <div className="bg-brand-orange rounded-2xl p-12 text-center text-white mt-20">
   179|   179|          <h2 className="text-3xl font-bold mb-4">
   180|   180|            {t.about_cta_title || "Prêt à Commencer ?"}
   181|   181|          </h2>
   182|   182|          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
   183|   183|            {t.about_cta_desc || "Contactez-nous dès aujourd'hui pour discuter de votre projet d'équipement."}
   184|   184|          </p>
   185|   185|            <a href="/contact#contact" className="inline-block bg-white text-brand-orange px-8 py-4 rounded font-bold hover:bg-brand-blue hover:text-white transition shadow-xl uppercase tracking-wider">
   186|   186|            {t.about_cta_btn || "Demander un Devis"}
   187|   187|          </a>
   188|   188|        </div>
   189|   189|