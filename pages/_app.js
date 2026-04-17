import '../styles/globals.css'
import { useState } from 'react'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState('zh')
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  return (
    <>
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}
          </Script>
        </>
      )}
      <Component {...pageProps} lang={lang} setLang={setLang} />
    </>
  )
}

export default MyApp
