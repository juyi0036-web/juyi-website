import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import BottomNav from '../components/BottomNav'

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState('zh')
  const router = useRouter()

  // 防止页面自动滚动到底部
  useEffect(() => {
    // 页面加载时滚动到顶部
    window.scrollTo(0, 0)
    
    // 路由变化时滚动到顶部
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }
    
    router.events.on('routeChangeComplete', handleRouteChange)
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])

  return (
    <>
      <Component {...pageProps} lang={lang} setLang={setLang} />
      <FloatingWhatsApp />
      <BottomNav />
    </>
  )
}

export default MyApp
