import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

const items = [
  { id: 'mixer', zh: '和面机', en: 'Dough Mixer', fr: 'Pétrin' },
  { id: 'laminoir', zh: '压面机', en: 'Laminoir', fr: 'Laminoir' },
  { id: 'proofer', zh: '醒发箱', en: 'Proofer', fr: 'Chambre de fermentation' },
  { id: 'freezer', zh: '冰柜', en: 'Freezer', fr: 'Congélateur' },
  { id: 'workbench', zh: '操作平台', en: 'Work Platform', fr: 'Plateforme de travail' },
  { id: 'chariot', zh: '烤车', en: 'Chariot', fr: 'Chariot' },
]

export default function Products({ lang, setLang }) {
  return (
    <div>
      <Head><title>Products - Juyi CHR</title></Head>
      <Header lang={lang} setLang={setLang} />
      <main className="container py-8">
        <h1 className="text-2xl font-semibold mb-4">{lang==='zh' ? '产品系列' : 'Product Ranges'}</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map(it=>(
            <div key={it.id} className="bg-white rounded p-4 shadow">
              <div className="h-40 bg-gray-100 flex items-center justify-center">图片占位</div>
              <div className="mt-3">
                <div className="font-semibold">{lang==='zh'?it.zh:lang==='en'?it.en:it.fr}</div>
                <p className="text-sm text-gray-600 mt-2">型号 / Model / Modèle</p>
                <div className="mt-3 flex justify-between">
                  <Link href="/contact"><a className="px-3 py-1 border rounded">{lang==='zh' ? '询价' : 'Request Quote'}</a></Link>
                  <a className="underline">详情</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  )
}
