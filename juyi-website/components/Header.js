import Image from 'next/image'
import Link from 'next/link'

export default function Header({ lang, setLang }) {
  return (
    <header className="bg-white shadow-sm">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="JUYI" width={56} height={56} />
          <div>
            <div className="font-bold text-lg">{lang==='zh' ? 'juyi CHR 供应链管理' : 'Juyi CHR Supply Chain Management'}</div>
            <div className="text-sm text-gray-500">{lang==='zh' ? '专业的烘焙设备与一站式解决方案' : 'Professional bakery equipment & one-stop solutions'}</div>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/"><a className="text-sm hover:underline">{lang==='zh' ? '首页' : 'Home'}</a></Link>
          <Link href="/products"><a className="text-sm hover:underline">{lang==='zh' ? '产品' : 'Products'}</a></Link>
          <Link href="/about"><a className="text-sm hover:underline">{lang==='zh' ? '关于' : 'About'}</a></Link>
          <Link href="/contact"><a className="text-sm hover:underline">{lang==='zh' ? '联系我们' : 'Contact'}</a></Link>
          <div className="flex items-center gap-2 ml-4">
            <button onClick={()=>setLang('zh')} className={`px-2 py-1 rounded ${lang==='zh' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}>中文</button>
            <button onClick={()=>setLang('en')} className={`px-2 py-1 rounded ${lang==='en' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}>EN</button>
            <button onClick={()=>setLang('fr')} className={`px-2 py-1 rounded ${lang==='fr' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}>FR</button>
          </div>
        </nav>
      </div>
    </header>
  )
}
