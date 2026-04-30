import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function TermsPage() {
  const router = useRouter();
  const { lang = 'fr' } = router.query;

  const content = {
    fr: {
      title: "Conditions d'Utilisation",
      lastUpdate: "Dernière mise à jour : avril 2026",
      sections: [
        { title: "1. Acceptation", body: "En accédant au site de JUYI CHR, vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site." },
        { title: "2. Utilisation du site", body: "Ce site est destiné aux professionnels cherchant des équipements CHR. Vous vous engagez à utiliser le site de façon licite et à ne pas porter atteinte à son fonctionnement." },
        { title: "3. Propriété intellectuelle", body: "Tous les contenus présents sur ce site (textes, images, logos, vidéos) sont la propriété de JUYI CHR ou de ses partenaires et sont protégés par le droit d'auteur. Toute reproduction est interdite sans autorisation." },
        { title: "4. Produits et services", body: "Les informations sur les produits sont données à titre indicatif et peuvent être modifiées sans préavis. Les images sont non contractuelles. Nous nous efforçons d'assurer l'exactitude des descriptions, mais des erreurs peuvent survenir." },
        { title: "5. Commandes et paiements", body: "Toute commande est soumise à acceptation. Les prix sont indiqués en EUR ou USD selon le devis. Le paiement s'effectue selon les modalités précisées dans le devis accepté." },
        { title: "6. Livraison", body: "Les délais de livraison sont donnés à titre indicatif. JUYI CHR ne saurait être tenu responsable des retards liés au transport ou à des causes de force majeure." },
        { title: "7. Responsabilité", body: "JUYI CHR ne peut être tenu responsable des dommages indirects résultant de l'utilisation des produits ou des informations fournies sur ce site. La responsabilité de JUYI CHR est limitée au montant de la commande concernée." },
        { title: "8. Droit applicable", body: "Les présentes conditions sont régies par le droit français. Tout litige relatif à leur interprétation ou exécution sera de la compétence des tribunaux de Paris, sauf disposition légale impérative contraire." },
        { title: "9. Modifications", body: "Nous nous réservons le droit de modifier ces conditions à tout moment. Les conditions en vigueur sont celles disponibles sur cette page." },
        { title: "10. Contact", body: "Pour toute question concernant ces conditions, contactez-nous à contact@juyi-chr.com." }
      ]
    },
    en: {
      title: "Terms of Use",
      lastUpdate: "Last updated: April 2026",
      sections: [
        { title: "1. Acceptance", body: "By accessing JUYI CHR's website, you agree to be bound by these Terms of Use. If you do not agree, please do not use this site." },
        { title: "2. Site Use", body: "This site is intended for professionals seeking CHR equipment. You agree to use the site lawfully and not to interfere with its operation." },
        { title: "4. Products and Services", body: "Product information is indicative and subject to change without notice. Images are non-contractual. We strive for accuracy but errors may occur." },
        { title: "5. Orders and Payments", body: "All orders are subject to acceptance. Prices are indicated in EUR or USD as per the quote. Payment terms are as specified in the accepted quote." },
        { title: "6. Delivery", body: "Delivery times are indicative. JUYI CHR is not liable for delays caused by transportation or force majeure." },
        { title: "7. Liability", body: "JUYI CHR shall not be liable for indirect damages arising from the use of products or information on this site. Liability is limited to the amount of the relevant order." },
        { title: "8. Governing Law", body: "These Terms are governed by French law. Any dispute regarding their interpretation or performance shall fall under the jurisdiction of the courts of Paris, unless mandatory legal provisions conflict." },
        { title: "9. Modifications", body: "We reserve the right to modify these Terms at any time. The current version is available on this page." },
        { title: "10. Contact", body: "For questions about these Terms, contact us at contact@juyi-chr.com." }
      ]
    },
    es: {
      title: "Condiciones de Uso",
      lastUpdate: "Última actualización: abril 2026",
      sections: [
        { title: "1. Aceptación", body: "Al acceder al sitio web de JUYI CHR, acepta quedar vinculado por estos Términos de Uso. Si no está de acuerdo, por favor no utilice este sitio." },
        { title: "2. Uso del sitio", body: "Este sitio está destinado a profesionales que buscan equipos CHR. Se compromete a utilizar el site de forma lícita y no afectar su funcionamiento." },
        { title: "3. Propiedad intelectual", body: "Todos los contenidos (textos, imágenes, logotipos, vídeos) son propiedad de JUYI CHR o de sus socios y están protegidos por derechos de autor. Queda prohibida su reproducción sin autorización." },
        { title: "4. Productos y servicios", body: "La información sobre productos es indicativa y puede modificarse sin previo aviso. Las imágenes no son contractuales. Nos esforzamos por garantizar la precisión, pero pueden producirse errores." },
        { title: "5. Pedidos y pagos", body: "Todo pedido está sujeto a aceptación. Los precios se indican en EUR o USD según el presupuesto. El pago se realiza según las modalidades del presupuesto aceptado." },
        { title: "6. Entrega", body: "Los plazos de entrega son indicativos. JUYI CHR no se hace responsable de retrasos debidos al transporte o fuerza mayor." },
        { title: "7. Responsabilidad", body: "JUYI CHR no es responsable de daños indirectos derivados del uso de los productos o información del sitio. La responsabilidad se limita al importe del pedido correspondiente." },
        { title: "8. Ley aplicable", body: "Estas Condiciones se rigen por la ley francesa. Cualquier disputa será competencia de los tribunales de París, salvo normas imperativas en contrario." },
        { title: "9. Modificaciones", body: "Nos reservamos el derecho de modificar estos Términos en cualquier momento. La versión vigente está disponible en esta página." },
        { title: "10. Contacto", body: "Para consultas sobre estas Condiciones, contáctenos en contact@juyi-chr.com." }
      ]
    }
  };

  const t = content[lang] || content.fr;

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>{t.title} - JUYI CHR</title>
        <meta name="description" content={`JUYI CHR - ${t.title}`} />
      </Head>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.title}</h1>
        <p className="text-gray-500 mb-8">{t.lastUpdate}</p>
        {t.sections.map((sec, idx) => (
          <section key={idx} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">{sec.title}</h2>
            <p className="text-gray-600 leading-relaxed">{sec.body}</p>
          </section>
        ))}
        <p className="text-sm text-gray-400 mt-12 text-center">
          Pour toute question, contactez-nous à{' '}
          <a href="mailto:contact@juyi-chr.com" className="text-blue-600 hover:underline">contact@juyi-chr.com</a>
        </p>
      </main>
      <Footer />
    </div>
  );
}
