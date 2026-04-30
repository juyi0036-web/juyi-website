import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function PrivacyPage() {
  const router = useRouter();
  const { lang = 'fr' } = router.query;

  const content = {
    fr: {
      title: "Politique de Confidentialité",
      lastUpdate: "Dernière mise à jour : avril 2026",
      sections: [
        { title: "1. Introduction", body: "Chez JUYI CHR, nous respectons votre vie privée et nous nous engageons à protéger les données personnelles que vous nous confiez. Cette politique explique comment nous collectons, utilisons et protégeons vos informations." },
        { title: "2. Données collectées", body: "Lorsque vous visitez notre site, nous pouvons collecter : votre nom, adresse e-mail, numéro de téléphone, et les informations relatives à votre entreprise. Ces données sont nécessaires pour répondre à vos demandes de devis et vous fournir nos services." },
        { title: "3. Utilisation des données", body: "Nous utilisons vos données pour : traiter vos demandes de renseignements, vous envoyer des devis, améliorer notre service client, et, avec votre consentement, vous envoyer des informations sur nos produits." },
        { title: "4. Partage des données", body: "Nous ne vendons ni ne louons vos données personnelles à des tiers. Nous pouvons les partager avec nos partenaires logistiques ou techniques uniquement dans le cadre de l'exécution de votre commande." },
        { title: "5. Sécurité", body: "Nous mettons en œuvre des mesures de sécurité appropriées (chiffrement, accès restreint) pour protéger vos données contre tout accès non autorisé, altération ou destruction." },
        { title: "6. Vos droits", body: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données. Pour exercer ces droits, contactez-nous à contact@juyi-chr.com." },
        { title: "7. Cookies", body: "Notre site utilise des cookies essentiels au fonctionnement et des cookies analytiques pour améliorer l'expérience utilisateur. Vous pouvez refuser les cookies non essentiels via les paramètres de votre navigateur." },
        { title: "8. Contact", body: "Pour toute question concernant cette politique de confidentialité, contactez notre délégué à la protection des données à l'adresse : contact@juyi-chr.com." }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdate: "Last updated: April 2026",
      sections: [
        { title: "1. Introduction", body: "At JUYI CHR, we respect your privacy and are committed to protecting the personal data you share with us. This policy explains how we collect, use, and safeguard your information." },
        { title: "2. Data We Collect", body: "When you visit our site, we may collect: your name, email address, phone number, and company information. This data is necessary to respond to your inquiries and provide our services." },
        { title: "3. Use of Data", body: "We use your data to: process your inquiries, send you quotes, improve customer service, and, with your consent, send you product information." },
        { title: "4. Data Sharing", body: "We do not sell or rent your personal data to third parties. We may share it with logistics or technical partners solely to fulfill your order." },
        { title: "5. Security", body: "We implement appropriate security measures (encryption, restricted access) to protect your data from unauthorized access, alteration, or destruction." },
        { title: "6. Your Rights", body: "In accordance with GDPR, you have the right to access, rectify, delete, and object to the processing of your data. To exercise these rights, contact us at contact@juyi-chr.com." },
        { title: "7. Cookies", body: "Our site uses essential cookies for functionality and analytical cookies to improve user experience. You may refuse non-essential cookies via your browser settings." },
        { title: "8. Contact", body: "For questions about this Privacy Policy, contact our Data Protection Officer at: contact@juyi-chr.com." }
      ]
    },
    es: {
      title: "Política de Privacidad",
      lastUpdate: "Última actualización: abril 2026",
      sections: [
        { title: "1. Introducción", body: "En JUYI CHR, respetamos su privacidad y nos comprometemos a proteger los datos personales que nos confía. Esta política explica cómo recopilamos, utilizamos y protegemos su información." },
        { title: "2. Datos recopilados", body: "Cuando visita nuestro sitio, podemos recopilar: nombre, correo electrónico, número de teléfono e información de su empresa. Estos datos son necesarios para responder a sus solicitudes y prestarle nuestros servicios." },
        { title: "3. Uso de datos", body: "Utilizamos sus datos para: procesar sus consultas, enviarle cotizaciones, mejorar el servicio al cliente y, con su consentimiento, enviarle información sobre productos." },
        { title: "4. Compartición de datos", body: "No vendemos ni alquilamos sus datos personales a terceros. Podemos compartirlos con socios logísticos o técnicos exclusivamente para ejecutar su pedido." },
        { title: "5. Seguridad", body: "Aplicamos medidas de seguridad adecuadas (cifrado, acceso restringido) para proteger sus datos contra accesos no autorizados, alteraciones o destrucción." },
        { title: "6. Sus derechos", body: "De conformidad con el RGPD, usted tiene derecho a acceder, rectificar, suprimir y oponerse al tratamiento de sus datos. Para ejercer estos derechos, contáctenos en contact@juyi-chr.com." },
        { title: "7. Cookies", body: "Nuestro sitio utiliza cookies esenciales para el funcionamiento y cookies analíticas para mejorar la experiencia de usuario. Puede rechazar las cookies no esenciales a través de la configuración de su navegador." },
        { title: "8. Contacto", body: "Para consultas sobre esta Política de Privacidad, contacte a nuestro Delegado de Protección de Datos en: contact@juyi-chr.com." }
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
