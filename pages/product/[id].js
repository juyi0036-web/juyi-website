import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { products } from '../../data/products';
import { categories } from '../../data/categories';
import { translations } from '../../data/translations';

export default function ProductDetail({ product: productProp }) {
  const router = useRouter();
  const { id } = router.query;
  const { locale } = router;
  const t = translations[locale] || translations.fr;

  const product = productProp || products.find(p => p && (p.id === id || p.id === router.asPath.split('/').pop()));
  const displayName = product && (typeof product.name === 'object'
    ? (product.name[locale] || product.name.fr || Object.values(product.name)[0])
    : product.name);
  const displayDesc = product && (typeof product.description === 'object'
    ? (product.description[locale] || product.description.fr || Object.values(product.description)[0])
    : product.description);
  const category = categories.find(c => c.slug === product?.categorySlug);
  const sub = category?.subcategories.find(s => s.slug === product?.subCategorySlug);

  const pageTitle = ((displayName || 'Produit') + (product?.id === 'frigo-2door-gn' ? '（double）' : ''));
  const categoryPath = product ? `/products/${product.categorySlug}` : '/products';
  const subCategoryPath = product?.subCategorySlug ? `/products/${product.categorySlug}/${product.subCategorySlug}` : null;
  const images = (Array.isArray(product?.images) && product.images.length > 0)
    ? product.images
    : [product?.image].filter(Boolean);
  const primaryImage = images.length ? images[0] : null;
  const displayImages = images.slice(0, 2);
  const header5 = '5 niveaux';
  const header10 = '10 niveaux';
  const headerSimple = 'Simple';
  const headerDouble = 'Double';
  const net5 = product?.specs ? product.specs['Poids Net (5 niveaux)'] : undefined;
  const brut5 = product?.specs ? product.specs['Poids Brut (5 niveaux)'] : undefined;
  const net10 = product?.specs ? product.specs['Poids Net (10 niveaux)'] : undefined;
  const brut10 = product?.specs ? product.specs['Poids Brut (10 niveaux)'] : undefined;
  const parseNum = (v) => {
    const s = String(v || '').replace(/[^0-9.]/g, '');
    return s ? parseFloat(s) : NaN;
  };
  const net10Derived = net10 || (net5 ? `≈${Math.round(parseNum(net5) * 1.5)} kg` : undefined);
  const brut10Derived = brut10 || ((net10Derived || net5) ? `≈${Math.round((parseNum(net10Derived || net5) || 0) + 30)} kg` : undefined);

  if (!product) {
    return (
      <div className="min-h-screen bg-cream font-sans">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-2xl font-bold text-choco mb-4">{t.no_products}</h1>
          <p className="text-gray-600 mb-8">{t.catalog_updating}</p>
          <Link href="/" className="inline-block bg-choco text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition uppercase text-sm tracking-wide no-underline">
            {t.nav_home}
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream font-sans">
      <Head>
        <title>{pageTitle} | JUYI CHR</title>
        <meta name="description" content={displayDesc || ''} />
      </Head>

      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-red-700">{t.nav_home}</Link>
          <span className="mx-2">/</span>
            <Link href={categoryPath} className="hover:text-red-700">
            {(category?.name && (category.name[locale] || category.name.fr)) || category?.name || product?.categorySlug}
            </Link>
          {sub && (
            <>
              <span className="mx-2">/</span>
              <Link href={subCategoryPath || categoryPath} className="hover:text-red-700">
                {(sub.name && (sub.name[locale] || sub.name.fr)) || sub.name}
              </Link>
            </>
          )}
          <span className="mx-2">/</span>
          <span className="font-bold text-choco">{pageTitle}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl border border-[#EAD8C0] shadow-sm p-8">
          <div className="relative w-full space-y-4">
            {displayImages.map((imgSrc, idx) => (
              <div key={idx} className="h-[420px] bg-white flex items-center justify-center border border-gray-100 rounded-xl overflow-hidden">
                <img
                  src={imgSrc}
                  alt={pageTitle}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.dataset.fallbackAttempted && (img.src.includes('/products/'))) {
                      img.dataset.fallbackAttempted = '1';
                      img.src = '/products/petrin-test.jpg';
                    } else {
                      img.src = '/products/petrin-test.jpg';
                    }
                  }}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-extrabold text-choco uppercase">{pageTitle}</h1>
            <p className="mt-4 text-gray-700">{displayDesc}</p>

            {product?.specs && (
              product.id === 'four-convection-5-10' ? (
                <div className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-lg font-bold text-choco mb-3">{header5}</h2>
                      <div className="space-y-3">
                        {[
                          ['Dimensions (Externe)', product.specs['Dimensions (Externe)']],
                          ['Puissance', product.specs['Puissance']],
                          ['Voltage', product.specs['Voltage']],
                          ['Plateaux', product.specs['Plateaux']],
                          ['Température', product.specs['Température']],
                          ['Capacité (5 niveaux)', product.specs['Capacité (5 niveaux)']],
                          ['Poids Net (5 niveaux)', product.specs['Poids Net (5 niveaux)']],
                          ['Poids Brut (5 niveaux)', product.specs['Poids Brut (5 niveaux)']],
                          ['Matériau', product.specs['Matériau']]
                        ].filter(([, v]) => v).map(([k, v]) => (
                          <div key={k} className="flex justify-between items-center bg-cream/50 rounded-lg px-4 py-3 border border-gray-100">
                            <span className="text-sm font-semibold text-choco">{(t.spec_labels && t.spec_labels[k]) || k}</span>
                            <span className="text-sm text-gray-700">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-choco mb-3">{header10}</h2>
                      <div className="space-y-3">
                        {[
                          ['Dimensions (10 niveaux)', product.specs['Dimensions (10 niveaux)']],
                          ['Puissance (10 niveaux)', product.specs['Puissance (10 niveaux)'] || product.specs['Puissance']],
                          ['Voltage (10 niveaux)', product.specs['Voltage (10 niveaux)'] || product.specs['Voltage']],
                          ['Plateaux', product.specs['Plateaux']],
                          ['Température', product.specs['Température']],
                          ['Capacité (10 niveaux)', product.specs['Capacité (10 niveaux)']],
                          ['Poids Net (10 niveaux)', net10Derived],
                          ['Poids Brut (10 niveaux)', brut10Derived],
                          ['Matériau', product.specs['Matériau']]
                        ].filter(([, v]) => v).map(([k, v]) => (
                          <div key={k} className="flex justify-between items-center bg-cream/50 rounded-lg px-4 py-3 border border-gray-100">
                            <span className="text-sm font-semibold text-choco">{(t.spec_labels && t.spec_labels[k]) || k}</span>
                            <span className="text-sm text-gray-700">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : product.id === 'echelle-a-bac' ? (
                <div className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-lg font-bold text-choco mb-3">{headerSimple}</h2>
                      <div className="space-y-3">
                        {[
                          ['Dimensions', product.specs['Dimensions (simple)']],
                          ['Matériau', product.specs['Matériau']],
                          ['Tube', product.specs['Tube']],
                          ['Épaisseur', product.specs['Épaisseur']],
                          ['Plateaux', product.specs['Plateaux']],
                          ['Roues', product.specs['Roues']],
                          ['Poids Net', product.specs['Poids Net (simple)']],
                          ['Poids Brut', product.specs['Poids Brut (simple)']],
                          ['Emballage', product.specs['Emballage (simple)']]
                        ].filter(([, v]) => v).map(([k, v]) => (
                          <div key={k} className="flex justify-between items-center bg-cream/50 rounded-lg px-4 py-3 border border-gray-100">
                            <span className="text-sm font-semibold text-choco">{(t.spec_labels && t.spec_labels[k]) || k}</span>
                            <span className="text-sm text-gray-700">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-choco mb-3">{headerDouble}</h2>
                      <div className="space-y-3">
                        {[
                          ['Dimensions', product.specs['Dimensions (double)']],
                          ['Matériau', product.specs['Matériau']],
                          ['Tube', product.specs['Tube']],
                          ['Épaisseur', product.specs['Épaisseur']],
                          ['Plateaux', product.specs['Plateaux']],
                          ['Roues', product.specs['Roues']],
                          ['Poids Net', product.specs['Poids Net (double)']],
                          ['Poids Brut', product.specs['Poids Brut (double)']],
                          ['Emballage', product.specs['Emballage (double)']]
                        ].filter(([, v]) => v).map(([k, v]) => (
                          <div key={k} className="flex justify-between items-center bg-cream/50 rounded-lg px-4 py-3 border border-gray-100">
                            <span className="text-sm font-semibold text-choco">{(t.spec_labels && t.spec_labels[k]) || k}</span>
                            <span className="text-sm text-gray-700">{v}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : product.id === 'ampoules-comparatif' ? (
                <div className="mt-8 overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <thead className="bg-cream/60">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-bold text-choco uppercase tracking-wide">{t.spec_labels && t.spec_labels['Modèle'] || 'Modèle'}</th>
                        {((product.compare && product.compare.models) || []).map((m, idx) => (
                          <th key={idx} className="px-4 py-3 text-left text-xs font-bold text-choco uppercase tracking-wide">{m.label}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {(((product.compare && product.compare.attributes) || [])).map((attr) => (
                        <tr key={attr} className="border-t">
                          <td className="px-4 py-3 text-sm font-semibold text-choco">{(t.spec_labels && t.spec_labels[attr]) || attr}</td>
                          {((product.compare && product.compare.models) || []).map((m, idx) => {
                            const v = m && m[attr];
                            const s = Array.isArray(v) ? v.join(' / ') : (v || '');
                            return (
                              <td key={idx} className="px-4 py-3 text-sm text-gray-700">{s}</td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {Object.entries(product.specs).map(([k, v]) => (
                      <div key={k} className="flex justify-between items-center bg-cream/50 rounded-lg px-4 py-3 border border-gray-100">
                        <span className="text-sm font-semibold text-choco">{(t.spec_labels && t.spec_labels[k]) || k}</span>
                        <span className="text-sm text-gray-700">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}

            <div className="mt-10">
              <Link href="/contact" className="inline-block bg-choco text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition uppercase text-sm tracking-wide no-underline">
                {t.ask_price}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-[#EAD8C0] mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 text-center">
          <p className="text-sm text-gray-400">© 2025 Juyi CHR Supply Chain Management.</p>
        </div>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = (context?.params && context.params.id) || (context?.resolvedUrl ? context.resolvedUrl.split('/').pop() : null);
  const product = id ? (products.find(p => p && p.id === id) || null) : null;
  return {
    props: { product }
  };
}
