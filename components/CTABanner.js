import { useState } from 'react';
import { useRouter } from 'next/router';
import { translations } from '../data/translations';
import NewsletterModal from './NewsletterModal';

export default function CTABanner({ compact = false }) {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale] || translations.fr;

  const [isModalOpen, setIsModalOpen] = useState(false);

  // 多语言文案
  const content = {
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

  const msg = content[locale] || content.fr;

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

          {/* 按钮点击打开模态窗口 */}
          <button
            onClick={openModal}
            className="inline-block bg-white text-brand-orange px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl uppercase tracking-wider"
          >
            {msg.button}
          </button>
        </div>
      </div>

      {/* 订阅模态窗口 */}
      <NewsletterModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
