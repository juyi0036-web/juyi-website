import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { translations } from '../data/translations';

const SYSTEM_PROMPT = `You are JUYI AI Assistant, a professional supply chain expert for CHR (Café-Hôtel-Restaurant) and bakery equipment.

Your role:
1. Help users find the right equipment for their needs
2. Answer questions about EU regulations (2026 refrigerant ban, energy standards)
3. Guide users through the inquiry process
4. Collect contact information for follow-up

Key information about JUYI CHR:
- Supply chain partner based in Shanghai, China
- Direct factory prices, zero markup on products
- Minimum order: $10,000 USD
- 200+ European clients, 50+ certified factories
- CE, HACCP, RoHS compliant equipment
- 24/7 export support via WhatsApp (+852 6972 4241) and email (contact@juyi-chr.com)

Equipment categories:
1. Bakery & Pastry: Spiral mixers, dividers, sheeters, bread slicers
2. Ovens & Hot Line: Rotary ovens, deck ovens, hot holding equipment
3. Space & Hygiene: Stainless steel tables, sinks, dishwashers
4. Refrigeration: Display cases, cold rooms, ice machines

EU 2026 Regulations:
- R-404A and R-507A refrigerants banned in new equipment
- New energy labels (A-G scale) with stricter requirements
- All JUYI equipment is already 2026 compliant

When the user wants to make an inquiry, collect:
1. Company name
2. Contact person name
3. Email address
4. Phone number (optional)
5. Equipment category
6. Specific requirements

Respond in the user's language. Be professional, helpful, and concise.`;

export default function SmartAssistant({ compact = false }) {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale] || translations.fr;
  
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    category: '',
    requirements: ''
  });
  const [collectingInquiry, setCollectingInquiry] = useState(false);
  const [inquiryStep, setInquiryStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Add welcome message
    const welcomeMsg = {
      role: 'assistant',
      content: t.assistant_welcome || "Bonjour ! Je suis l'assistant JUYI CHR. Comment puis-je vous aider aujourd'hui ? \n\nJe peux vous renseigner sur :\n- Nos équipements CHR & Boulangerie\n- Les réglementations UE 2026\n- Obtenir un devis gratuit\n- Notre processus de sourcing"
    };
    setMessages([welcomeMsg]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const callGeminiAPI = async (userMessage, chatHistory) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: chatHistory,
          systemPrompt: SYSTEM_PROMPT
        })
      });
      
      if (!response.ok) {
        throw new Error('API request failed');
      }
      
      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error calling API:', error);
      return getFallbackResponse(userMessage);
    }
  };

  const getFallbackResponse = (message) => {
    const msg = message.toLowerCase();
    
    if (msg.includes('prix') || msg.includes('price') || msg.includes('coût') || msg.includes('cost')) {
      return "Nos prix sont les prix directs usine sans marge. Le montant minimum de commande est de 10 000 USD. Pour obtenir un devis précis, puis-je connaître vos besoins spécifiques ?";
    }
    if (msg.includes('réfrigérant') || msg.includes('refrigerant') || msg.includes('froid') || msg.includes('cold')) {
      return "Tous nos équipements de réfrigération sont conformes aux normes UE 2026. Nous utilisons R-290, R-600a et R-744 qui sont les fluides recommandés. Quel type d'équipement de froid recherchez-vous ?";
    }
    if (msg.includes('énergie') || msg.includes('energy') || msg.includes('label')) {
      return "Nos équipements sont classés A ou B selon les nouvelles normes énergétiques UE 2026. Cela vous permet de réduire vos coûts d'exploitation de 25 à 40%. Souhaitez-vous en savoir plus ?";
    }
    if (msg.includes('contact') || msg.includes('email') || msg.includes('téléphone') || msg.includes('phone')) {
      return "Vous pouvez nous joindre :\n📧 contact@juyi-chr.com\n📱 WhatsApp: +852 6972 4241\n\nOu je peux collecter vos informations pour un suivi personnalisé. Souhaitez-vous que je commence ?";
    }
    if (msg.includes('devis') || msg.includes('quote') || msg.includes('prix')) {
      return "Je serais ravi de vous préparer un devis ! Pour commencer, j'ai besoin de quelques informations :\n\n1. Nom de votre entreprise\n2. Votre nom\n3. Votre email\n4. Catégorie d'équipement\n\nCommençons par le nom de votre entreprise ?";
    }
    
    return "Merci pour votre message. Je suis spécialisé dans les équipements CHR et la supply chain. Comment puis-je vous aider concrètement ? \n\nVous pouvez me demander sur :\n- Nos équipements\n- Les normes UE 2026\n- Obtenir un devis\n- Notre processus";
  };

  const handleInquiryCollection = (message) => {
    const steps = [
      { field: 'company', prompt: t.ask_company || "Quel est le nom de votre entreprise ?" },
      { field: 'name', prompt: t.ask_name || "Quel est votre nom ?" },
      { field: 'email', prompt: t.ask_email || "Quel est votre email ?" },
      { field: 'phone', prompt: t.ask_phone || "Quel est votre numéro de téléphone (optionnel) ? Tapez 'skip' pour passer." },
      { field: 'category', prompt: t.ask_category || "Quelle catégorie d'équipement vous intéresse ?\n1. Boulangerie & Pâtisserie\n2. Fours & Ligne Chaude\n3. Espace & Hygiène (Inox)\n4. Froid & Glace\n5. Autre" },
      { field: 'requirements', prompt: t.ask_requirements || "Décrivez vos besoins spécifiques (quantités, spécifications, budget) :" }
    ];

    if (inquiryStep < steps.length) {
      const currentStep = steps[inquiryStep];
      
      if (inquiryStep === 3 && message.toLowerCase() === 'skip') {
        setInquiryData(prev => ({ ...prev, phone: 'N/A' }));
      } else {
        setInquiryData(prev => ({ ...prev, [currentStep.field]: message }));
      }
      
      if (inquiryStep + 1 < steps.length) {
        setInquiryStep(inquiryStep + 1);
        return steps[inquiryStep + 1].prompt;
      } else {
        // All data collected, submit
        submitInquiry({ ...inquiryData, [currentStep.field]: message });
        return t.inquiry_thanks || "Merci ! Votre demande a été envoyée. Notre équipe vous contactera dans les 24 heures.";
      }
    }
    return null;
  };

  const submitInquiry = async (data) => {
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          data: {
            company: data.company,
            phone: data.phone,
            category: data.category,
            requirements: data.requirements
          }
        })
      });
      setSubmitted(true);
      setCollectingInquiry(false);
    } catch (error) {
      console.error('Error submitting inquiry:', error);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    // Add user message
    const newMessages = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);

    // Check if collecting inquiry
    if (collectingInquiry) {
      const response = handleInquiryCollection(userMessage);
      if (response) {
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      }
      setIsLoading(false);
      return;
    }

    // Check if user wants to start inquiry
    const msg = userMessage.toLowerCase();
    if (msg.includes('devis') || msg.includes('quote') || msg.includes('inquiry') || msg.includes('询价') || msg.includes('报价')) {
      setCollectingInquiry(true);
      setInquiryStep(0);
      const firstPrompt = t.ask_company || "Parfait ! Commençons votre demande de devis. Quel est le nom de votre entreprise ?";
      setMessages(prev => [...prev, { role: 'assistant', content: firstPrompt }]);
      setIsLoading(false);
      return;
    }

    // Call AI API
    const response = await callGeminiAPI(userMessage, newMessages);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickActions = [
    { label: t.quick_products || '📦 Nos Produits', message: t.quick_products_msg || "Quels équipements proposez-vous ?" },
    { label: t.quick_eu2026 || '🇪🇺 Normes UE 2026', message: t.quick_eu2026_msg || "Quelles sont les nouvelles normes UE 2026 ?" },
    { label: t.quick_quote || '💰 Demander un Devis', message: t.quick_quote_msg || "Je souhaite obtenir un devis" },
    { label: t.quick_contact || '📞 Nous Contacter', message: t.quick_contact_msg || "Comment vous contacter ?" }
  ];

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">
          {t.inquiry_success_title || "Demande Envoyée !"}
        </h3>
        <p className="text-green-600 mb-4">
          {t.inquiry_success_desc || "Notre équipe vous contactera dans les 24 heures."}
        </p>
        <button
          onClick={() => { setSubmitted(false); setMessages([messages[0]]); }}
          className="text-green-700 underline hover:no-underline"
        >
          {t.inquiry_again || "Envoyer une autre demande"}
        </button>
      </div>
    );
  }

  return (
    <div className={`${compact ? '' : 'bg-white rounded-2xl shadow-xl border border-gray-100'} flex flex-col`}>
      {/* Header */}
      {!compact && (
        <div className="bg-brand-blue text-white p-4 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-lg">🤖</div>
            <div>
              <h3 className="font-bold">{t.assistant_title || "Assistant JUYI CHR"}</h3>
              <p className="text-xs text-gray-300">{t.assistant_status || "En ligne • Répond instantanément"}</p>
            </div>
          </div>
        </div>
      )}

      {/* Messages */}
      <div className={`${compact ? 'h-64' : 'h-96'} overflow-y-auto p-4 space-y-4 bg-gray-50`}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
              msg.role === 'user' 
                ? 'bg-brand-orange text-white rounded-br-md' 
                : 'bg-white text-gray-800 shadow-sm rounded-bl-md'
            }`}>
              <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      {messages.length <= 1 && (
        <div className="px-4 py-2 bg-gray-50 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {quickActions.map((action, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInput(action.message);
                  setTimeout(() => handleSend(), 100);
                }}
                className="text-xs bg-white border border-gray-200 rounded-full px-3 py-1.5 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors"
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="p-4 border-t border-gray-100 bg-white rounded-b-2xl">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t.assistant_placeholder || "Tapez votre message..."}
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-orange focus:border-transparent transition text-sm"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="px-4 py-3 bg-brand-orange text-white rounded-xl hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">
          {t.assistant_powered || "Propulsé par l'IA • Réponse en quelques secondes"}
        </p>
      </div>
    </div>
  );
}
