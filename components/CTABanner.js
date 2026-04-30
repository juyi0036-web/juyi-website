import { useState } from 'react';
import { useRouter } from 'next/router';
import { translations } from '../data/translations';
import NewsletterModal from './NewsletterModal';

export default function CTABanner({ compact = false, link = null, buttonText = null, title = null, subtitle = null }) {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale] || translations.fr;

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 多语言文案 — 未传入自定义值时使用默认订阅文案
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

  // 首页专用文案（如果传入）
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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

          {/* 根据 props 决定按钮行为：链接或打开模态 */}
          {link ? (
            <a
              href={link}
              className="inline-block bg-white text-brand-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl uppercase tracking-wider"
            >
              {msg.button}
            </a>
          ) : (
            <button
              onClick={openModal}
              className="inline-block bg-white text-brand-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl uppercase tracking-wider"
            >
              {msg.button}
            </button>
          )}
        </div>
      </div>

      {/* 订阅模态窗口 */}
      <NewsletterModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
