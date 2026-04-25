import { useState } from 'react';
import { useRouter } from 'next/router';
import { translations } from '../data/translations';

export default function InquiryForm({ compact = false }) {
  const { locale } = useRouter();
  const t = translations[locale] || translations.fr;
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          data: {
            company: formData.company,
            phone: formData.phone,
            category: formData.category,
            message: formData.message
          }
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ company: '', name: '', email: '', phone: '', category: '', message: '' });
      } else {
        alert(t.form_error || 'Une erreur s\'est produite. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(t.form_error || 'Une erreur s\'est produite. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">
          {t.form_success_title || 'Merci pour votre demande !'}
        </h3>
        <p className="text-green-600">
          {t.form_success_desc || 'Notre équipe vous contactera dans les 24 heures.'}
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-green-700 underline hover:no-underline"
        >
          {t.form_again || 'Envoyer une autre demande'}
        </button>
      </div>
    );
  }

  return (
    <div className={`${compact ? '' : 'bg-white rounded-2xl shadow-xl border border-gray-100 p-8'}`}>
      {!compact && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-brand-dark mb-2">
            {t.form_title || 'Demandez un Devis Gratuit'}
          </h3>
          <p className="text-gray-500 text-sm">
            {t.form_subtitle || 'Minimum de commande: $10,000 USD. Remplissez le formulaire ci-dessous.'}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition"
              placeholder={t.form_company_placeholder || 'Nom de votre entreprise'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t.form_name || 'Nom'} *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition"
              placeholder={t.form_name_placeholder || 'Votre nom complet'}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition"
              placeholder={t.form_email_placeholder || 'votre@email.com'}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t.form_phone || 'Téléphone'}
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition"
              placeholder={t.form_phone_placeholder || '+33 6 12 34 56 78'}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t.form_category || 'Catégorie d\'équipement'} *
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition"
          >
            <option value="">{t.form_category_select || 'Sélectionnez une catégorie'}</option>
            <option value="boulangerie">{t.form_cat_bakery || 'Boulangerie & Pâtisserie'}</option>
            <option value="fours">{t.form_cat_oven || 'Fours & Ligne Chaude'}</option>
            <option value="inox">{t.form_cat_inox || 'Espace & Hygiène (Inox)'}</option>
            <option value="froid">{t.form_cat_cold || 'Froid & Glace'}</option>
            <option value="autre">{t.form_cat_other || 'Autre'}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t.form_message || 'Description de votre besoin'} *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent transition"
            placeholder={t.form_message_placeholder || 'Décrivez les équipements que vous recherchez, quantités, spécifications...'}
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-gray-400">
            {t.form_min_order || 'Minimum de commande: $10,000 USD'}
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-brand-orange text-white font-bold rounded-lg hover:bg-orange-700 transition shadow-lg shadow-orange-900/20 uppercase tracking-wider text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (t.form_submitting || 'Envoi...') : (t.form_submit || 'Envoyer la Demande')}
          </button>
        </div>
      </form>
    </div>
  );
}
