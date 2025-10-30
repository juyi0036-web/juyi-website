import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About({ lang, setLang }) {
  return (
    <div>
      <Head><title>About - Juyi CHR</title></Head>
      <Header lang={lang} setLang={setLang} />
      <main className="container py-8">
        <h1 className="text-2xl font-semibold mb-4">{lang==='zh' ? '关于我们' : 'About Us'}</h1>
        <section className="bg-white p-6 rounded shadow">
          <p className="text-gray-600">JUYI CHR Supply Chain Management - 专注烘焙设备研发与全球供应链管理。我们在质量控制与海外市场支持方面具备多年经验。</p>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  )
}
