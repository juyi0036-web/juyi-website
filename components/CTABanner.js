import { useRouter } from 'next/router';
import { translations } from '../data/translations';

export default function CTABanner({ link = null, buttonText = null, title = null, subtitle = null }) {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale] || translations.fr;

  // 订阅横幅文案（不再使用，保留结构便于扩展）
  const defaultContent = {
    fr: {
      title: 'Restez Informé',
      subtitle: "Abonnez-vous à notre newsletter pour les dernières perspectives de l'industrie et les mises à jour réglementaires.",
      button: 'CONTACTEZ-NOUS'
    },
    en: {
      title: 'Stay Informed',
      subtitle: 'Subscribe to our newsletter for the latest industry insights and regulatory updates.',
      button: 'CONTACT US'
    },
    es: {
      title: 'Manténgase Informado',
      subtitle: 'Suscríbase a nuestro boletín para las últimas perspectivas de la industria y actualizaciones regulatorias.',
      button: 'CONTÁCTENOS'
    }
  };

  // 首页专用文案
  const homeContent = {
    fr: {
      title: "Prêt à Commencer ?",
      subtitle: "Contactez-nous dès aujourd'hui pour discuter de votre projet d'équipement.",
      button: 'DEMANDER UN DEVIS'
    },
    en: {
      title: 'Ready to Start?',
      subtitle: 'Contact us today to discuss your equipment project.',
      button: 'REQUEST A QUOTE'
    },
    es: {
      title: '¿Listo para Empezar?',
      subtitle: 'Contáctenos hoy para discutir su proyecto de equipamiento.',
      button: 'SOLICITAR PRESUPUESTO'
    }
  };

  const base = link ? homeContent : defaultContent;
  const msg = {
    title: title !== null ? title : (base[locale] || base.fr).title,
    subtitle: subtitle !== null ? subtitle : (base[locale] || base.fr).subtitle,
    button: buttonText !== null ? buttonText : (base[locale] || base.fr).button
  };

  return (
    <>
      {/* 橙色横幅 */}
      <div className="bg-brand-orange py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {msg.title}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {msg.subtitle}
          </p>

          {/* 按钮：如果传入 link，跳转到该链接；否则打开模态窗口（订阅功能已移除） */}
          {link ? (
            <a
              href={link}
              className="inline-block bg-white text-brand-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl uppercase tracking-wider"
            >
              {msg.button}
            </a>
          ) : (
            <button
              disabled
              className="inline-block bg-white/50 text-brand-orange/50 px-8 py-4 rounded-lg font-bold text-lg cursor-not-allowed uppercase tracking-wider"
            >
              {msg.button} (bientôt)
            </button>
          )}
        </div>
      </div>
    </>
  );
}
