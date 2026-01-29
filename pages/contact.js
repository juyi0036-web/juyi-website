import Head from 'next/head';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import { translations } from '../data/translations';
import { useState } from 'react';

export default function Contact() {
  const { locale } = useRouter();
  const t = translations[locale] || translations.fr;
  
  // Smart Agent State
  const [step, setStep] = useState(0); // 0: Start, 1: Category, 2: Volume, 3: Customization, 4: Contact, 5: Done
  const [formData, setFormData] = useState({
    category: '',
    volume: '',
    customization: '',
    contact: ''
  });

  const handleOption = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (field === 'category') {
      setStep(4); // Jump directly to contact form to capture lead
    } else {
      setStep(prev => prev + 1);
    }
  };

  const submitInquiry = (e) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setStep(5);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-brand-blue flex flex-col">
      <Head>
        <title>{t.contact_meta_title} | JUYI CHR</title>
        <meta name="description" content="Contact our supply chain experts for factory direct pricing." />
      </Head>

      <Navbar />

      {/* Hero Header */}
      <div className="bg-brand-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4 block">{t.contact_hero_badge}</span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl uppercase mb-6">
            {t.contact_hero_title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            {t.contact_hero_desc}
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Contact Info (Industrial Style) */}
          <div>
            <h2 className="text-2xl font-bold text-brand-blue mb-8 uppercase tracking-wide border-l-4 border-brand-orange pl-4">
              {t.contact_direct_title}
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 space-y-10">
              {/* WhatsApp */}
              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue text-white group-hover:bg-brand-orange transition duration-300">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.991c-.001 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.16 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893 0-3.18-1.238-6.167-3.486-8.416"/></svg>
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-brand-blue">{t.contact_whatsapp_title}</h3>
                  <a href="https://wa.me/85269724241" target="_blank" rel="noopener noreferrer" className="mt-1 block text-lg font-medium text-gray-600 group-hover:text-brand-orange transition no-underline">
                    +852 6972 4241
                  </a>
                  <p className="text-sm text-gray-400 mt-1">{t.contact_whatsapp_desc}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue text-white group-hover:bg-brand-orange transition duration-300">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-brand-blue">{t.contact_email_title}</h3>
                  <a href="mailto:contact@juyi-chr.com" className="mt-1 block text-lg font-medium text-gray-600 group-hover:text-brand-orange transition no-underline">
                    contact@juyi-chr.com
                  </a>
                  <p className="text-sm text-gray-400 mt-1">{t.contact_email_desc}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue text-white">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-bold text-brand-blue">{t.contact_hq_title}</h3>
                  <p className="mt-1 text-base text-gray-600">{t.contact_hq_loc}</p>
                  <p className="text-sm text-gray-400 mt-1">{t.contact_hq_desc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Smart Inquiry Agent (Auto-Reply Simulation) */}
          <div>
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-2xl font-bold text-brand-blue uppercase tracking-wide border-l-4 border-brand-orange pl-4">
                {t.contact_agent_title}
              </h2>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                {t.contact_agent_status}
              </span>
            </div>

            <div className="bg-white rounded-xl shadow-xl border border-brand-blue/10 overflow-hidden flex flex-col h-[600px]">
              {/* Chat Header */}
              <div className="bg-brand-blue p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">🤖</div>
                <div>
                  <div className="font-bold text-white">{t.contact_agent_name}</div>
                  <div className="text-xs text-brand-orange">{t.contact_agent_replies}</div>
                </div>
              </div>

              {/* Chat Window */}
              <div className="flex-1 bg-slate-50 p-6 overflow-y-auto space-y-6">
                
                {/* Intro Message */}
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-blue flex-shrink-0 flex items-center justify-center text-white text-xs">AI</div>
                  <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[80%]">
                    <p className="text-sm text-gray-600">
                      {t.contact_agent_intro}
                    </p>
                  </div>
                </div>

                {/* Step 0: Start Button */}
                {step === 0 && (
                   <div className="flex justify-end">
                      <button 
                        onClick={() => setStep(1)}
                        className="bg-brand-orange text-white px-6 py-2 rounded-full font-bold hover:bg-orange-700 transition shadow-md"
                      >
                        {t.contact_agent_btn_start}
                      </button>
                   </div>
                )}

                {/* Step 1: Category */}
                {step >= 1 && (
                  <>
                    <div className="flex justify-end mb-4">
                      <div className="bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-2xl rounded-tr-none">
                        <p className="text-sm font-bold">{t.contact_agent_yes}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 animate-fade-in-up">
                      <div className="w-8 h-8 rounded-full bg-brand-blue flex-shrink-0 flex items-center justify-center text-white text-xs">AI</div>
                      <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[80%]">
                        <p className="text-sm text-gray-600 font-bold mb-3">{t.contact_agent_q1}</p>
                        <div className="flex flex-wrap gap-2">
                          {(t.contact_agent_opts || []).map(opt => (
                            <button 
                              key={opt}
                              onClick={() => handleOption('category', opt)}
                              disabled={step > 1}
                              className={`text-xs px-3 py-2 rounded-lg border transition ${
                                formData.category === opt 
                                  ? 'bg-brand-blue text-white border-brand-blue' 
                                  : 'bg-white text-gray-600 border-gray-200 hover:border-brand-orange hover:text-brand-orange'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                 {/* Step 4: Contact Form (Now Step 2 in flow) */}
                 {step >= 4 && step < 5 && (
                  <>
                    <div className="flex justify-end mb-4">
                      <div className="bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-2xl rounded-tr-none">
                        <p className="text-sm">{formData.category}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 animate-fade-in-up">
                       <div className="w-8 h-8 rounded-full bg-brand-blue flex-shrink-0 flex items-center justify-center text-white text-xs">AI</div>
                       <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 w-full">
                          <p className="text-sm text-gray-600 mb-4">
                            {t.contact_agent_q4}
                          </p>
                          <form onSubmit={submitInquiry} className="space-y-3">
                            <input 
                              required 
                              type="text" 
                              placeholder={t.contact_form_name} 
                              className="w-full text-sm p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange"
                            />
                            <input 
                              required 
                              type="email" 
                              placeholder={t.contact_form_email} 
                              className="w-full text-sm p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange"
                            />
                            <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 rounded-lg hover:bg-brand-orange transition">
                              {t.contact_form_btn}
                            </button>
                          </form>
                       </div>
                    </div>
                  </>
                 )}

                 {/* Step 5: Success */}
                 {step === 5 && (
                   <div className="flex gap-4 animate-fade-in-up">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center text-white text-xs">✓</div>
                      <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-green-100 max-w-[90%]">
                        <p className="text-sm text-gray-600 font-bold">
                          {t.contact_agent_thanks}
                        </p>
                        <p className="text-xs text-gray-400 mt-2">{t.contact_agent_success_note}</p>
                      </div>
                   </div>
                 )}

              </div>
              
              {/* Chat Input (Disabled for demo mostly) */}
              <div className="p-4 bg-white border-t border-gray-100">
                <div className="relative">
                  <input 
                    type="text" 
                    disabled 
                    placeholder={step < 4 ? t.contact_agent_select_option : t.contact_agent_placeholder}
                    className="w-full bg-gray-50 text-sm pl-4 pr-10 py-3 rounded-full border border-gray-200 focus:outline-none cursor-not-allowed"
                  />
                  <button disabled className="absolute right-2 top-2 w-8 h-8 bg-brand-blue rounded-full text-white flex items-center justify-center opacity-50">
                    ↑
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 text-center">
            <p className="text-sm text-gray-400">
                &copy; 2026 Juyi CHR Supply Chain Management • Shanghai, China
            </p>
        </div>
      </footer>
    </div>
  );
}

