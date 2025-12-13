import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { products } from '../../data/products';
import { translations } from '../../data/translations';

export default function AllProducts() {
  const router = useRouter();
  const { locale } = router;
  const t = translations.fr;

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
                ? (product.name.fr || Object.values(product.name)[0])
                : product.name;
              const displayDesc = typeof product.description === 'object'
                ? (product.description.fr || Object.values(product.description)[0])
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

                    <a href="https://wa.me/85269724241" target="_blank" className="w-full block text-center bg-choco text-white py-3 rounded-lg font-bold hover:bg-red-700 transition uppercase text-sm tracking-wide no-underline">
                      {t.ask_price}
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
