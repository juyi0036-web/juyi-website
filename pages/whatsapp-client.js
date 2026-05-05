import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import CTABanner from '../components/CTABanner';
import { translations } from '../data/translations';

export default function WhatsAppClient() {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale] || translations.fr;

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [establishment, setEstablishment] = useState('');
  const [energy, setEnergy] = useState('');
  const [age, setAge] = useState('');
  const [surface, setSurface] = useState('');
  const [savings, setSavings] = useState(null);
  const [subsidies, setSubsidies] = useState(null);
  const [roi, setRoi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

  const calculate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const payload = {
        phone_number: phone,
        establishment_type: establishment,
        energy_type: energy,
        building_age: parseInt(age),
        surface_m2: parseInt(surface),
        email: email || undefined
      };
      const res = await fetch(`${API_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error(t.error_network || 'Erreur réseau');
      const data = await res.json();
      setSavings(data.annual_savings_eur);
      setSubsidies(data.subsidies_eur);
      setRoi(data.roi_years);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark font-sans text-white">
      <Head>
        <title>{t.title_short || 'Asseng - Devis Énergie Gratuit'}</title>
        <meta name="description" content={t.description_short || 'Gratuit, en 3 questions. Calcule tes économies d\'énergie avec Asseng.'} />
      </Head>

      <Navbar />

      <main className="flex-col">
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.whatsapp_hero_title || 'Devis Énergie Gratuit en 3 Questions'}</h1>
            <p className="text-gray-300 text-lg mb-10">{t.whatsapp_hero_desc || 'Réponds à ces questions simples et découvres combien tu peux économiser avec une pompe à chaleur.'}</p>
          </div>
        </section>

        {!success ? (
          <section className="py-12 px-6">
            <div className="max-w-2xl mx-auto">
              <div className="bg-slate-900 p-8 rounded-xl border border-gray-800">
                <div className="mb-8 p-4 bg-blue-900/30 border border-blue-800/50 rounded-lg text-sm">
                  <p className="text-blue-200">
                    <strong>RGPD :</strong> {t.rgpd_notice || 'Tes données sont protégées. Nous ne les revendons pas. Tu peux demander leur suppression à tout moment.'}
                  </p>
                </div>

                <form onSubmit={calculate} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2">{t.q1_label || 'Quel type d\'établissement as-tu ?'}</label>
                    <select value={establishment} onChange={(e) => setEstablishment(e.target.value)} className="w-full p-3 bg-slate-800 border border-gray-700 rounded text-white" required>
                      <option value="">{t.select_option || 'Sélectionne…'}</option>
                      <option value="restaurant">{t.est_restaurant || 'Restaurant'}</option>
                      <option value="hotel">{t.est_hotel || 'Hôtel'}</option>
                      <option value="cafe">{t.est_cafe || 'Café / Bar'}</option>
                      <option value="boulangerie">{t.est_boulangerie || 'Boulangerie / Pâtisserie'}</option>
                      <option value="brasserie">{t.est_brasserie || 'Brasserie'}</option>
                      <option value="collectivite">{t.est_collectivite || 'Collectivité / Établissement public'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">{t.q2_label || 'Quelle est ta source d\'énergie actuelle pour le chauffage ?'}</label>
                    <select value={energy} onChange={(e) => setEnergy(e.target.value)} className="w-full p-3 bg-slate-800 border border-gray-700 rounded text-white" required>
                      <option value="">{t.select_option || 'Sélectionne…'}</option>
                      <option value="gaz">{t.energy_gaz || 'Gaz Naturel'}</option>
                      <option value="fuel">{t.energy_fuel || 'Fuel / Gazoil'}</option>
                      <option value="electrique">{t.energy_electrique || 'Électricité (radiateurs)'}</option>
                      <option value="chaudiere">{t.energy_chaudiere || 'Chaudière (gaz/fuel)'}</option>
                      <option value="autre">{t.energy_autre || 'Autre'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">{t.q3_label || 'Quel est l\'âge du bâtiment ?'}</label>
                    <select value={age} onChange={(e) => setAge(e.target.value)} className="w-full p-3 bg-slate-800 border border-gray-700 rounded text-white" required>
                      <option value="">{t.select_option || 'Sélectionne…'}</option>
                      <option value="0-5">{t.age_05 || 'Moins de 5 ans'}</option>
                      <option value="5-10">{t.age_510 || '5 à 10 ans'}</option>
                      <option value="10-15">{t.age_1015 || '10 à 15 ans'}</option>
                      <option value="15+">{t.age_15plus || 'Plus de 15 ans'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold mb-2">{t.q4_label || 'Quelle est la surface chauffée (m²) ?'}</label>
                    <input type="number" min="1" value={surface} onChange={(e) => setSurface(e.target.value)} placeholder={t.surface_placeholder || 'Ex : 250'} className="w-full p-3 bg-slate-800 border border-gray-700 rounded text-white" required />
                  </div>

                  <div className="space-y-4 pt-4 border-t border-gray-700">
                    <div>
                      <label className="block text-sm font-bold mb-2">{t.phone_label || 'Téléphone (pour te contacter)'}</label>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+33 6 12 34 56 78" className="w-full p-3 bg-slate-800 border border-gray-700 rounded text-white" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">{t.email_label || 'Email (optionnel, pour recevoir le PDF)'}</label>
                      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="contact@example.com" className="w-full p-3 bg-slate-800 border border-gray-700 rounded text-white" />
                    </div>
                  </div>

                  {error && (
                    <div className="p-4 bg-red-900/30 border border-red-800/50 rounded-lg text-red-200 text-sm">
                      {error}
                    </div>
                  )}

                  <button type="submit" disabled={loading} className="w-full py-4 bg-brand-orange text-white font-bold rounded hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed">
                    {loading ? (t.btn_calculating || 'Calcul en cours…') : (t.btn_calculate || 'Calculer mes économies')}
                  </button>
                </form>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-900 p-10 rounded-xl border border-gray-800 text-center">
                <h2 className="text-3xl font-bold text-brand-orange mb-4">{t.result_title || 'Bravo ! Voici ton estimation'}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">{savings.toLocaleString('fr-FR')} €</div>
                    <div className="text-sm text-gray-400">{t.annual_savings || 'Économies annuelles'}</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">{subsidies.toLocaleString('fr-FR')} €</div>
                    <div className="text-sm text-gray-400">{t.subsidies_total || 'Subventions totales'}</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">{roi.toFixed(1)} ans</div>
                    <div className="text-sm text-gray-400">{t.roi || 'Retour sur investissement'}</div>
                  </div>
                </div>

                <div className="max-w-2xl mx-auto mb-8">
                  <h3 className="text-xl font-bold mb-3">{t.why_this_price || 'Pourquoi ce prix ?'}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {t.why_desc || 'Notre estimation inclut :'}<br/>
                    1. {t.next_step_1 || 'Un conseiller Asseng t\'appellera sous 24h pour confirmer les détails.'}<br/>
                    2. {t.next_step_2 || 'Tu recevras une étude technique gratuite avec le devis détaillé.'}<br/>
                    3. {t.next_step_3 || 'Nous t\'aidons aussi à monter ton dossier CEE / MaPrimeRénov\'.'}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <a href="/contact#contact" className="px-8 py-4 bg-brand-orange text-white font-bold rounded hover:bg-orange-700 transition shadow-lg">
                    {t.cta_contact || 'Parler à un expert'} <span>→</span>
                  </a>
                  <Link href="/privacy" className="px-8 py-4 border border-gray-600 text-white font-bold rounded hover:bg-gray-800 transition">
                    {t.delete_data || 'Supprimer mes données'} <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <CTABanner link="/contact#contact" />

      <footer className="bg-black/50 text-gray-400 py-8 text-center text-xs border-t border-gray-800">
        <p>
          {t.footer_rgpd || 'Protection des données RGPD. Tes informations ne sont pas revendues. '}
          <a href="/privacy" className="text-brand-orange hover:underline">{t.privacy_policy || 'Politique de confidentialité'}</a>.
        </p>
      </footer>
    </div>
  );
}