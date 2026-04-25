import { useState, useEffect } from 'react';

const blogPosts = [
  {
    id: 'eu-2026-refrigerant-ban',
    slug: 'eu-2026-refrigerant-ban',
    date: '2026-04-20',
    category: 'Réglementation UE',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
    title: {
      fr: '2026 : L\'UE Interdit Certains Fluides Frigorigènes - Ce Que Vous Devez Savoir',
      en: '2026: EU Bans Certain Refrigerants - What You Need to Know',
      es: '2026: La UE Prohíbe Ciertos Refrigerantes - Lo Que Necesita Saber'
    },
    excerpt: {
      fr: 'À partir de 2026, l\'Union européenne impose de nouvelles restrictions sur les fluides frigorigènes à fort potentiel de réchauffement global (PRG). Découvrez comment cela affecte vos équipements de froid et comment vous préparer.',
      en: 'Starting 2026, the European Union imposes new restrictions on high Global Warming Potential (GWP) refrigerants. Learn how this affects your cold equipment and how to prepare.',
      es: 'A partir de 2026, la Unión Europea impone nuevas restricciones sobre refrigerantes con alto Potencial de Calentamiento Global (GWP). Descubra cómo afecta a sus equipos de frío y cómo prepararse.'
    },
    content: {
      fr: `
## Les Nouvelles Restrictions UE sur les Fluides Frigorigènes

### Contexte
Le Règlement (UE) 2024/573 sur les gaz à effet de serre fluorés (F-Gas) entre pleinement en vigueur en 2026. Ce règlement vise à réduire les émissions de gaz à effet de serre provenant des équipements de réfrigération et de climatisation.

### Points Clés

#### 1. Interdiction des Fluides à Haut PRG
- **R-404A** (PRG 3922) : Interdit dans les nouveaux équipements commerciaux de réfrigération
- **R-507A** (PRG 3985) : Interdit dans les nouvelles installations fixes
- **R-134a** (PRG 1430) : Limité dans certaines applications

#### 2. Fluides Alternatifs Recommandés
| Fluide | PRG | Application |
|--------|-----|-------------|
| R-290 (Propane) | 3 | Petites unités |
| R-600a (Isobutane) | 3 | Vitrines réfrigérées |
| R-744 (CO2) | 1 | Systèmes centraux |
| R-454C | 146 | Remplacement R-404A |

#### 3. Impact sur les Équipements CHR
Les équipements suivants sont concernés :
- **Armoires réfrigérées** : Doivent utiliser des fluides à PRG < 150
- **Chambres froides** : Transition progressive vers R-744 ou R-290
- **Vitrines pâtissières** : Nouveaux modèles avec R-600a
- **Machines à glace** : R-290 recommandé

### Calendrier de Mise en Œuvre
- **Janvier 2025** : Interdiction R-404A dans les nouveaux équipements
- **Janvier 2026** : Extension aux équipements de plus de 12kW
- **2030** : Réduction de 40% des quotas de HFC

### Comment Se Préparer ?

1. **Inventaire** : Listez vos équipements utilisant des fluides à haut PRG
2. **Planification** : Prévoyez le remplacement des équipements les plus anciens
3. **Sourcing** : Choisissez des équipements conformes dès maintenant
4. **Formation** : Formez vos équipes aux nouveaux fluides

### Notre Engagement
Chez JUYI CHR, tous nos équipements de réfrigération sont déjà conformes aux normes 2026. Nous proposons une gamme complète d'équipements utilisant des fluides à faible PRG.

**Contactez-nous** pour obtenir un devis sur des équipements conformes aux nouvelles normes UE.
      `,
      en: `
## New EU Restrictions on Refrigerants

### Background
The EU Regulation 2024/573 on fluorinated greenhouse gases (F-Gas) fully comes into effect in 2026. This regulation aims to reduce greenhouse gas emissions from refrigeration and air conditioning equipment.

### Key Points

#### 1. Ban on High GWP Refrigerants
- **R-404A** (GWP 3922): Banned in new commercial refrigeration equipment
- **R-507A** (GWP 3985): Banned in new fixed installations
- **R-134a** (GWP 1430): Limited in certain applications

#### 2. Recommended Alternative Refrigerants
| Refrigerant | GWP | Application |
|-------------|-----|-------------|
| R-290 (Propane) | 3 | Small units |
| R-600a (Isobutane) | 3 | Refrigerated display cases |
| R-744 (CO2) | 1 | Central systems |
| R-454C | 146 | R-404A replacement |

#### 3. Impact on CHR Equipment
The following equipment is affected:
- **Refrigerated cabinets**: Must use refrigerants with GWP < 150
- **Cold rooms**: Progressive transition to R-744 or R-290
- **Pastry display cases**: New models with R-600a
- **Ice machines**: R-290 recommended

### Implementation Timeline
- **January 2025**: R-404A banned in new equipment
- **January 2026**: Extended to equipment over 12kW
- **2030**: 40% reduction in HFC quotas

### How to Prepare?

1. **Inventory**: List your equipment using high GWP refrigerants
2. **Planning**: Plan replacement of oldest equipment
3. **Sourcing**: Choose compliant equipment now
4. **Training**: Train your teams on new refrigerants

### Our Commitment
At JUYI CHR, all our refrigeration equipment is already 2026 compliant. We offer a complete range of equipment using low GWP refrigerants.

**Contact us** to get a quote on equipment compliant with new EU standards.
      `,
      es: `
## Nuevas Restricciones de la UE sobre Refrigerantes

### Contexto
El Reglamento (UE) 2024/573 sobre gases fluorados de efecto invernadero (F-Gas) entra plenamente en vigor en 2026. Este reglamento tiene como objetivo reducir las emisiones de gases de efecto invernadero procedentes de equipos de refrigeración y aire acondicionado.

### Puntos Clave

#### 1. Prohibición de Refrigerantes con Alto GWP
- **R-404A** (GWP 3922): Prohibido en nuevos equipos comerciales de refrigeración
- **R-507A** (GWP 3985): Prohibido en nuevas instalaciones fijas
- **R-134a** (GWP 1430): Limitado en ciertas aplicaciones

#### 2. Refrigerantes Alternativos Recomendados
| Refrigerante | GWP | Aplicación |
|--------------|-----|------------|
| R-290 (Propano) | 3 | Unidades pequeñas |
| R-600a (Isobutano) | 3 | Vitrinas refrigeradas |
| R-744 (CO2) | 1 | Sistemas centrales |
| R-454C | 146 | Reemplazo R-404A |

#### 3. Impacto en Equipos CHR
Los siguientes equipos se ven afectados:
- **Armarios refrigerados**: Deben usar refrigerantes con GWP < 150
- **Cámaras frigoríficas**: Transición progresiva a R-744 o R-290
- **Vitrinas de pastelería**: Nuevos modelos con R-600a
- **Máquinas de hielo**: R-290 recomendado

### Calendario de Implementación
- **Enero 2025**: R-404A prohibido en nuevos equipos
- **Enero 2026**: Extensión a equipos de más de 12kW
- **2030**: Reducción del 40% en cuotas de HFC

### ¿Cómo Prepararse?

1. **Inventario**: Liste sus equipos que usan refrigerantes con alto GWP
2. **Planificación**: Planifique el reemplazo de los equipos más antiguos
3. **Abastecimiento**: Elija equipos conformes ahora
4. **Capacitación**: Capacite a sus equipos en nuevos refrigerantes

### Nuestro Compromiso
En JUYI CHR, todos nuestros equipos de refrigeración ya son conformes con las normas 2026. Ofrecemos una gama completa de equipos que utilizan refrigerantes con bajo GWP.

**Contáctenos** para obtener un presupuesto de equipos conformes con las nuevas normas de la UE.
      `
    }
  },
  {
    id: 'eu-2026-energy-standards',
    slug: 'eu-2026-energy-standards',
    date: '2026-04-15',
    category: 'Normes Énergétiques',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800',
    title: {
      fr: 'Normes Énergétiques UE 2026 : Nouveaux Labels et Exigences pour les Équipements CHR',
      en: 'EU 2026 Energy Standards: New Labels and Requirements for CHR Equipment',
      es: 'Estándares Energéticos UE 2026: Nuevos Etiquetados y Requisitos para Equipos CHR'
    },
    excerpt: {
      fr: 'L\'Union européenne renforce ses exigences énergétiques pour les équipements professionnels. Découvrez les nouveaux labels et comment choisir des équipements économes en énergie.',
      en: 'The European Union strengthens its energy requirements for professional equipment. Discover the new labels and how to choose energy-efficient equipment.',
      es: 'La Unión Europea refuerza sus requisitos energéticos para equipos profesionales. Descubra las nuevas etiquetas y cómo elegir equipos energéticamente eficientes.'
    },
    content: {
      fr: `
## Normes Énergétiques UE 2026 pour les Équipements CHR

### Le Nouveau Label Énergétique
Depuis mars 2021, l'UE a introduit un nouveau système d'étiquetage énergétique. En 2026, les exigences deviennent plus strictes.

### Changements Majeurs

#### 1. Échelle de Notation Révisée
- **Ancienne échelle** : A+++ à D
- **Nouvelle échelle** : A à G (plus stricte)
- Un appareil classé A+++ en 2020 pourrait être classé C en 2026

#### 2. Exigences Minimales
Les équipements suivants doivent atteindre au minimum la classe E :
- Fours professionnels
- Lave-vaisselle commerciaux
- Réfrigérateurs et congélateurs

#### 3. Impact sur les Coûts
| Classe | Consommation | Économie annuelle |
|--------|--------------|-------------------|
| A | -40% | 800-1200€ |
| B | -25% | 500-800€ |
| C | -10% | 200-400€ |
| D | Standard | Référence |

### Équipements Concernés

#### Fours Professionnels
- **Classe A** : Fours à convection avec récupération de chaleur
- **Classe B** : Fours à convection standards
- **Exigence 2026** : Minimum classe C

#### Lave-Vaisselle
- **Classe A** : Récupération de vapeur, filtration intelligente
- **Classe B** : Économie d'eau optimisée
- **Exigence 2026** : Minimum classe D

#### Réfrigération
- **Classe A** : Compresseurs à vitesse variable, éclairage LED
- **Classe B** : Isolation renforcée, joints optimisés
- **Exigence 2026** : Minimum classe E

### Comment Choisir ses Équipements ?

1. **Vérifiez le label** : Demandez toujours le classement énergétique
2. **Calculez le TCO** : Coût total de possession sur 10 ans
3. **Privilégiez la classe A** : Investissement rentabilisé en 2-3 ans
4. **Demandez les certifications** : CE, RoHS, Eco-Design

### Notre Gamme Économe
Tous nos équipements sont classés A ou B selon les nouvelles normes 2026. Nous fournissons les certificats et labels pour chaque produit.

**Demandez notre catalogue** avec les classements énergétiques détaillés.
      `,
      en: `
## EU 2026 Energy Standards for CHR Equipment

### The New Energy Label
Since March 2021, the EU has introduced a new energy labeling system. In 2026, requirements become stricter.

### Major Changes

#### 1. Revised Rating Scale
- **Old scale**: A+++ to D
- **New scale**: A to G (stricter)
- An A+++ rated appliance in 2020 might be rated C in 2026

#### 2. Minimum Requirements
The following equipment must reach at least class E:
- Professional ovens
- Commercial dishwashers
- Refrigerators and freezers

#### 3. Cost Impact
| Class | Consumption | Annual Savings |
|-------|------------|----------------|
| A | -40% | €800-1200 |
| B | -25% | €500-800 |
| C | -10% | €200-400 |
| D | Standard | Reference |

### Equipment Affected

#### Professional Ovens
- **Class A**: Convection ovens with heat recovery
- **Class B**: Standard convection ovens
- **2026 Requirement**: Minimum class C

#### Dishwashers
- **Class A**: Steam recovery, smart filtration
- **Class B**: Optimized water savings
- **2026 Requirement**: Minimum class D

#### Refrigeration
- **Class A**: Variable speed compressors, LED lighting
- **Class B**: Enhanced insulation, optimized seals
- **2026 Requirement**: Minimum class E

### How to Choose Your Equipment?

1. **Check the label**: Always ask for the energy rating
2. **Calculate TCO**: Total cost of ownership over 10 years
3. **Prioritize class A**: Investment payback in 2-3 years
4. **Request certifications**: CE, RoHS, Eco-Design

### Our Energy-Efficient Range
All our equipment is rated A or B according to 2026 standards. We provide certificates and labels for each product.

**Request our catalog** with detailed energy ratings.
      `,
      es: `
## Estándares Energéticos UE 2026 para Equipos CHR

### La Nueva Etiqueta Energética
Desde marzo de 2021, la UE ha introducido un nuevo sistema de etiquetado energético. En 2026, los requisitos se vuelven más estrictos.

### Cambios Mayores

#### 1. Escala de Calificación Revisada
- **Escala anterior**: A+++ a D
- **Nueva escala**: A a G (más estricta)
- Un electrodoméstico calificado A+++ en 2020 podría ser calificado C en 2026

#### 2. Requisitos Mínimos
Los siguientes equipos deben alcanzar al menos la clase E:
- Hornos profesionales
- Lavavajillas comerciales
- Refrigeradores y congeladores

#### 3. Impacto en Costos
| Clase | Consumo | Ahorro Anual |
|-------|---------|--------------|
| A | -40% | 800-1200€ |
| B | -25% | 500-800€ |
| C | -10% | 200-400€ |
| D | Estándar | Referencia |

### Equipos Afectados

#### Hornos Profesionales
- **Clase A**: Hornos de convección con recuperación de calor
- **Clase B**: Hornos de convección estándar
- **Requisito 2026**: Mínimo clase C

#### Lavavajillas
- **Clase A**: Recuperación de vapor, filtración inteligente
- **Clase B**: Ahorro de agua optimizado
- **Requisito 2026**: Mínimo clase D

#### Refrigeración
- **Clase A**: Compresores de velocidad variable, iluminación LED
- **Clase B**: Aislamiento mejorado, sellos optimizados
- **Requisito 2026**: Mínimo clase E

### ¿Cómo Elegir sus Equipos?

1. **Verifique la etiqueta**: Siempre solicite la calificación energética
2. **Calcule el TCO**: Costo total de propiedad a 10 años
3. **Priorice la clase A**: Inversión recuperada en 2-3 años
4. **Solicite certificaciones**: CE, RoHS, Eco-Design

### Nuestra Gama Energéticamente Eficiente
Todos nuestros equipos están clasificados A o B según las normas 2026. Proporcionamos certificados y etiquetas para cada producto.

**Solicite nuestro catálogo** con calificaciones energéticas detalladas.
      `
    }
  },
  {
    id: 'chr-automation-trends-2026',
    slug: 'chr-automation-trends-2026',
    date: '2026-04-10',
    category: 'Tendances',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=800',
    title: {
      fr: 'Automatisation CHR 2026 : Comment la Technologie Transforme la Restauration',
      en: 'CHR Automation 2026: How Technology is Transforming Catering',
      es: 'Automatización CHR 2026: Cómo la Tecnología Transforma la Restauración'
    },
    excerpt: {
      fr: 'Face à la pénurie de main-d\'œuvre et à l\'augmentation des coûts, l\'automatisation devient incontournable dans le secteur CHR. Découvrez les solutions qui révolutionnent l\'industrie.',
      en: 'Facing labor shortages and rising costs, automation is becoming essential in the CHR sector. Discover the solutions revolutionizing the industry.',
      es: 'Ante la escasez de mano de obra y el aumento de costos, la automatización se vuelve esencial en el sector CHR. Descubra las soluciones que revolucionan la industria.'
    },
    content: {
      fr: `
## L'Automatisation dans le Secteur CHR en 2026

### Un Secteur en Mutation
Le secteur CHR fait face à des défis majeurs :
- **Pénurie de main-d'œuvre** : 40% des postes non pourvus
- **Augmentation des coûts** : +15% en 2 ans
- **Exigences qualité** : Standards toujours plus élevés

### Solutions d'Automatisation

#### 1. Lignes de Production Automatisées
- **Pétrins spirale** : Capacité de 50 à 300L, minuterie programmable
- **Diviseuses** : Prision ±1g, cadence 30 pièces/cycle
- **Façonneuses** : Baguettes, boules, pains spéciaux

#### 2. Fours Intelligents
- **Programmation** : 100+ programmes de cuisson
- **Sondes** : Température cœur en temps réel
- **Connectivité** : Monitoring à distance via app

#### 3. Réfrigération Connectée
- **Alertes** : Notification en cas de panne
- **Historique** : Courbes de température
- **Maintenance** : Prédictive et préventive

### ROI de l'Automatisation

| Investissement | Économie | ROI |
|----------------|----------|-----|
| Pétrin automatique | 2h/jour | 18 mois |
| Four programmable | 15% énergie | 24 mois |
| Réfrigération connectée | 20% perte | 12 mois |

### Cas Client

**Boulangerie Artisanale - Paris**
- Investissement : 45,000€
- Économie annuelle : 28,000€
- ROI : 19 mois
- Production : +35%

### Comment Commencer ?

1. **Analysez vos besoins** : Quelles tâches chronophages ?
2. **Priorisez** : Commencez par le poste le plus critique
3. **Formez vos équipes** : L'automatisation assiste, ne remplace pas
4. **Mesurez les résultats** : Suivez les KPIs

### Notre Expertise
JUYI CHR vous accompagne dans votre transition vers l'automatisation. Nous proposons des solutions clé en main adaptées à votre taille et votre budget.

**Consultez notre gamme** d'équipements automatisés.
      `,
      en: `
## Automation in the CHR Sector in 2026

### A Sector in Transformation
The CHR sector faces major challenges:
- **Labor shortage**: 40% of positions unfilled
- **Rising costs**: +15% in 2 years
- **Quality demands**: Ever-higher standards

### Automation Solutions

#### 1. Automated Production Lines
- **Spiral mixers**: Capacity from 50 to 300L, programmable timer
- **Dividers**: Precision ±1g, rate 30 pieces/cycle
- **Shapers**: Baguettes, rounds, special breads

#### 2. Smart Ovens
- **Programming**: 100+ cooking programs
- **Probes**: Real-time core temperature
- **Connectivity**: Remote monitoring via app

#### 3. Connected Refrigeration
- **Alerts**: Failure notifications
- **History**: Temperature curves
- **Maintenance**: Predictive and preventive

### Automation ROI

| Investment | Savings | ROI |
|------------|---------|-----|
| Automatic mixer | 2h/day | 18 months |
| Programmable oven | 15% energy | 24 months |
| Connected refrigeration | 20% waste | 12 months |

### Client Case

**Artisan Bakery - Paris**
- Investment: €45,000
- Annual savings: €28,000
- ROI: 19 months
- Production: +35%

### How to Start?

1. **Analyze your needs**: Which time-consuming tasks?
2. **Prioritize**: Start with the most critical station
3. **Train your teams**: Automation assists, doesn't replace
4. **Measure results**: Track KPIs

### Our Expertise
JUYI CHR supports you in your automation transition. We offer turnkey solutions adapted to your size and budget.

**Browse our range** of automated equipment.
      `,
      es: `
## Automatización en el Sector CHR en 2026

### Un Sector en Transformación
El sector CHR enfrenta desafíos mayores:
- **Escasez de mano de obra**: 40% de puestos sin cubrir
- **Aumento de costos**: +15% en 2 años
- **Exigencias de calidad**: Estándares siempre más altos

### Soluciones de Automatización

#### 1. Líneas de Producción Automatizadas
- **Amasadoras espirales**: Capacidad de 50 a 300L, temporizador programable
- **Divisoras**: Precisión ±1g, ritmo 30 piezas/ciclo
- **Moldeadoras**: Baguettes, bolas, panes especiales

#### 2. Hornos Inteligentes
- **Programación**: 100+ programas de cocción
- **Sondas**: Temperatura corazón en tiempo real
- **Conectividad**: Monitoreo remoto vía app

#### 3. Refrigeración Conectada
- **Alertas**: Notificaciones de fallos
- **Historial**: Curvas de temperatura
- **Mantenimiento**: Predictivo y preventivo

### ROI de la Automatización

| Inversión | Ahorro | ROI |
|-----------|--------|-----|
| Amasadora automática | 2h/día | 18 meses |
| Horno programable | 15% energía | 24 meses |
| Refrigeración conectada | 20% desperdicio | 12 meses |

### Caso Cliente

**Panadería Artesanal - París**
- Inversión: 45,000€
- Ahorro anual: 28,000€
- ROI: 19 meses
- Producción: +35%

### ¿Cómo Empezar?

1. **Analice sus necesidades**: ¿Qué tareas consumen más tiempo?
2. **Priorice**: Comience por la estación más crítica
3. **Capacite a sus equipos**: La automatización asiste, no reemplaza
4. **Mida resultados**: Siga los KPIs

### Nuestra Experiencia
JUYI CHR le acompaña en su transición hacia la automatización. Ofrecemos soluciones llave en mano adaptadas a su tamaño y presupuesto.

**Consulte nuestra gama** de equipos automatizados.
      `
    }
  }
];

export default function BlogPost({ slug, locale }) {
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return <div>Article non trouvé</div>;
  }

  const title = post.title[locale] || post.title.fr;
  const excerpt = post.excerpt[locale] || post.excerpt.fr;
  const content = post.content[locale] || post.content.fr;

  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <img 
          src={post.image} 
          alt={title}
          className="w-full h-64 object-cover rounded-xl"
        />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
          {post.category}
        </span>
        <span className="text-gray-500 text-sm">{post.date}</span>
      </div>
      <h1 className="text-3xl font-bold text-brand-dark mb-4">{title}</h1>
      <p className="text-gray-600 text-lg mb-8">{excerpt}</p>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>').replace(/## /g, '<h2>').replace(/### /g, '<h3>').replace(/#### /g, '<h4>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\| (.*?) \|/g, '<tr><td>$1</td></tr>') }}
      />
    </article>
  );
}

export { blogPosts };
