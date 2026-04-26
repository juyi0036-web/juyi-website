const blogPosts = [
  {
    id: 'eu-2026-refrigerant-ban',
    slug: 'eu-2026-refrigerant-ban',
    date: '2026-04-20',
    readTime: '8 min',
    author: {
      name: 'Philippe Dubois',
      role: 'Fondateur & Expert CHR',
      avatar: '/team/philippe.jpg'
    },
    category: {
      label: 'Réglementation UE',
      color: 'red'
    },
    image: {
      main: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200',
      alt: 'Industrial refrigeration system with modern equipment'
    },
    title: {
      fr: 'F-Gas 2026 : Ce Que Chaque Professionnel CHR Doit Savoir Sur la Fin du R-404A',
      en: 'F-Gas 2026: What Every CHR Professional Must Know About the End of R-404A',
      es: 'F-Gas 2026: Lo Que Todo Profesional CHR Debe Saber Sobre el Fin del R-404A'
    },
    subtitle: {
      fr: 'Le règlement F-Gas entre en vigueur. Voici votre guide complet pour naviguer cette transition sans perdre en efficacité ni en budget.',
      en: 'The F-Gas regulation comes into effect. Here is your complete guide to navigate this transition without losing efficiency or budget.',
      es: 'El reglamento F-Gas entra en vigor. Aquí está su guía completa para navegar esta transición sin perder eficiencia ni presupuesto.'
    },
    content: {
      fr: `
<p class="text-lg text-gray-600 mb-8 leading-relaxed">
  Si vous géquez une boulangerie, un restaurant ou un hôtel en Europe, vous avez probablement entendu parler des nouvelles réglementations sur les fluides frigorigènes. Mais que signifient-elles concrètement pour votre activité ? Et surtout, comment vous préparer sans exploser votre budget ?
</p>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Le Contexte : Pourquoi Cette Réglementation ?</h2>

<p class="text-gray-600 mb-6 leading-relaxed">
  Le Règlement (UE) 2024/573, communément appelé <strong>"F-Gas 2.0"</strong>, est la réponse de l'Union européenne à l'urgence climatique. Les gaz fluorés utilisés dans la réfrigération commerciale ont un potentiel de réchauffement global (PRG) jusqu'à <strong>4 000 fois supérieur au CO2</strong>.
</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
  <p class="text-blue-800 font-medium">
    💡 <strong>Le saviez-vous ?</strong> Un seul kilogramme de R-404A libéré dans l'atmosphère a le même impact que 3 922 kg de CO2. L'équivalent de faire le tour de la Terre en voiture.
  </p>
</div>

<p class="text-gray-600 mb-6 leading-relaxed">
  L'objectif est clair : réduire de <strong>40%</strong> les quotas de HFC d'ici 2030, et de <strong>70%</strong> d'ici 2036. Pour les professionnels du CHR, cela signifie une transition inévitable vers des équipements utilisant des fluides à faible impact climatique.
</p>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Les Fluides Concernés : Ce Qui Change</h2>

<div class="overflow-x-auto my-8">
  <table class="w-full border-collapse">
    <thead>
      <tr class="bg-gray-100">
        <th class="border border-gray-200 px-4 py-3 text-left font-semibold">Fluide</th>
        <th class="border border-gray-200 px-4 py-3 text-left font-semibold">PRG</th>
        <th class="border border-gray-200 px-4 py-3 text-left font-semibold">Statut 2026</th>
        <th class="border border-gray-200 px-4 py-3 text-left font-semibold">Impact CHR</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-200 px-4 py-3">R-404A</td>
        <td class="border border-gray-200 px-4 py-3">3 922</td>
        <td class="border border-gray-200 px-4 py-3 text-red-600 font-medium">❌ Interdit</td>
        <td class="border border-gray-200 px-4 py-3">Armoires, chambres froides</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-200 px-4 py-3">R-507A</td>
        <td class="border border-gray-200 px-4 py-3">3 985</td>
        <td class="border border-gray-200 px-4 py-3 text-red-600 font-medium">❌ Interdit</td>
        <td class="border border-gray-200 px-4 py-3">Systèmes centraux</td>
      </tr>
      <tr>
        <td class="border border-gray-200 px-4 py-3">R-134a</td>
        <td class="border border-gray-200 px-4 py-3">1 430</td>
        <td class="border border-gray-200 px-4 py-3 text-orange-600 font-medium">⚠️ Limité</td>
        <td class="border border-gray-200 px-4 py-3">Petites unités</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Les Alternatives : Quels Fluides Choisir ?</h2>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-green-50 p-6 rounded-xl border border-green-200">
    <h3 class="text-lg font-bold text-green-800 mb-3">🌿 R-290 (Propane)</h3>
    <ul class="text-green-700 space-y-2">
      <li>• PRG : 3 (le plus bas)</li>
      <li>• Efficacité : Excellente</li>
      <li>• Applications : Petites unités, vitrines</li>
      <li>• ⚠️ Inflammable - formation requise</li>
    </ul>
  </div>
  <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
    <h3 class="text-lg font-bold text-blue-800 mb-3">❄️ R-744 (CO2)</h3>
    <ul class="text-blue-700 space-y-2">
      <li>• PRG : 1 (référence)</li>
      <li>• Efficacité : Bonne à haute pression</li>
      <li>• Applications : Systèmes centraux</li>
      <li>• ✅ Non inflammable</li>
    </ul>
  </div>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Impact sur Vos Équipements</h2>

<p class="text-gray-600 mb-6 leading-relaxed">
  Les équipements suivants sont directement concernés par cette transition :
</p>

<div class="space-y-4 my-8">
  <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
    <span class="text-2xl">❄️</span>
    <div>
      <h4 class="font-bold text-gray-900">Armoires réfrigérées</h4>
      <p class="text-gray-600 text-sm">Doivent utiliser des fluides à PRG < 150. Les nouveaux modèles sont déjà équipés de R-290 ou R-600a.</p>
    </div>
  </div>
  <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
    <span class="text-2xl">🏭</span>
    <div>
      <h4 class="font-bold text-gray-900">Chambres froides</h4>
      <p class="text-gray-600 text-sm">Transition progressive vers R-744 (CO2) pour les systèmes centraux. Investissement plus élevé mais ROI sur 5 ans.</p>
    </div>
  </div>
  <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
    <span class="text-2xl">🍰</span>
    <div>
      <h4 class="font-bold text-gray-900">Vitrines pâtissières</h4>
      <p class="text-gray-600 text-sm">Nouveaux modèles avec R-600a. Compact, efficace et silencieux.</p>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Calendrier de Mise en Œuvre</h2>

<div class="relative my-8">
  <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-200"></div>
  <div class="space-y-8">
    <div class="relative pl-10">
      <div class="absolute left-2.5 w-3 h-3 bg-orange-500 rounded-full"></div>
      <div class="font-bold text-orange-600">Janvier 2025</div>
      <div class="text-gray-600">Interdiction R-404A dans les nouveaux équipements < 12kW</div>
    </div>
    <div class="relative pl-10">
      <div class="absolute left-2.5 w-3 h-3 bg-orange-500 rounded-full"></div>
      <div class="font-bold text-orange-600">Janvier 2026</div>
      <div class="text-gray-600">Extension aux équipements de plus de 12kW</div>
    </div>
    <div class="relative pl-10">
      <div class="absolute left-2.5 w-3 h-3 bg-red-500 rounded-full"></div>
      <div class="font-bold text-red-600">2030</div>
      <div class="text-gray-600">Réduction de 40% des quotas de HFC</div>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Comment Vous Préparer ?</h2>

<div class="bg-orange-50 p-8 rounded-xl border border-orange-200 my-8">
  <h3 class="text-xl font-bold text-orange-800 mb-4">📋 Plan d'Action en 4 Étapes</h3>
  <ol class="space-y-4 text-orange-700">
    <li class="flex items-start gap-3">
      <span class="font-bold text-orange-500">1.</span>
      <div>
        <strong>Inventaire</strong> - Listez vos équipements utilisant des fluides à haut PRG
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="font-bold text-orange-500">2.</span>
      <div>
        <strong>Priorisation</strong> - Identifiez les équipements les plus anciens à remplacer en premier
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="font-bold text-orange-500">3.</span>
      <div>
        <strong>Sourcing</strong> - Choisissez des équipements conformes dès maintenant
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="font-bold text-orange-500">4.</span>
      <div>
        <strong>Formation</strong> - Formez vos équipes aux nouveaux fluides (sécurité, maintenance)
      </div>
    </li>
  </ol>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Notre Engagement</h2>

<p class="text-gray-600 mb-6 leading-relaxed">
  Chez JUYI CHR, nous avons anticipé cette transition. <strong>Tous nos équipements de réfrigération sont déjà conformes aux normes 2026.</strong> Nous proposons une gamme complète utilisant des fluides à faible PRG, avec la certification CE et la conformité HACCP garanties.
</p>

<div class="bg-gray-900 text-white p-8 rounded-xl my-8">
  <h3 class="text-xl font-bold mb-4">Besoin d'Équipements Conformes ?</h3>
  <p class="text-gray-300 mb-6">
    Notre équipe d'experts peut vous aider à choisir les équipements adaptés à vos besoins et à votre budget.
  </p>
  <a href="/contact" class="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition">
    Demander un Devis Gratuit →
  </a>
</div>

<p class="text-sm text-gray-500 mt-12">
  <strong>Sources :</strong> Règlement (UE) 2024/573, Commission européenne - F-Gas Regulation, European Environment Agency
</p>
      `,
      en: `
<p class="text-lg text-gray-600 mb-8 leading-relaxed">
  If you run a bakery, restaurant, or hotel in Europe, you've probably heard about the new refrigerant regulations. But what do they mean for your business? And most importantly, how can you prepare without breaking the bank?
</p>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">The Context: Why This Regulation?</h2>

<p class="text-gray-600 mb-6 leading-relaxed">
  Regulation (EU) 2024/573, commonly called <strong>"F-Gas 2.0"</strong>, is the European Union's response to the climate emergency. Fluorinated gases used in commercial refrigeration have a global warming potential (GWP) up to <strong>4,000 times higher than CO2</strong>.
</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
  <p class="text-blue-800 font-medium">
    💡 <strong>Did you know?</strong> A single kilogram of R-404A released into the atmosphere has the same impact as 3,922 kg of CO2. The equivalent of driving around the Earth.
  </p>
</div>

<p class="text-gray-600 mb-6 leading-relaxed">
  The goal is clear: reduce HFC quotas by <strong>40%</strong> by 2030, and by <strong>70%</strong> by 2036. For CHR professionals, this means an inevitable transition to equipment using low-impact climate fluids.
</p>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">The Affected Fluids: What Changes</h2>

<div class="overflow-x-auto my-8">
  <table class="w-full border-collapse">
    <thead>
      <tr class="bg-gray-100">
        <th class="border border-gray-200 px-4 py-3 text-left font-semibold">Refrigerant</th>
        <th class="border border-gray-200 px-4 py-3 text-left font-semibold">GWP</th>
        <th class="border border-gray-200 px-4 py-3 text-left font-semibold">2026 Status</th>
        <th class="border border-gray-200 px-4 py-3 text-left font-semibold">CHR Impact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-200 px-4 py-3">R-404A</td>
        <td class="border border-gray-200 px-4 py-3">3,922</td>
        <td class="border border-gray-200 px-4 py-3 text-red-600 font-medium">❌ Banned</td>
        <td class="border border-gray-200 px-4 py-3">Cabinets, cold rooms</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-200 px-4 py-3">R-507A</td>
        <td class="border border-gray-200 px-4 py-3">3,985</td>
        <td class="border border-gray-200 px-4 py-3 text-red-600 font-medium">❌ Banned</td>
        <td class="border border-gray-200 px-4 py-3">Central systems</td>
      </tr>
      <tr>
        <td class="border border-gray-200 px-4 py-3">R-134a</td>
        <td class="border border-gray-200 px-4 py-3">1,430</td>
        <td class="border border-gray-200 px-4 py-3 text-orange-600 font-medium">⚠️ Limited</td>
        <td class="border border-gray-200 px-4 py-3">Small units</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">The Alternatives: Which Refrigerants to Choose?</h2>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-green-50 p-6 rounded-xl border border-green-200">
    <h3 class="text-lg font-bold text-green-800 mb-3">🌿 R-290 (Propane)</h3>
    <ul class="text-green-700 space-y-2">
      <li>• GWP: 3 (lowest)</li>
      <li>• Efficiency: Excellent</li>
      <li>• Applications: Small units, display cases</li>
      <li>• ⚠️ Flammable - training required</li>
    </ul>
  </div>
  <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
    <h3 class="text-lg font-bold text-blue-800 mb-3">❄️ R-744 (CO2)</h3>
    <ul class="text-blue-700 space-y-2">
      <li>• GWP: 1 (reference)</li>
      <li>• Efficiency: Good at high pressure</li>
      <li>• Applications: Central systems</li>
      <li>• ✅ Non-flammable</li>
    </ul>
  </div>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Impact on Your Equipment</h2>

<p class="text-gray-600 mb-6 leading-relaxed">
  The following equipment is directly affected by this transition:
</p>

<div class="space-y-4 my-8">
  <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
    <span class="text-2xl">❄️</span>
    <div>
      <h4 class="font-bold text-gray-900">Refrigerated Cabinets</h4>
      <p class="text-gray-600 text-sm">Must use refrigerants with GWP < 150. New models already equipped with R-290 or R-600a.</p>
    </div>
  </div>
  <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
    <span class="text-2xl">🏭</span>
    <div>
      <h4 class="font-bold text-gray-900">Cold Rooms</h4>
      <p class="text-gray-600 text-sm">Progressive transition to R-744 (CO2) for central systems. Higher investment but ROI over 5 years.</p>
    </div>
  </div>
  <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
    <span class="text-2xl">🍰</span>
    <div>
      <h4 class="font-bold text-gray-900">Pastry Display Cases</h4>
      <p class="text-gray-600 text-sm">New models with R-600a. Compact, efficient and silent.</p>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Implementation Timeline</h2>

<div class="relative my-8">
  <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-200"></div>
  <div class="space-y-8">
    <div class="relative pl-10">
      <div class="absolute left-2.5 w-3 h-3 bg-orange-500 rounded-full"></div>
      <div class="font-bold text-orange-600">January 2025</div>
      <div class="text-gray-600">R-404A banned in new equipment < 12kW</div>
    </div>
    <div class="relative pl-10">
      <div class="absolute left-2.5 w-3 h-3 bg-orange-500 rounded-full"></div>
      <div class="font-bold text-orange-600">January 2026</div>
      <div class="text-gray-600">Extended to equipment over 12kW</div>
    </div>
    <div class="relative pl-10">
      <div class="absolute left-2.5 w-3 h-3 bg-red-500 rounded-full"></div>
      <div class="font-bold text-red-600">2030</div>
      <div class="text-gray-600">40% reduction in HFC quotas</div>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">How to Prepare?</h2>

<div class="bg-orange-50 p-8 rounded-xl border border-orange-200 my-8">
  <h3 class="text-xl font-bold text-orange-800 mb-4">📋 4-Step Action Plan</h3>
  <ol class="space-y-4 text-orange-700">
    <li class="flex items-start gap-3">
      <span class="font-bold text-orange-500">1.</span>
      <div>
        <strong>Inventory</strong> - List your equipment using high GWP refrigerants
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="font-bold text-orange-500">2.</span>
      <div>
        <strong>Prioritize</strong> - Identify the oldest equipment to replace first
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="font-bold text-orange-500">3.</span>
      <div>
        <strong>Source</strong> - Choose compliant equipment now
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="font-bold text-orange-500">4.</span>
      <div>
        <strong>Train</strong> - Train your teams on new refrigerants (safety, maintenance)
      </div>
    </li>
  </ol>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Our Commitment</h2>

<p class="text-gray-600 mb-6 leading-relaxed">
  At JUYI CHR, we've anticipated this transition. <strong>All our refrigeration equipment is already 2026 compliant.</strong> We offer a complete range using low GWP refrigerants, with CE certification and HACCP compliance guaranteed.
</p>

<div class="bg-gray-900 text-white p-8 rounded-xl my-8">
  <h3 class="text-xl font-bold mb-4">Need Compliant Equipment?</h3>
  <p class="text-gray-300 mb-6">
    Our expert team can help you choose equipment adapted to your needs and budget.
  </p>
  <a href="/contact" class="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition">
    Request a Free Quote →
  </a>
</div>

<p class="text-sm text-gray-500 mt-12">
  <strong>Sources:</strong> Regulation (EU) 2024/573, European Commission - F-Gas Regulation, European Environment Agency
</p>
      `,
      es: `
<p class="text-lg text-gray-600 mb-8 leading-relaxed">
  Si dirige una panadería, restaurante u hotel en Europa, probablemente ha oído hablar de las nuevas regulaciones sobre refrigerantes. Pero, ¿qué significan para su negocio? Y lo más importante, ¿cómo prepararse sin romper su presupuesto?
</p>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">El Contexto: ¿Por Qué Esta Regulación?</h2>

<p class="text-gray-600 mb-6 leading-relaxed">
  El Reglamento (UE) 2024/573, comúnmente llamado <strong>"F-Gas 2.0"</strong>, es la respuesta de la Unión Europea a la emergencia climática. Los gases fluorados utilizados en la refrigeración comercial tienen un potencial de calentamiento global (GWP) hasta <strong>4,000 veces superior al CO2</strong>.
</p>

<div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
  <p class="text-blue-800 font-medium">
    💡 <strong>¿Sabía que?</strong> Un solo kilogramo de R-404A liberado en la atmósfera tiene el mismo impacto que 3,922 kg de CO2. El equivalente a dar la vuelta al mundo en coche.
  </p>
</div>

<p class="text-gray-600 mb-6 leading-relaxed">
  El objetivo es claro: reducir las cuotas de HFC en un <strong>40%</strong> para 2030, y en un <strong>70%</strong> para 2036. Para los profesionales del CHR, esto significa una transición inevitable hacia equipos que utilizan fluidos de bajo impacto climático.
</p>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Los Fluidos Afectados: Qué Cambia</h2>

<div class="overflow-x-auto my-8">
  <table class="w-full border-collapse">
    <thead>
      <tr class="bg-gray-100">
        <th class="border border-gray-200 px-4 py-3 text-left font-semibold">Refrigerante</th>
        <th class="border border-gray-200 px-4 py-3 text-left font-semibold">GWP</th>
        <th class="border border-gray-200 px-4 py-3 text-left font-semibold">Estado 2026</th>
        <th class="border border-gray-200 px-4 py-3 text-left font-semibold">Impacto CHR</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-200 px-4 py-3">R-404A</td>
        <td class="border border-gray-200 px-4 py-3">3,922</td>
        <td class="border border-gray-200 px-4 py-3 text-red-600 font-medium">❌ Prohibido</td>
        <td class="border border-gray-200 px-4 py-3">Armarios, cámaras frigoríficas</td>
      </tr>
      <tr class="bg-gray-50">
        <td class="border border-gray-200 px-4 py-3">R-507A</td>
        <td class="border border-gray-200 px-4 py-3">3,985</td>
        <td class="border border-gray-200 px-4 py-3 text-red-600 font-medium">❌ Prohibido</td>
        <td class="border border-gray-200 px-4 py-3">Sistemas centrales</td>
      </tr>
      <tr>
        <td class="border border-gray-200 px-4 py-3">R-134a</td>
        <td class="border border-gray-200 px-4 py-3">1,430</td>
        <td class="border border-gray-200 px-4 py-3 text-orange-600 font-medium">⚠️ Limitado</td>
        <td class="border border-gray-200 px-4 py-3">Unidades pequeñas</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Las Alternativas: ¿Qué Refrigerantes Elegir?</h2>

<div class="grid md:grid-cols-2 gap-6 my-8">
  <div class="bg-green-50 p-6 rounded-xl border border-green-200">
    <h3 class="text-lg font-bold text-green-800 mb-3">🌿 R-290 (Propano)</h3>
    <ul class="text-green-700 space-y-2">
      <li>• GWP: 3 (el más bajo)</li>
      <li>• Eficiencia: Excelente</li>
      <li>• Aplicaciones: Unidades pequeñas, vitrinas</li>
      <li>• ⚠️ Inflamable - formación requerida</li>
    </ul>
  </div>
  <div class="bg-blue-50 p-6 rounded-xl border border-blue-200">
    <h3 class="text-lg font-bold text-blue-800 mb-3">❄️ R-744 (CO2)</h3>
    <ul class="text-blue-700 space-y-2">
      <li>• GWP: 1 (referencia)</li>
      <li>• Eficiencia: Buena a alta presión</li>
      <li>• Aplicaciones: Sistemas centrales</li>
      <li>• ✅ No inflamable</li>
    </ul>
  </div>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Impacto en Sus Equipos</h2>

<p class="text-gray-600 mb-6 leading-relaxed">
  Los siguientes equipos se ven directamente afectados por esta transición:
</p>

<div class="space-y-4 my-8">
  <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
    <span class="text-2xl">❄️</span>
    <div>
      <h4 class="font-bold text-gray-900">Armarios Refrigerados</h4>
      <p class="text-gray-600 text-sm">Deben usar refrigerantes con GWP < 150. Los nuevos modelos ya equipados con R-290 o R-600a.</p>
    </div>
  </div>
  <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
    <span class="text-2xl">🏭</span>
    <div>
      <h4 class="font-bold text-gray-900">Cámaras Frigoríficas</h4>
      <p class="text-gray-600 text-sm">Transición progresiva a R-744 (CO2) para sistemas centrales. Mayor inversión pero ROI a 5 años.</p>
    </div>
  </div>
  <div class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
    <span class="text-2xl">🍰</span>
    <div>
      <h4 class="font-bold text-gray-900">Vitrinas de Pastelería</h4>
      <p class="text-gray-600 text-sm">Nuevos modelos con R-600a. Compacto, eficiente y silencioso.</p>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Calendario de Implementación</h2>

<div class="relative my-8">
  <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-orange-200"></div>
  <div class="space-y-8">
    <div class="relative pl-10">
      <div class="absolute left-2.5 w-3 h-3 bg-orange-500 rounded-full"></div>
      <div class="font-bold text-orange-600">Enero 2025</div>
      <div class="text-gray-600">R-404A prohibido en nuevos equipos < 12kW</div>
    </div>
    <div class="relative pl-10">
      <div class="absolute left-2.5 w-3 h-3 bg-orange-500 rounded-full"></div>
      <div class="font-bold text-orange-600">Enero 2026</div>
      <div class="text-gray-600">Extensión a equipos de más de 12kW</div>
    </div>
    <div class="relative pl-10">
      <div class="absolute left-2.5 w-3 h-3 bg-red-500 rounded-full"></div>
      <div class="font-bold text-red-600">2030</div>
      <div class="text-gray-600">Reducción del 40% en cuotas de HFC</div>
    </div>
  </div>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">¿Cómo Prepararse?</h2>

<div class="bg-orange-50 p-8 rounded-xl border border-orange-200 my-8">
  <h3 class="text-xl font-bold text-orange-800 mb-4">📋 Plan de Acción en 4 Pasos</h3>
  <ol class="space-y-4 text-orange-700">
    <li class="flex items-start gap-3">
      <span class="font-bold text-orange-500">1.</span>
      <div>
        <strong>Inventario</strong> - Liste sus equipos que usan refrigerantes con alto GWP
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="font-bold text-orange-500">2.</span>
      <div>
        <strong>Priorizar</strong> - Identifique los equipos más antiguos para reemplazar primero
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="font-bold text-orange-500">3.</span>
      <div>
        <strong>Abastecimiento</strong> - Elija equipos conformes ahora
      </div>
    </li>
    <li class="flex items-start gap-3">
      <span class="font-bold text-orange-500">4.</span>
      <div>
        <strong>Capacitación</strong> - Capacite a sus equipos en nuevos refrigerantes (seguridad, mantenimiento)
      </div>
    </li>
  </ol>
</div>

<h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Nuestro Compromiso</h2>

<p class="text-gray-600 mb-6 leading-relaxed">
  En JUYI CHR, hemos anticipado esta transición. <strong>Todos nuestros equipos de refrigeración ya son conformes con las normas 2026.</strong> Ofrecemos una gama completa que utiliza refrigerantes con bajo GWP, con certificación CE y cumplimiento HACCP garantizados.
</p>

<div class="bg-gray-900 text-white p-8 rounded-xl my-8">
  <h3 class="text-xl font-bold mb-4">¿Necesita Equipos Conformes?</h3>
  <p class="text-gray-300 mb-6">
    Nuestro equipo de expertos puede ayudarle a elegir los equipos adaptados a sus necesidades y presupuesto.
  </p>
  <a href="/contact" class="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition">
    Solicitar Presupuesto Gratis →
  </a>
</div>

<p class="text-sm text-gray-500 mt-12">
  <strong>Fuentes:</strong> Reglamento (UE) 2024/573, Comisión Europea - Regulación F-Gas, Agencia Europea de Medio Ambiente
</p>
      `
    }
  }
];

export default blogPosts;
