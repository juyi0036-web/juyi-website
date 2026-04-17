// JUYI CHR SEO优化组件
// 文件: components/SEO.js

import Head from 'next/head';

export default function SEO({
  title = 'JUYI CHR | Supply Chain Partner - Direct Usine. Zéro Marge',
  description = 'Votre partenaire supply chain en Chine pour équipements CHR et boulangerie premium. Prix direct usine, zéro marge, service professionnel 24/7.',
  keywords = 'équipement CHR Chine, fournisseur boulangerie Chine, sourcing direct usine, équipement hôtel Chine, équipement restaurant Chine, JUYI CHR',
  canonical = 'https://www.juyi-chr.com',
  ogImage = 'https://www.juyi-chr.com/og-image.jpg'
}) {
  return (
    <Head>
      {/* 基础Meta标签 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="JUYI CHR Supply Chain Management" />
      
      {/* Open Graph标签 */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="JUYI CHR" />
      
      {/* Twitter卡片 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical标签 */}
      <link rel="canonical" href={canonical} />
      
      {/* 结构化数据 - JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "JUYI CHR Supply Chain Management",
          "url": "https://www.juyi-chr.com",
          "logo": "https://www.juyi-chr.com/logo.png",
          "description": "Votre partenaire supply chain en Chine pour équipements CHR et boulangerie premium",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Shanghai",
            "addressCountry": "CN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+852-6972-4241",
            "contactType": "customer service",
            "availableLanguage": ["French", "English", "Spanish"]
          }
        })
      }} />
    </Head>
  );
}