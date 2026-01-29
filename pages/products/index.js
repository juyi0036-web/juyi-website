import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { products } from '../../data/products';
import { translations } from '../../data/translations';

export default function AllProducts() {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale] || translations.fr;

  const allProducts = products.filter(Boolean);
  const pageTitle = t.nav_products;

  return (
    <div className="min-h-screen bg-cream font-sans">
      <Head>
        <title>{pageTitle} | JUYI CHR</title>
      </Head>

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-b border-[#EAD8C0] pb-5 mb-8">
          <h1 className="text-3xl font-extrabold text-choco uppercase">
            {pageTitle}
          </h1>
          <p className="mt-2 text-gray-600">
            {allProducts.length} {t.product_count_label}
          </p>
        </div>

        {allProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {allProducts.map((product) => {
              const displayName = typeof product.name === 'object'
                ? (product.name[locale] || product.name.fr || Object.values(product.name)[0])
                : product.name;
              const displayDesc = typeof product.description === 'object'
                ? (product.description[locale] || product.description.fr || Object.values(product.description)[0])
                : product.description;
              const primaryImage = Array.isArray(product.images) && product.images.length ? product.images[0] : product.image;
              return (
                <div key={product.id} className="group bg-white border border-[#EAD8C0] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col">
                  <Link href={`/product/${product.id}`} className="no-underline">
                    <div className="relative w-full h-64 bg-white p-4 flex items-center justify-center border-b border-gray-100">
                      <img
                        src={primaryImage}
                        alt={displayName}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition"
                        loading="lazy"
                        onError={(e) => {
                          const img = e.currentTarget;
                          if (!img.dataset.fallbackAttempted && img.src.includes('bl-e10-blast-freezer')) {
                            img.dataset.fallbackAttempted = '1';
                            img.src = '/bl-e10-blast-freezer.jpg';
                          } else {
                            img.src = '/products/petrin-test.jpg';
                          }
                        }}
                      />
                    </div>
                  </Link>

                  <div className="p-6 flex-1 flex flex-col">
                    <Link href={`/product/${product.id}`} className="no-underline">
                      <h3 className="text-lg font-bold text-choco mb-2 group-hover:text-red-700 transition">
                        {displayName}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                      {displayDesc}
                    </p>

                    {product.specs && (
                      <div className="bg-cream/30 rounded p-3 text-xs text-gray-600 mb-6 flex-1">
                        {Object.entries(product.specs).slice(0, 3).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-1 border-b border-gray-100 last:border-0">
                            <span className="font-semibold">{(t.spec_labels && t.spec_labels[key]) || key}:</span>
                            <span>{value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <a 
                      href="https://wa.me/85269724241" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full block bg-choco text-white py-3 rounded-lg font-bold hover:bg-red-700 transition uppercase text-sm tracking-wide no-underline"
                      aria-label={t.contact_whatsapp_title}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.001 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.16 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893 0-3.18-1.238-6.167-3.486-8.416"/></svg>
                        <span>{t.contact_whatsapp_title}</span>
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-choco">
            <p className="text-xl text-gray-500">{t.no_products}</p>
            <p className="text-sm text-gray-400 mt-2">{t.catalog_updating}</p>
          </div>
        )}
      </main>
    </div>
  );
}
