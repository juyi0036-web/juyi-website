import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream font-sans flex flex-col">
      <Head>
        <title>Contactez-nous | JUYI CHR</title>
        <meta name="description" content="Contactez JUYI CHR pour vos équipements de boulangerie et cuisine professionnelle. Service export Chine-France." />
      </Head>

      <Navbar />

      {/* 统一的巧克力色头部 */}
      <div className="bg-choco text-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl uppercase">
            Parlons de votre projet
          </h1>
          <p className="mt-4 text-xl text-cream/80 max-w-2xl mx-auto">
            Une question technique ? Un devis export ? Notre équipe franco-chinoise est là pour vous.
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* 左侧：联系信息卡片 */}
          <div>
            <h2 className="text-2xl font-bold text-choco mb-8 uppercase tracking-wide border-l-4 border-red-700 pl-4">
              Nos Coordonnées
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-md border-2 border-[#EAD8C0] space-y-8">
              {/* WhatsApp / 电话 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-choco text-cream">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.001 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.16 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893 0-3.18-1.238-6.167-3.486-8.416"/></svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-choco">WhatsApp Service Export</h3>
                  <p className="mt-1 text-lg text-gray-800 font-medium">+852 6972 4241</p>
                  {/* 名字已改为 Sophie */}
                  <p className="text-sm text-gray-500">Sophie (Réponse sous 1h)</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-choco text-cream">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-choco">Email Professionnel</h3>
                  <p className="mt-1 text-lg text-gray-800 font-medium">juyi0036@gmail.com</p>
                  <p className="text-sm text-gray-500">Pour devis et catalogues</p>
                </div>
              </div>

              {/* 地址 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-choco text-cream">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-choco">Siège & Usine</h3>
                  <p className="mt-1 text-base text-gray-600">Guangzhou, China</p>
                  <p className="text-sm text-gray-500">Visite d'usine sur rendez-vous</p>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：专业表单 */}
          <div>
             <h2 className="text-2xl font-bold text-choco mb-8 uppercase tracking-wide border-l-4 border-red-700 pl-4">
              Envoyer un Message
            </h2>
            <form className="bg-white p-8 rounded-xl shadow-2xl border border-[#EAD8C0] space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-choco">
                  Nom / Entreprise
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-choco focus:border-choco transition"
                  placeholder="Ex: Boulangerie Le Bon Pain"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-choco">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-choco focus:border-choco transition"
                  placeholder="contact@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-choco">
                  Votre Demande
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-choco focus:border-choco transition"
                  placeholder="Bonjour Sophie, je voudrais des informations sur..."
                />
              </div>
              <button
                type="button"
                className="w-full py-4 px-6 rounded-lg shadow-lg text-lg font-bold text-white bg-choco hover:bg-red-800 transition transform hover:-translate-y-1"
                onClick={() => alert("Merci ! Pour l'instant, merci de nous contacter via WhatsApp pour une réponse immédiate.")}
              >
                Envoyer
              </button>
            </form>
          </div>

        </div>
      </main>

      <footer className="bg-white border-t border-[#EAD8C0] mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 text-center">
            <p className="text-sm text-gray-400">
                &copy; 2025 Juyi CHR Supply Chain Management.
            </p>
        </div>
      </footer>
    </div>
  );
}
