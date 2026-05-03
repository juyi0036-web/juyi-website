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
          type: 'contact',
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
      console.log('Response status:', response.status, 'ok:', response.ok);
      const respData = await response.json().catch(() => null);
      console.log('Response data:', respData);

      if (response.ok && respData && (respData.success === true || respData.message === 'Email sent successfully')) {
        setSubmitted(true);
        setFormData({ company: '', name: '', email: '', phone: '', category: '', message: '' });
      } else {
        console.error('Submit failed:', respData);
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
    // 多语言感谢词映射
    const thankYouMessages = {
      fr: {
        title: "Merci pour votre consultation !",
        desc: "Nous vous contacterons dans les plus brefs délais.",
        btn: "Envoyer une autre demande"
      },
      en: {
        title: "Thank you for your inquiry!",
        desc: "We will contact you shortly.",
        btn: "Submit another request"
      },
      es: {
        title: "¡Gracias por su consulta!",
        desc: "Le contactaremos pronto.",
        btn: "Enviar otra solicitud"
      }
    };
    
    // 根据当前语言选择消息，默认法语
    const msgs = thankYouMessages[locale] || thankYouMessages.fr;
    
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 text-center shadow-lg">
        <div className="text-6xl mb-6">🙏</div>
        <h3 className="text-2xl font-bold text-green-800 mb-3">
          {msgs.title}
        </h3>
        <p className="text-green-600 mb-6 max-w-md mx-auto">
          {msgs.desc}
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
          <span className="flex items-center gap-1">
            <span>🇫🇷</span> FR
          </span>
          <span className="flex items-center gap-1">
            <span>🇬🇧</span> EN
          </span>
          <span className="flex items-center gap-1">
            <span>🇪🇸</span> ES
          </span>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          {msgs.btn}
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
