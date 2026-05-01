import { useRouter } from 'next/router';
import { useState } from 'react';
import { translations } from '../data/translations';
import NewsletterModal from './NewsletterModal';

export default function CTABanner({ link = null, buttonText = null, title = null, subtitle = null }) {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale] || translations.fr;

  // 订阅横幅文案（默认模式：无 link 参数）-> 深蓝色背景
  const defaultContent = {
    fr: {
      title: 'Restez Informé',
      subtitle: "Abonnez-vous à notre newsletter pour les dernières perspectives de l'industrie et les mises à jour réglementaires.",
      button: 'ABONNEZ-VOUS'
    },
    en: {
      title: 'Stay Informed',
      subtitle: 'Subscribe to our newsletter for the latest industry insights and regulatory updates.',
      button: 'SUBSCRIBE'
    },
    es: {
      title: 'Manténgase Informado',
      subtitle: 'Suscríbase a nuestro boletín para las últimas perspectivas de la industria y actualizaciones regulatorias.',
      button: 'SUSCRIBIRSE'
    }
  };

  // 首页专用文案（有 link 参数）-> 橙色背景
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

  const isHomeMode = link !== null;
  const base = isHomeMode ? homeContent : defaultContent;
  const msg = {
    title: title !== null ? title : (base[locale] || base.fr).title,
    subtitle: subtitle !== null ? subtitle : (base[locale] || base.fr).subtitle,
    button: buttonText !== null ? buttonText : (base[locale] || base.fr).button
  };

  // 订阅弹窗状态（仅在默认模式下启用）
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* 横幅容器：首页橙色，订阅深蓝色 */}
      <div className={isHomeMode ? "bg-brand-orange py-16" : "bg-slate-800 py-16"}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {msg.title}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            {msg.subtitle}
          </p>

          {/* 按钮逻辑 */}
          {isHomeMode ? (
            // 首页模式：跳转到联系页面（白底橙字按钮）
            <a
              href={link}
              className="inline-block bg-white text-brand-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl uppercase tracking-wider"
            >
              {msg.button}
            </a>
          ) : (
            // 订阅模式：打开弹窗（橙底白字按钮）
            <button
              onClick={() => setShowModal(true)}
              className="inline-block bg-brand-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition shadow-lg hover:shadow-xl uppercase tracking-wider"
            >
              {msg.button}
            </button>
          )}
        </div>
      </div>

      {/* 订阅弹窗 */}
      {!isHomeMode && (
        <NewsletterModal isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
