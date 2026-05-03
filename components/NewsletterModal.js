import { useState } from 'react';
import { useRouter } from 'next/router';
import { translations } from '../data/translations';

export default function NewsletterModal({ isOpen, onClose }) {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale] || translations.fr;

  const [formData, setFormData] = useState({
    name: '',
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
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'newsletter',
          name: formData.name,
          email: formData.email
        }),
      });

      const data = await response.json();

      if (response.ok && (data?.success === true || data?.message === 'Email sent successfully')) {
        setSubmitted(true);
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setError(data.error || 'Failed to subscribe' + 
      (data.message ? ': ' + data.message : '') + 
      ' (Status: ' + response.status + ')');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
          aria-label="Close"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t.newsletter_title || 'Abonnez-vous'}
            </h3>
            <p className="text-gray-600 mb-6">
              {t.newsletter_desc || 'Recevez nos dernières actualités et mises à jour réglementaires.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="newsletter-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Votre nom
                </label>
                <input
                  type="text"
                  id="newsletter-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="newsletter-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition"
                  placeholder="jean.dupont@example.com"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-orange text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed uppercase tracking-wider"
              >
                {isSubmitting ? '...' : 'S\'ABONNER'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t.newsletter_success_title || 'Merci!'}
            </h3>
            <p className="text-gray-600">
              {t.newsletter_success_desc || 'Vous êtes maintenant abonné à notre newsletter.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
