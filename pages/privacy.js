import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import { translations } from '../data/translations';

export default function Privacy() {
  const { locale } = useRouter();
  const t = translations[locale] || translations.fr;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-brand-blue">
      <Head>
        <title>{t.privacy_title || 'Politique de Confidentialité'} | JUYI CHR</title>
        <meta name="description" content={t.privacy_desc || "Protection des données personnelles et politique de confidentialité de JUYI CHR."} />
      </Head>

      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-brand-dark mb-8 uppercase tracking-wide border-l-4 border-brand-orange pl-4">
          {t.privacy_title || 'Politique de Confidentialité'}
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-3">1. Collecte des données</h2>
            <p>
              JUYI CHR collecte les données personnelles que vous nous fournissez volontairement via le formulaire de contact, 
              les échanges par email ou les appels téléphoniques. Ces données incluent notamment :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Nom de l'entreprise</li>
              <li>Messages et demandes de devis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-3">2. Utilisation des données</h2>
            <p>
              Vos données sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Répondre à vos demandes de renseignements et devis</li>
              <li>Vous accompagner dans vos projets d'équipement CHR</li>
              <li>Vous envoyer des informations sur nos produits et services (avec votre consentement)</li>
              <li>Améliorer notre service client et notre site web</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-3">3. Conservation des données</h2>
            <p>
              Vos données personnelles sont conservées pendant une durée n'excédant pas 3 ans après le dernier contact, 
              conformément au Règlement Général sur la Protection des Données (RGPD).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-3">4. Partage des données</h2>
            <p>
              JUYI CHR ne vend ni ne loue vos données personnelles à des tiers. Vos informations peuvent être partagées 
              uniquement avec :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Nos partenaires logistiques pour la livraison de vos équipements (avec votre accord explicite)</li>
              <li>Les autorités administratives ou judiciaires lorsque la loi l'exige</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-3">5. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité appropriées (accès restreints, chiffrement, sauvegardes) 
              pour protéger vos données contre tout accès non autorisé, altération ou divulgation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-3">6. Vos droits</h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement (droit à l'oubli)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à :{' '}
              <a href="mailto:contact@juyi-chr.com" className="text-brand-orange hover:underline">
                contact@juyi-chr.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-3">7. Cookies</h2>
            <p>
              Notre site utilise des cookies strictement nécessaires au fonctionnement (session, authentification) 
              et des cookies analytiques pour mesurer l'audience. Vous pouvez gérer vos préférences via 
              les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-dark mb-3">8. Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité, veuillez nous contacter :
            </p>
            <div className="mt-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <p><strong>JUYI CHR</strong></p>
              <p>Email : <a href="mailto:contact@juyi-chr.com" className="text-brand-orange hover:underline">contact@juyi-chr.com</a></p>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-brand-orange rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            {t.about_cta_title || "Prêt à Commencer ?"}
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            {t.about_cta_desc || "Contactez-nous dès aujourd'hui pour discuter de votre projet d'équipement."}
          </p>
          <a 
            href="/contact#contact" 
            className="inline-block bg-white text-brand-orange px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg uppercase tracking-wider"
          >
            {t.about_cta_btn || "Demander un Devis"}
          </a>
        </div>
      </main>

      <CTABanner />
    </div>
  );
}
