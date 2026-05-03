import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { message, history, systemPrompt } = req.body;

  // Try Gemini API first
  const geminiApiKey = process.env.GEMINI_API_KEY;
  
  if (geminiApiKey) {
    try {
      const genAI = new GoogleGenerativeAI(geminiApiKey);
      const model = genAI.getGenerativeModel({ 
        model: 'gemini-pro',
        systemInstruction: systemPrompt
      });

      // Convert history to Gemini format
      const chatHistory = (history || []).slice(1).map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      const chat = model.startChat({ history: chatHistory });
      const result = await chat.sendMessage(message);
      const response = result.response.text();

      return res.status(200).json({ response });
    } catch (error) {
      console.error('Gemini API error:', error);
      // Fall through to fallback
    }
  }

  // Fallback: Use HuggingFace Inference API (free)
  const hfToken = process.env.HUGGINGFACE_API_KEY;
  
  if (hfToken) {
    try {
      const response = await fetch(
        'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${hfToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            inputs: `<s>[INST] ${systemPrompt}\n\nUser: ${message} [/INST]`,
            parameters: {
              max_new_tokens: 500,
              temperature: 0.7,
              return_full_text: false
            }
          })
        }
      );

      if (response.ok) {
        const data = await response.json();
        const aiResponse = data[0]?.generated_text || '';
        return res.status(200).json({ response: aiResponse });
      }
    } catch (error) {
      console.error('HuggingFace API error:', error);
    }
  }

  // Final fallback: Rule-based responses
  const fallbackResponse = getRuleBasedResponse(message);
  return res.status(200).json({ response: fallbackResponse });
}

function getRuleBasedResponse(message) {
  const msg = message.toLowerCase();
  
  // Equipment inquiries
  if (msg.includes('équipement') || msg.includes('equipment') || msg.includes('matériel')) {
    return `Nous proposons 4 catégories d'équipements CHR :\n\n1. **Boulangerie & Pâtisserie**\n   - Pétrins spirale (50L à 300L)\n   - Diviseuses, façonneuses\n   - Laminoirs, trancheuses\n\n2. **Fours & Ligne Chaude**\n   - Fours rotatifs et à soles\n   - Lignes chaudes\n   - Équipements de maintien\n\n3. **Espace & Hygiène**\n   - Tables inox, éviers\n   - Lave-vaisselle\n   - Chariots et échelles\n\n4. **Froid & Glace**\n   - Armoires réfrigérées\n   - Chambres froides\n   - Vitrines pâtissières\n\nQuelle catégorie vous intéresse ?`;
  }
  
  // Price inquiries
  if (msg.includes('prix') || msg.includes('price') || msg.includes('coût') || msg.includes('combien')) {
    return `Nos prix sont les **prix directs usine** sans aucune marge produit.\n\n💰 **Informations tarifaires :**\n- Montant minimum de commande : **10 000 USD**\n- Nous facturons uniquement des **frais de service** (clairs et transparents)\n- Les prix varient selon les équipements et quantités\n\nPour obtenir un devis précis, puis-je connaître :\n1. Votre entreprise\n2. Les équipements recherchés\n3. Les quantités souhaitées\n\nSouhaitez-vous commencer une demande de devis ?`;
  }
  
  // EU regulations
  if (msg.includes('réglementation') || msg.includes('regulation') || msg.includes('norme') || msg.includes('2026') || msg.includes('ce ') || msg.includes('haccp')) {
    return `🇪🇺 **Réglementations UE 2026 - Points Clés :**\n\n**1. Interdiction de certains réfrigérants :**\n- R-404A (PRG 3922) → Interdit\n- R-507A (PRG 3985) → Interdit\n- Alternatives : R-290, R-600a, R-744\n\n**2. Nouveaux labels énergétiques :**\n- Échelle A à G (plus stricte)\n- Minimum classe E pour réfrigération\n- Minimum classe C pour fours\n\n**3. Nos équipements sont conformes :**\n✅ Certifiés CE\n✅ Conception HACCP\n✅ Éco-conception & RoHS\n✅ Fluides à faible PRG\n\nQuel aspect vous concerne le plus ?`;
  }
  
  // Contact information
  if (msg.includes('contact') || msg.includes('email') || msg.includes('téléphone') || msg.includes('whatsapp') || msg.includes('appeler')) {
    return `📞 **Nos coordonnées :**\n\n📧 **Email :** contact@juyi-chr.com\n📱 **WhatsApp :** +852 6972 4241\n⏰ **Disponibilité :** 9h00 - 18h00 (UTC+8)\n📍 **Siège :** Shanghai, Chine\n\n**Support export dédié 24/7**\n\nJe peux également collecter vos informations pour qu'un expert vous contacte. Souhaitez-vous que je commence ?`;
  }
  
  // Sourcing process
  if (msg.includes('processus') || msg.includes('process') || msg.includes('comment') || msg.includes('how') || msg.includes('étape')) {
    return `📋 **Notre processus de sourcing :**\n\n**1. Analyse des besoins**\n- Définition des spécifications\n- Identification des usines certifiées\n\n**2. Proposition & Devis**\n- Prix direct usine transparent\n- Détail des frais de service\n\n**3. Contrôle Qualité**\n- Inspection avant expédition\n- Tests de conformité CE/HACCP\n\n**4. Logistique**\n- Consolidation multi-usines\n- Gestion de l'expédition\n\n**5. Livraison**\n- Documents de conformité UE\n- Support après-vente\n\nDélai moyen : 30-45 jours\n\nPar quelle étape souhaitez-vous commencer ?`;
  }
  
  // Company info
  if (msg.includes('entreprise') || msg.includes('company') || msg.includes('qui') || msg.includes('who') || msg.includes('société')) {
    return `🏭 **JUYI CHR - Supply Chain Partner**\n\n**Notre mission :**\nÉliminer les intermédiaires coûteux dans l'achat d'équipements CHR en Chine.\n\n**Notre équipe :**\n- 6 experts, 100+ ans d'expérience combinée\n- Philippe Dubois (38 ans CHR)\n- Chen Wei (12 ans supply chain)\n- Support Europe & Asie\n\n**Nos chiffres :**\n- 200+ clients en Europe\n- 50+ usines certifiées\n- 15+ pays desservis\n- 98% satisfaction client\n\n**Notre différence :**\n✅ Zéro marge sur les produits\n✅ Prix direct usine (transparent)\n✅ Conformité UE garantie\n\nComment puis-je vous aider ?`;
  }
  
  // Default response
  return `Merci pour votre message ! Je suis l'assistant JUYI CHR.\n\nJe peux vous aider avec :\n\n📦 **Nos équipements** - Boulangerie, fours, inox, froid\n🇪🇺 **Normes UE 2026** - Réglementations et conformité\n💰 **Devis gratuit** - Prix directs usine\n📞 **Contact** - WhatsApp, email\n🏭 **Notre entreprise** - Équipe et processus\n\nQue souhaitez-vous savoir ?`;
}
