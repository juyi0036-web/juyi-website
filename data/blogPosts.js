import { useState, useEffect } from 'react';


const blogPosts = [
  {
    id: 'eu-2026-refrigerant-ban',
    slug: 'eu-2026-refrigerant-ban',
    date: '2026-04-20',
    category: { color: 'brand-orange', label: 'Réglementation UE' },
    image: { main: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200', alt: 'F-Gas 2026 Regulation - JUYI CHR' },
    title: {
      fr: '2026 : L'UE Interdit Certains Fluides Frigorigènes - Ce Que Vous Devez Savoir',
      en: '2026: EU Bans Certain Refrigerants - What You Need to Know',
      es: '2026: La UE Prohíbe Ciertos Refrigerantes - Lo Que Necesita Saber'
    },
    subtitle: {
      fr: 'La réglementation F-Gas 2026 impose de nouvelles restrictions sur les fluides frigorigènes à fort PRG. Découvrez les exigences et les nouvelles étiquettes A-G.',
      en: 'The F-Gas 2026 regulation imposes new restrictions on high-GWP refrigerants. Discover the requirements and the new A-G labels.',
      es: 'El reglamento F-Gas 2026 impone nuevas restricciones sobre refrigerantes de alto PCA. Descubra los requisitos y las nuevas etiquetas A-G.'
    },
    excerpt: {
      fr: 'À partir de 2026, l'Union européenne impose de nouvelles restrictions sur les fluides frigorigènes à fort potentiel de réchauffement global (PRG). Découvrez comment cela affecte vos équipements de froid et comment vous préparer.',
      en: 'Starting 2026, the European Union imposes new restrictions on high Global Warming Potential (GWP) refrigerants. Learn how this affects your cold equipment and how to prepare.',
      es: 'A partir de 2026, la Unión Europea impone nuevas restricciones sobre refrigerantes con alto Potencial de Calentamiento Global (GWP). Descubra cómo afecta a sus equipos de frío y cómo prepararse.'
    },
    author: { name: 'Équipe JUYI CHR', role: 'Expert CHR', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
    readTime: '8 min',
    content: {
      fr: `
## Normes Énergétiques UE 2026 pour les Équipements CHR

### Le Nouveau Label
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
Les équipements anciens peuvent nécessiter des investissements pour se conformer.

#### 4. Calendrier
- **2021** : Introduction du nouveau label
- **2026** : Exigences minimales en vigueur

### Notre Engagement
Nous aidons nos clients à choisir des équipements conformes.

**Contactez-nous** pour un audit gratuit.
      `,
      en: `
## EU 2026 Energy Standards for CHR Equipment

### The New Energy Label
Since March 2021, the EU has introduced a new energy labeling system. In 2026, the requirements become stricter.

### Major Changes

#### 1. Revised Rating Scale
- **Old scale** : A+++ to D
- **New scale** : A to G (stricter)
- An appliance rated A+++ in 2020 could be rated C in 2026

#### 2. Minimum Requirements
The following equipment must meet at least class E:
- Professional ovens
- Commercial dishwashers
- Refrigerators and freezers

#### 3. Cost Impact
Older equipment may require investments to comply.

#### 4. Timeline
- **2021** : Label introduction
- **2026** : Minimum requirements enforced

### Our Commitment
We help customers select compliant equipment.

**Contact us** for a free audit.
      `,
      es: `
## Normas Energéticas UE 2026 para Equipos CHR

### La Nueva Etiqueta Energética
Desde marzo de 2021, la UE introdujo un nuevo sistema de etiquetado energético. En 2026, los requisitos se vuelven más estrictos.

### Cambios Principales

#### 1. Escala de Calificación Revisada
- **Escala antigua** : A+++ a D
- **Nueva escala** : A a G (más estricta)
- Un electrodoméstico calificado A+++ en 2020 podría calificarse C en 2026

#### 2. Requisitos Mínimos
Los siguientes equipos deben cumplir al menos la clase E:
- Hornos profesionales
- Lavavajillas comerciales
- Refrigeradores y congeladores

#### 3. Impacto en Costos
El equipo más antiguo puede requerir inversiones para cumplir.

#### 4. Cronograma
- **2021** : Introducción de la etiqueta
- **2026** : Requisitos mínimos vigentes

### Nuestro Compromiso
Ayudamos a los clientes a seleccionar equipos conformes.

**Contáctenos** para una auditoría gratuita.
      `
    }
  },
  {
    id: 'eu-2026-energy-standards',
    slug: 'eu-2026-energy-standards',
    date: '2026-04-15',
    category: { color: 'brand-blue', label: 'Normes Énergétiques' },
    image: { main: 'https://images.unsplash.com/photo-1618556450994-a3963cdcfd1b?w=1200', alt: 'Article Normes Énergétiques - JUYI CHR' },
    title: {
      fr: 'F-Gas 2026 : Règlementation et Étiquettes A-G pour le CHR',
      en: 'F-Gas 2026: Regulation and A-G Labeling for CHR Equipment',
      es: 'F-Gas 2026: Regulación y Etiquetas A-G para Equipos CHR'
    },
    subtitle: {
      fr: "Le règlement F-Gas 2026 et l\'étiquette A-G redéfinissent les normes pour équipements CHR.",
      en: 'The F-Gas 2026 regulation and A-G labels redefine standards for CHR equipment.',
      es: 'El reglamento F-Gas 2026 y las etiquetas A-G redefinen las normas para equipos CHR.'
    },
    excerpt: {
      fr: "Le règlement F-Gas 2026 et l\'étiquette A-G redéfinissent les normes pour équipements CHR.",
      en: 'The F-Gas 2026 regulation and A-G labels redefine standards for CHR equipment.',
      es: 'El reglamento F-Gas 2026 y las etiquetas A-G redefinen las normas para equipos CHR.'
    },
    author: { name: 'Équipe JUYI CHR', role: 'Expert CHR', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
    readTime: '10 min',
    content: {
      fr: `
## Règlement F-Gas 2026 et Étiquetage A-G pour le CHR

### Contexte
La réglementation F-Gas 2026 impose des restrictions sur les fluides frigorigènes à fort GWP. Cet article explique les nouvelles étiquettes A-G et ce que cela signifie pour les équipements CHR.

### Points Clés

#### 1. Interdictions Programmées
- R-404A interdit depuis 2025
- R-507A interdit à partir de 2026
- R-134a interdit dans certains équipements

#### 2. Nouvelle Échelle A-G
Le système d'étiquetage évolue pour refléter l'efficacité énergétique et l'impact environnemental.

#### 3. Choix d'Équipements
Privilégiez les équipements utilisant des fluides naturels (CO2, hydrocarbures) ou à faible GWP.

### Conclusion
Anticipez ces changements pour rester conformes et optimiser vos coûts énergétiques.

**Contactez notre équipe** pour des conseils personnalisés.
      `,
      en: `
## F-Gas 2026 Regulation and A-G Labeling for CHR

### Background
The F-Gas 2026 regulation restricts high-GWP refrigerants. This article explains the new A-G labels and what it means for CHR equipment.

### Key Points

#### 1. Scheduled Bans
- R-404A banned since 2025
- R-507A banned from 2026
- R-134a banned in certain equipment

#### 2. New A-G Scale
The labeling system evolves to reflect energy efficiency and environmental impact.

#### 3. Equipment Choices
Favor equipment using natural refrigerants (CO2, hydrocarbons) or low-GWP fluids.

### Conclusion
Anticipate these changes to stay compliant and optimize energy costs.

**Contact our team** for personalized advice.
      `,
      es: `
## Regulación F-Gas 2026 y Etiquetas A-G para CHR

### Antecedentes
El reglamento F-Gas 2026 restringe los refrigerantes de alto GWP. Este artículo explica las nuevas etiquetas A-G y lo que significa para los equipos CHR.

### Puntos Clave

#### 1. Prohibiciones Programadas
- R-404A prohibido desde 2025
- R-507A prohibido desde 2026
- R-134a prohibido en ciertos equipos

#### 2. Nueva Escala A-G
El sistema de etiquetado evoluciona para reflejar la eficiencia energética y el impacto ambiental.

#### 3. Elección de Equipos
Favorezca equipos que utilicen refrigerantes naturales (CO2, hidrocarburos) o bajo GWP.

### Conclusión
Anticipe estos cambios para mantenerse conforme y optimizar costos energéticos.

**Contacte a nuestro equipo** para asesoramiento personalizado.
      `
    }
  }
];
export default blogPosts;
