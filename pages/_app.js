import '../styles/globals.css'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState('zh')
  return <Component {...pageProps} lang={lang} setLang={setLang} />
}

export default MyApp
