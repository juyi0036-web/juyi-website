import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { products } from '../data/products'
import { categories } from '../data/categories'
import { translations } from '../data/translations'

export default function SearchPage() {
  const router = useRouter()
  const { q } = router.query
  const { locale } = router
  const t = translations[locale] || translations.fr

  const query = Array.isArray(q) ? q.join(' ') : (q || '')
  const qLower = query.trim().toLowerCase()

  const title = 'Recherche'
  const resultWord = 'résultats'
  const enterKeyword = 'Veuillez entrer un mot-clé'

  const getDisplayText = (obj) => {
    if (!obj) return ''
    if (typeof obj === 'object') {
      return obj[locale] || obj.fr || Object.values(obj)[0] || ''
    }
    return obj
  }

  const enriched = products.filter(Boolean).map(p => {
    const name = getDisplayText(p.name)
    const desc = getDisplayText(p.description)
    const cat = categories.find(c => c.slug === p.categorySlug)
    const sub = cat?.subcategories.find(s => s.slug === p.subCategorySlug)
    const catName = getDisplayText(cat?.name) || p.categorySlug
    const subName = getDisplayText(sub?.name) || p.subCategorySlug || ''
    const specsText = p.specs ? Object.entries(p.specs).map(([k, v]) => `${k} ${v}`).join(' ') : ''
    const haystack = [p.id, name, desc, catName, subName, specsText].join(' ').toLowerCase()
    const match = qLower ? haystack.includes(qLower) : false
    const primaryImage = Array.isArray(p.images) && p.images.length ? p.images[0] : p.image
    return { product: p, name, desc, catName, subName, primaryImage, match }
  })

  const results = qLower ? enriched.filter(e => e.match) : []

  return (
    <div className="min-h-screen bg-cream font-sans">
      <Head>
        <title>{title} | JUYI CHR</title>
      </Head>

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">{t.nav_home}</Link>
          <span className="mx-2">/</span>
          <span className="font-bold text-choco">{title}</span>
        </nav>

        <div className="border-b border-[#EAD8C0] pb-5 mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-choco uppercase">{title}</h1>
          {qLower && (
            <p className="mt-2 text-gray-600">{results.length} {resultWord}</p>
          )}
        </div>

        {!qLower && (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-choco">
            <p className="text-xl text-gray-500">{enterKeyword}</p>
          </div>
        )}

        {qLower && results.length > 0 && (
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {results.map(({ product, name, desc, primaryImage }) => (
              <div key={product.id} className="group bg-white border border-[#EAD8C0] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col">
                <Link href={`/product/${product.id}`} className="no-underline">
                  <div className="relative w-full h-64 bg-white p-4 flex items-center justify-center border-b border-gray-100">
                    <img
                      src={primaryImage}
                      alt={name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition"
                      loading="lazy"
                      onError={(e) => {
                        const img = e.currentTarget
                        img.src = '/products/petrin-test.jpg'
                      }}
                    />
                  </div>
                </Link>
                <div className="p-6 flex-1 flex flex-col">
                  <Link href={`/product/${product.id}`} className="no-underline">
                    <h3 className="text-lg font-bold text-choco mb-2 group-hover:text-red-700 transition">{name}</h3>
                  </Link>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">{desc}</p>
                  <a href="https://wa.me/85269724241" target="_blank" className="w-full block text-center bg-choco text-white py-3 rounded-lg font-bold hover:bg-red-700 transition uppercase text-sm tracking-wide no-underline">
                    {t.ask_price}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {qLower && results.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-choco">
            <p className="text-xl text-gray-500">0 {resultWord}</p>
            <p className="text-sm text-gray-400 mt-2">{t.catalog_updating}</p>
          </div>
        )}
      </main>
    </div>
  )
}
