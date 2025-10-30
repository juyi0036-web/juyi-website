import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact({ lang, setLang }) {
  return (
    <div>
      <Head><title>Contact - Juyi CHR</title></Head>
      <Header lang={lang} setLang={setLang} />
      <main className="container py-8">
        <h1 className="text-2xl font-semibold mb-4">{lang==='zh' ? '联系我们' : 'Contact Us'}</h1>
        <section className="bg-white p-6 rounded shadow">
          <p className="text-gray-600">Email: juyi0036@gmail.com</p>
          <p className="text-gray-600">WhatsApp: +85269724241</p>
          <p className="text-gray-600">Address: Shenzhen, China</p>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  )
}
