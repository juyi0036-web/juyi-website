import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Home({ lang, setLang }) {
  return (
    <div>
      <Head>
        <title>Juyi CHR Supply Chain Management</title>
      </Head>

      <Header lang={lang} setLang={setLang} />

      <main className="container py-8">
        <section className="bg-white rounded-lg p-6 shadow mb-8">
          <div className="md:flex items-center gap-6">
            <div className="flex-1">
              <h1 className="text-3xl font-bold">{lang==='zh' ? '专业的烘焙设备与一站式解决方案' : lang==='fr' ? 'Équipements de boulangerie professionnels & solutions tout-en-un' : 'Professional bakery equipment & one-stop solutions'}</h1>
              <p className="mt-3 text-gray-600">JUYI provides quality bakery machines and full supply-chain support for bakeries and distributors worldwide.</p>
              <div className="mt-4 flex gap-3">
                <Link href="/products"><a className="px-4 py-2 bg-amber-500 text-white rounded">{lang==='zh' ? '查看产品' : 'View Products'}</a></Link>
                <Link href="/contact"><a className="px-4 py-2 border rounded">{lang==='zh' ? '联系我们' : 'Contact Us'}</a></Link>
              </div>
            </div>
            <div className="w-48 h-48 bg-gray-100 rounded flex items-center justify-center">
              <Image src="/logo.png" alt="logo" width={160} height={160} />
            </div>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">{lang==='zh' ? '我们的优势' : 'Our Advantages'}</h3>
            <ul className="mt-3 text-sm text-gray-600">
              <li>国际品质控制</li>
              <li>快速供应链响应</li>
              <li>定制化服务</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">{lang==='zh' ? '服务范围' : 'Services'}</h3>
            <p className="mt-2 text-sm text-gray-600">从产品选型到售后支持，我们提供端到端的解决方案。</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-semibold">{lang==='zh' ? '联系' : 'Contact'}</h3>
            <p className="mt-2 text-sm text-gray-600">Email: juyi0036@gmail.com</p>
            <p className="mt-1 text-sm text-gray-600">WhatsApp: +85269724241</p>
          </div>
        </section>

      </main>

      <Footer lang={lang} />
    </div>
  )
}
