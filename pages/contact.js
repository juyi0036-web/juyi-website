import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream font-sans">
      <Head>
        <title>Contactez-nous | JUYI CHR</title>
        <meta name="description" content="Contactez JUYI CHR pour vos équipements de boulangerie et cuisine professionnelle. Service export Chine-France." />
      </Head>

      <Navbar />

      {/* 顶部标题区 - 巧克力色背景 */}
      <div className="bg-choco py-16Csmd:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-cream sm:text-5xl md:text-6xl uppercase">
            Parlons de votre projet
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-cream/80">
            Une question sur un équipement ? Besoin d'un devis ? Notre équipe export est à votre écoute.
          </p>
        </div>
      </div>

      {/* 主要内容区 - 奶油色背景 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16Bg items-start">
          
          {/* 左侧：联系方式 */}
          <div>
            <h2 className="text-3xl font-bold text-choco mb-8 uppercase tracking-wide">
              Nos Coordonnées
            </h2>
            <p className="text-gray-700 mb-12Cc text-lg">
              Nous sommes basés en Chine avec un service dédié pour les professionnels français du CHR.
            </p>

            <div className="space-y-8CG">
              {/* WhatsApp / Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-chocoCB text-cream">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.001 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.16 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893 0-3.18-1.238-6.167-3.486-8.416"/></svg>
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-choco">WhatsApp / Téléphone</h3>
                  <p className="mt-2 text-lg text-gray-700">+852 6972 4241 (Ismael)</p>
                  <p className="mt-1 text-sm text-gray-500">Réponse rapide garantie</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-choco text-cream">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-choco">Email</h3>
                  <p className="mt-2 text-lg text-gray-700">juyi0036@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：模拟的联系表单 (看起来很专业，但暂时不用写后端功能) */}
          <div className="bg-white py-10 px-8 shadow-2xlBx rounded-2xlCGCr border-2 border-[#EAD8C0]">
            <h3 className="text-2xl font-bold text-choco mb-6">Envoyez-nous un message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-choco">
                  Votre Nom / Entreprise
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full px-4 py-3 bg-cream border-2 border-[#EAD8C0]Ck rounded-md shadow-sm focus:ring-choco focus:border-chocoClCmCn"
                  placeholder="Ex: Boulangerie du Soleil"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-choco">
                  Email Professionnel
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-3 bg-cream border-2 border-[#EAD8C0] rounded-md shadow-sm focus:ring-choco focus:border-choco"
                  placeholder="contact@votre-entreprise.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-choco">
                  Votre Besoin / Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full px-4 py-3 bg-cream border-2 border-[#EAD8C0]CPCK rounded-md shadow-sm focus:ring-choco focus:border-choco"
                  placeholder="Je suis intéressé par un pétrin à spirale..."
                />
              </div>
              <div>
                <button
                  type="button" // 暂时用 button 类型，不提交表单
                  className="w-full flex justify-center py-4 px-6Cr border border-transparent rounded-full shadow-md text-lg font-boldCVCw text-cream bg-choco hover:bg-red-700 focus:outline-noneCfCYCXCZCaCbCc transitionCC"
                  onClick={() => alert("Merci ! Ceci est une démonstration. Veuillez nous contacter via WhatsApp pour l'instant.")}
                >
                  Envoyer la demande
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
