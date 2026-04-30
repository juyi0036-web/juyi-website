import { useState } from 'react';
import { useRouter } from 'next/router';
import { translations } from '../data/translations';

export default function NewsletterModal({ isOpen, onClose }) {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale] || translations.fr;

  const [formData, setFormData] = useState({
    company: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'newsletter',
          company: formData.company,
          email: formData.email
        })
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
        setFormData({ company: '', email: '' });
      } else {
        setError(data.error || t.form_error || 'Submission failed');
      }
    } catch (error) {
      setError(t.form_error || 'Network error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 背景遮罩 */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* 模态窗口 */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 z-10">
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          aria-label="Close"
        >
          ×
        </button>

        {/* 标题 */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-brand-blue mb-2">
            {t.newsletter_title || 'Restez Informé'}
          </h3>
          <p className="text-gray-600 text-sm">
            {t.newsletter_desc || "Abonnez-vous à notre newsletter pour les dernières perspectives de l'industrie et les mises à jour réglementaires."}
          </p>
        </div>

        {/* 订阅表单 */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.form_company || 'Entreprise'} *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder={t.form_company_placeholder || 'Nom de votre entreprise'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t.form_email || 'Email'} *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t.form_email_placeholder || 'votre@email.com'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-orange text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (t.form_submitting || 'Envoi...') : (t.newsletter_button || 'CONTACTEZ-NOUS')}
            </button>
          </form>
        ) : (
          /* 成功状态 */
          <div className="text-center py-8">
            <div className="text-6xl mb-4">✅</div>
            <h4 className="text-xl font-bold text-green-600 mb-2">
              {t.newsletter_success_title || 'Merci !'}
            </h4>
            <p className="text-gray-600">
              {t.newsletter_success_desc || 'Vous êtes maintenant abonné à notre newsletter.'}
            </p>
            <button
              onClick={onClose}
              className="mt-6 text-brand-orange underline hover:no-underline"
            >
              {t.form_again || 'Fermer'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
