import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router'
import { translations } from '../data/translations'

export default function Services() {
  const { locale } = useRouter()
  const t = translations[locale] || translations.fr

  const icons = [
    (
      <svg className="w-10 h-10 text-choco" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1zm5 10h6" />
      </svg>
    ),
    (
      <svg className="w-10 h-10 text-choco" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6l7 4-7 4-7-4 7-4zm0 8l7-4v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6l7 4z" />
      </svg>
    ),
    (
      <svg className="w-10 h-10 text-choco" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6h8a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2V8a2 2 0 012-2zm-4 12h.01M6 10h.01" />
      </svg>
    ),
  ]

  const sourceCols = t.services_cols || translations.fr.services_cols || []
  const columns = sourceCols.map((col, idx) => ({ ...col, icon: icons[idx] }))

  return (
    <div className="min-h-screen bg-cream font-sans">
      <Head>
        <title>{t.nav_services} | JUYI CHR</title>
      </Head>

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-choco uppercase tracking-widest">{t.nav_services}</h1>
          <div className="w-16 h-1 bg-[#EAD8C0] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((col, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-md border border-[#EAD8C0]">
              <div className="mb-6 flex items-center gap-3">
                {col.icon}
                <h2 className="text-2xl font-bold text-choco">{col.headline}</h2>
              </div>
              <div className="space-y-5">
                {col.items.map((item, i) => (
                  <div key={i}>
                    <div className="text-lg font-bold text-choco">{item.title}</div>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
