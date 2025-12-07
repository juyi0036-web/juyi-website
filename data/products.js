export const products = [
  // 1. 和面机 (Boulangerie -> Pétrins)
  {
    id: "petrin-50",
    categorySlug: "boulangerie-patisserie", 
    subCategorySlug: "petrins", // 必须对应 categories.js
    name: "Pétrin à Spirale 50kg - Série Gold",
    description: "Conçu pour les usages intensifs. Cuve en acier inoxydable 304, double vitesse, silence de fonctionnement.",
    image: "/products/petrin-test.jpg", 
    specs: { 
      "Capacité Farine": "50 kg",
      "Puissance": "4.5 kW",
      "Voltage": "380V Triphasé"
    }
  },
  {
    id: "diviseuse-30-140",
    categorySlug: "boulangerie-patisserie",
    subCategorySlug: "diviseuses",
    name: {
      fr: "Diviseuse (30–140 g)",
      en: "Dough divider (30–140 g)",
      es: "Divisora (30–140 g)"
    },
    description: {
      fr: "Diviseuse pour pâte, options manuelle et électrique. Paramètres basés sur des références standards.",
      en: "Dough divider with manual and electric options. Parameters based on standard references.",
      es: "Divisora de masa con opciones manual y eléctrica. Parámetros basados en referencias estándar."
    },
    images: [
      "/products/Diviseuse-01.jpg"
    ],
    specs: {
      "Poids des pâtons": "30–140 g / pièce",
      "Capacité": "30 pièces / cycle",
      "Dimensions": "530 × 460 × 1620 mm",
      "Voltage": "220V / 50Hz",
      "Puissance": "0.75 kW",
      "Matériau": "Inox 304",
      "Poids Net": "120 kg",
      "Poids Brut": "140 kg"
    }
  },
  {
    id: "echelle-a-bac",
    categorySlug: "inox-mobilier",
    subCategorySlug: "echelles-chariots",
    name: {
      fr: "Échelle à bac (simple/double)",
      en: "Basin rack (single/double)",
      es: "Carro con bac (simple/doble)"
    },
    description: {
      fr: "Chariot porte-bac pour ateliers. Version simple ou double, inox 201, tubes 25×25, 8 niveaux EN 600×400, 4 roues dont 2 avec freins.",
      en: "Basin holding trolley for workshop use. Single or double version, stainless 201, 25×25 tubes, 8 EN 600×400 levels, 4 wheels (2 brakes).",
      es: "Carro porta-bac para taller. Versión simple o doble, inox 201, tubos 25×25, 8 niveles EN 600×400, 4 ruedas (2 frenos)."
    },
    images: [
      "/products/echelle basin simple-01.jpg",
      "/products/echelle basin double-01.jpg"
    ],
    specs: {
      "Matériau": "Inox 201",
      "Tube": "25×25 mm, épaisseur 1.0 mm",
      "Épaisseur": "1.2 mm",
      "Plateaux": "8 × EN 600×400 mm",
      "Roues": "4 roues, 2 freins",
      "Dimensions (simple)": "660 × 470 × 1780 mm",
      "Poids Net (simple)": "18 kg",
      "Poids Brut (simple)": "22 kg",
      "Emballage (simple)": "1.80 × 0.715 × 0.087 m (0.111 CBM)",
      "Dimensions (double)": "810 × 610 × 1780 mm",
      "Poids Net (double)": "20 kg",
      "Poids Brut (double)": "24 kg",
      "Emballage (double)": "1.80 × 0.715 × 0.087 m (0.110 CBM)"
    }
  },

  // 2. 不锈钢工作台 (Inox -> Tables Inox)
  {
    id: "table-inox-gamme-pro",
    categorySlug: "inox-mobilier",
    subCategorySlug: "tables-inox",
    name: {
      fr: "Table inox (gamme pro, multi-dimensions)",
      en: "Stainless work table (pro range, multi-sizes)",
      es: "Mesa de trabajo inox (gama pro, múltiples tamaños)"
    },
    description: {
      fr: "Table de travail inox pour laboratoire. Plateau renforcé, étagère basse, pieds réglables. Options 201/304.",
      en: "Stainless prep table for lab use. Reinforced top, lower shelf, adjustable feet. 201/304 options.",
      es: "Mesa de trabajo inox para laboratorio. Encimera reforzada, estante inferior, patas ajustables. Opciones 201/304."
    },
    images: [
      "/products/inox-01.jpg",
      "/products/inox-02.jpg"
    ],
    specs: {
      "Dimensions": "1200×700×850 / 1500×700×850 / 2000×700×850 mm",
      "Matériau": "Inox 201 ou Inox 304",
      "Épaisseur": "Plan 1.2 mm (renforcé)",
      "Étagère": "Étagère basse pleine (renforcée)",
      "Tube": "Pieds Ø40 mm, traverses renforcées",
      "Charge (table)": "≥150 kg uniforme",
      "Options": "Avec/ sans dosseret; versions évier embouti disponibles"
    }
  },

  // 3. 冷柜 (Froid -> Armoires)
  // 已清空该子分类产品
  ,
  {
    id: "frigo-1door-gn",
    categorySlug: "froid",
    subCategorySlug: "armoires-refrigerees",
    name: {
      fr: "Armoire réfrigérée 1 porte (simple)",
      en: "Single-door refrigerated cabinet",
      es: "Armario refrigerado de 1 puerta"
    },
    description: {
      fr: "Armoire verticale 1 porte. Inox 304 interne/externe. Deux gammes de température disponibles (TN/BT). Compatible plaques EN 600×400.",
      en: "Upright single-door cabinet. 304 stainless inside/out. Two temperature ranges available (TN/BT). Fits EN 600×400 trays.",
      es: "Armario vertical de una puerta. Inox 304 interior/exterior. Dos rangos de temperatura disponibles (TN/BT). Compatible bandejas EN 600×400."
    },
    images: [
      "/products/frigo-1-01.jpg"
    ],
    specs: {
      "Dimension Interne": "624 × 700 × 1396 mm",
      "Température (TN)": "+2°C / +8°C",
      "Température (BT)": "-18°C / -22°C",
      "Voltage": "230V / 50Hz",
      "Réfrigérant": "R290",
      "Refroidissement": "Ventilé",
      "Matériau Interne": "Inox 304",
      "Matériau Externe": "Inox 304"
    }
  },
  {
    id: "frigo-2door-gn",
    categorySlug: "froid",
    subCategorySlug: "armoires-refrigerees",
    name: {
      fr: "Armoire réfrigérée 2 portes",
      en: "Two-door refrigerated cabinet",
      es: "Armario refrigerado de 2 puertas"
    },
    description: {
      fr: "Armoire verticale 2 portes. Inox 304 interne/externe. Deux gammes de température disponibles (TN/BT). Compatible plaques EN 600×400.",
      en: "Upright two-door cabinet. 304 stainless inside/out. Two temperature ranges available (TN/BT). Fits EN 600×400 trays.",
      es: "Armario vertical de dos puertas. Inox 304 interior/exterior. Dos rangos de temperatura disponibles (TN/BT). Compatible bandejas EN 600×400."
    },
    images: [
      "/products/frigo-2-01.jpg"
    ],
    specs: {
      "Dimension Interne": "1364 × 700 × 1396 mm",
      "Température (TN)": "+2°C / +8°C",
      "Température (BT)": "-18°C / -22°C",
      "Voltage": "230V / 50Hz",
      "Réfrigérant": "R290",
      "Refroidissement": "Ventilé",
      "Matériau Interne": "Inox 304",
      "Matériau Externe": "Inox 304"
    }
  },
  {
    id: "petrin-80-pro",
    categorySlug: "boulangerie-patisserie",
    subCategorySlug: "petrins",
    name: "Pétrin à Spirale 80kg - Série Pro",
    description: "Cuve inox 304, double vitesse, timer et inverseur. Conçu pour production continue.",
    image: "/products/chariot.jpg?v=20251205",
    specs: {
      "Capacité Farine": "80 kg",
      "Puissance": "6.0 kW",
      "Voltage": "380V Triphasé"
    }
  },
  {
    id: "blast-freezer-bl-e10",
    categorySlug: "froid",
    subCategorySlug: "cellules",
    name: {
      fr: "Cellule de surgélation BL-E10",
      en: "Blast Freezer BL-E10",
      es: "Abatidor de congelación BL-E10"
    },
    description: {
      fr: "Surgélation à -45°C, 10 niveaux GN 1/1 (EN 600×400), inox 304, sonde alimentaire, contrôleur 4 modes.",
      en: "-45°C blast freezing, 10 GN 1/1 levels (EN 600×400), stainless steel 304, food probe, four-mode controller.",
      es: "Congelación rápida a -45°C, 10 niveles GN 1/1 (EN 600×400), acero inoxidable 304, sonda alimentaria, controlador de 4 modos."
    },
    image: "/products/bl-e10-blast-freezer.jpg",
    specs: {
      "Modèle": "BL-E10",
      "Température": "-45°C",
      "Compresseur": "1.5 HP",
      "Capacité": "250 L",
      "Plateaux": "10 x GN 1/1",
      "Dimension Interne": "EN 600 x 400 mm",
      "Voltage": "220V / 50Hz",
      "Puissance": "2700 W",
      "Dimensions (Externe)": "800 x 870 x 1570 mm",
      "Poids": "230 kg",
      "Sonde Alimentaire": "Oui",
      "Contrôleur": "4 modes"
    }
  },
  
  {
    id: "four-hbfo-4003-zs3",
    categorySlug: "chaud",
    subCategorySlug: "fours",
    name: {
      fr: "Four à soles 3 niveaux avec chargeur",
      en: "Deck oven 3 decks with loader",
      es: "Horno de pisos 3 niveles con cargador"
    },
    description: {
      fr: "3 niveaux, 12 plaques 40×60, pierre rouge et vapeur, jusqu'à 300°C.",
      en: "3 decks, 12 trays 40×60, red stone and steam, up to 300°C.",
      es: "3 niveles, 12 bandejas 40×60, piedra roja y vapor, hasta 300°C."
    },
    images: [
      "/products/four-01.jpg"
    ],
    specs: {
      "Énergie": "Électrique",
      "Plateaux": "3 decks, 12 plaques",
      "Voltage": "380V",
      "Puissance": "28.5 kW",
      "Taille des plaques": "400×600 mm",
      "Poids Net": "890 kg",
      "Poids Brut": "954 kg",
      "Dimensions": "W1400×D3400×H2200 mm",
      "Pierre": "Oui",
      "Vapeur": "Oui",
      "Chargeur": "Avec chargeur"
    }
  },
  {
    id: "four-4deck-electric-16trays",
    categorySlug: "chaud",
    subCategorySlug: "fours",
    name: {
      fr: "Four à soles 4 niveaux (Électrique)",
      en: "Deck oven 4 decks (Electric)",
      es: "Horno de pisos 4 niveles (Eléctrico)"
    },
    description: {
      fr: "4 niveaux, 16 plaques 40×60, 60 kW, vapeur & pierre, chargeur, démarrage automatique J+1.",
      en: "4 decks, 16 trays 40×60, 60 kW, steam & stone, loader, next-day auto start.",
      es: "4 niveles, 16 bandejas 40×60, 60 kW, vapor y piedra, cargador, encendido automático al día siguiente."
    },
    images: [
      "/products/four-04-01.jpg",
      "/products/four-04-02.jpg"
    ],
    specs: {
      "Énergie": "Électrique",
      "Plateaux": "4 decks, 16 plaques",
      "Voltage": "380V",
      "Puissance": "60 kW",
      "Taille des plaques": "400×600 mm",
      "Poids Net": "1900 kg",
      "Poids Brut": "1950 kg",
      "Dimensions": "2195 x 2830 x 2405 mm",
      "Pierre": "Oui",
      "Vapeur": "Oui (toutes les chambres)",
      "Chargeur": "Semi-automatique (levage manuel)",
      "Fonctions": "Pierre, chargeur à pain, vapeur tous niveaux, démarrage auto J+1"
    }
  },
  
  {
    id: "laminoir-520",
    categorySlug: "boulangerie-patisserie",
    subCategorySlug: "laminoirs",
    name: {
      fr: "Laminoir à pâte 520",
      en: "Dough sheeter 520",
      es: "Laminadora de masa 520"
    },
    description: {
      fr: "Table repliable, largeur utile 520 mm, vitesse variable.",
      en: "Foldable table, 520 mm working width, variable speed.",
      es: "Mesa abatible, ancho útil 520 mm, velocidad variable."
    },
    images: [
      "/products/laminoir-01.jpg",
      "/products/laminoir-02.jpg"
    ],
    specs: {
      "Largeur utile": "520 mm",
      "Épaisseur minimale": "0.5 mm",
      "Matériau": "Inox 304",
      "Rouleaux": "Inox 304",
      "Puissance": "0.75 kW",
      "Voltage": "380V / 50Hz / 3PH",
      "Dimensions": "2300 x 950 x 1200 mm",
      "Poids": "190 kg"
    }
  },
  {
    id: "chambre-fermentation-16n",
    categorySlug: "froid",
    subCategorySlug: "fermentation",
    name: {
      fr: "Chambre de fermentation pour pâte – 2 chariots (64 plateaux)",
      en: "Dough proofing chamber – 2 trolleys (64 trays)",
      es: "Cámara de fermentación de masa – 2 carros (64 bandejas)"
    },
    description: {
      fr: "Système de pulvérisation mousse, contrôleur numérique Taisheng. Chauffage Springfield, ventilateur EBM, contacteur Schneider.",
      en: "Foam spray system with Taisheng digital controller. Springfield heating, EBM fan, Schneider contactor.",
      es: "Sistema de pulverización de espuma con controlador digital Taisheng. Calefacción Springfield, ventilador EBM, contactor Schneider."
    },
    images: [
      "/products/chambre-de-fermatation-02.jpg",
      "/products/chambre-de-fermatation-01.jpg"
    ],
    specs: {
      "Capacité": "2 chariots",
      "Plateaux": "64 plateaux",
      "Dimensions": "1720 x 1240 x 2130 mm",
      "Puissance": "2800 W",
      "Voltage": "220V / 50Hz / 1 phase",
      "Poids Net": "223 kg",
      "Température": "Jusqu'à 38°C (sans compresseur)",
      "Contrôleur": "Numérique Taisheng",
      "Principaux composants": "Résistance chauffante Springfield; ventilateur EBM (Allemagne); contacteur Schneider"
    }
  },
  
  {
    id: "trancheuse-pain-450",
    categorySlug: "boulangerie-patisserie",
    subCategorySlug: "trancheuses",
    name: {
      fr: "Trancheuse à pain 450",
      en: "Bread slicer 450",
      es: "Cortadora de pan 450"
    },
    description: {
      fr: "Épaisseur réglable, grande sécurité, débit élevé.",
      en: "Adjustable slice thickness, high safety, high throughput.",
      es: "Espesor de corte ajustable, alta seguridad, alto rendimiento."
    },
    image: "/products/petrin-test.jpg",
    specs: {
      "Largeur max": "450 mm",
      "Épaisseur coupe": "8–16 mm",
      "Puissance": "0.75 kW",
      "Voltage": "220V / 50Hz",
      "Dimensions": "700 x 900 x 1200 mm",
      "Poids": "140 kg"
    }
  },
  {
    id: "batteur-20l-pro",
    categorySlug: "boulangerie-patisserie",
    subCategorySlug: "batteurs",
    name: "Batteur Mélangeur 20L - Pro",
    description: "3 vitesses, cuve inox 304, fouet/batteur/crochet inclus.",
    image: "/products/petrin-test.jpg",
    specs: {
      "Capacité": "20 L",
      "Puissance": "1.1 kW",
      "Voltage": "220V",
      "Accessoires": "3"
    }
  },
  
  
  {
    id: "evier-simple-1000",
    categorySlug: "inox-mobilier",
    subCategorySlug: "plonges",
    name: {
      fr: "Évier inox simple 1000mm",
      en: "Stainless steel sink (single) 1000mm",
      es: "Fregadero de acero inoxidable (una cubeta) 1000mm"
    },
    description: {
      fr: "Évier en acier inoxydable 304, bac profond avec dosseret, étagère basse renforcée.",
      en: "Stainless steel 304 sink, deep basin with backsplash, reinforced lower shelf.",
      es: "Fregadero de acero inoxidable 304, cuba profunda con salpicadero, estante inferior reforzado."
    },
    images: [
      "/products/evier.jpg"
    ],
    specs: {
      "Dimensions": "1000 × 600 × 850 mm",
      "Matériau": "Inox 304",
      "Bacs": "1",
      "Dosseret": "100 mm",
      "Épaisseur": "Plan 1.2 mm",
      "Étagère": "Étagère basse pleine",
      "Tube": "Pieds Ø40 mm",
      "Évacuation": "Ø50 mm, bonde incluse"
    }
  },
  {
    id: "chariot-20n-600x400",
    categorySlug: "inox-mobilier",
    subCategorySlug: "echelles-chariots",
    name: {
      fr: "Chariot pâtissier 20 niveaux (600×400)",
      en: "Pastry trolley 20 levels (600×400)",
      es: "Carro pastelero 20 niveles (600×400)"
    },
    description: {
      fr: "Inox 304, tubes 25×25, rails en L. 20 plaques 600×400. 4 roues, 2 freins.",
      en: "Stainless 304, 25×25 tubes, L-side rails. 20 trays 600×400. 4 wheels, 2 brakes.",
      es: "Acero inoxidable 304, tubos 25×25, carriles en L. 20 bandejas 600×400. 4 ruedas, 2 frenos."
    },
    image: "/products/chariot.jpg",
    specs: {
      "Dimensions": "460 x 636 x 1765 mm",
      "Inox": "Acier inoxydable 304",
      "Tube": "25×25 mm, épaisseur 0.9 mm",
      "Rails latéraux": "Forme L, épaisseur 1.2 mm",
      "Plateaux": "20 x EN 600×400 mm",
      "Roues": "4 roues, 2 freins",
      "Poids Net": "24 kg",
      "Poids Brut": "26.08 kg",
      "Emballage": "1.75×0.715×0.087 m (0.109 CBM)"
    }
  },
  {
    id: "repose-paton-inox",
    categorySlug: "inox-mobilier",
    subCategorySlug: "repose-paton",
    name: {
      fr: "Repose pâton inox",
      en: "Stainless dough resting rack",
      es: "Repose de masa en inox"
    },
    description: {
      fr: "Étagère de repos pour pâtons, structure inox 304, niveaux multiples pour plaques 600×400.",
      en: "Dough resting rack, 304 stainless frame, multiple levels for 600×400 trays.",
      es: "Estantería de reposo para masa, estructura inox 304, varios niveles para bandejas 600×400."
    },
    images: [
      "/products/repose paton-01.jpg?v=2",
      "/products/repose paton-02.jpg?v=2"
    ],
    specs: {
      "Modèle": "MB300 / MB300L",
      "Dimensions": "1610 × 1210 × 1200 mm",
      "Poids à vide": "317 kg",
      "Auges": "Standards, Larges",
      "Nombre d'augues totales": "33 / 26",
      "Longueur/largeur des auges": "136 × 14 cm (Std) / 136 × 16 cm (Large)",
      "Capacité pâtons 350g": "297 (Std) / 234 (Large)",
      "Capacité pâtons 550g": "264 (Std) / 208 (Large)",
      "Type d'alimentation": "230V Triphasé / 400V Triphasé",
      "Options": "Lampe UV germicide, extracteur d’air, commande au pied, auges tissu synthétique, auges silicone"
    }
  },
  {
    id: "echelle-basse-avec-dessus",
    categorySlug: "inox-mobilier",
    subCategorySlug: "echelles-chariots",
    name: {
      fr: "Échelle basse avec dessus",
      en: "Low rack with top",
      es: "Carro bajo con encimera"
    },
    description: {
      fr: "Chariot bas avec plateau supérieur. Inox 201, tubes 25×25, 9 niveaux EN 600×400, 4 roues dont 2 avec freins.",
      en: "Low trolley with top shelf. Stainless 201, 25×25 tubes, 9 levels EN 600×400, 4 wheels (2 brakes).",
      es: "Carro bajo con estante superior. Inox 201, tubos 25×25, 9 niveles EN 600×400, 4 ruedas (2 frenos)."
    },
    images: [
      "/products/echelle basse avec dessus-01.jpg?v=2",
      "/products/echelle basse avec dessus-02.jpg?v=2"
    ],
    specs: {
      "Dimensions": "660 × 460 × 875 mm",
      "Matériau": "Inox 201",
      "Tube": "25×25 mm, épaisseur 1.0 mm",
      "Épaisseur": "1.2 mm",
      "Plateaux": "9 × EN 600×400 mm",
      "Roues": "4 roues, 2 freins",
      "Poids Net": "12 kg",
      "Poids Brut": "15 kg",
      "Emballage": "0.80 × 0.90 × 0.87 m (0.626 CBM)"
    }
  },
  {
    id: "vitrine-refrigee-1500",
    categorySlug: "froid",
    subCategorySlug: "vitrines",
    name: "Vitrine réfrigérée 1.5m",
    description: "Éclairage LED, vitrage anti-buée, froid ventilé pour pâtisserie.",
    images: [
      "/products/vitrine-01.jpg",
      "/products/vitrine-02.jpg"
    ],
    specs: {
      "Longueur": "1500 mm",
      "Température": "+2°C / +8°C",
      "Réfrigérant": "R290"
    }
  },
  {
    id: "ligne-cuisine-modulaire-800",
    categorySlug: "chaud",
    subCategorySlug: "ligne-chaude",
    name: {
      fr: "Ligne de cuisine modulaire 800",
      en: "Modular cooking line 800",
      es: "Línea de cocina modular 800"
    },
    description: {
      fr: "Bloc de cuisson 800 mm en inox 304. Modules: friteuse électrique, bac de salage, fourneau 4 feux gaz avec four, plaque de cuisson, cuiseur à pâtes, élément neutre.",
      en: "800 mm stainless 304 cooking block. Modules: electric fryer, brine basin, 4-burner gas range with oven, griddle plate, pasta cooker, neutral element.",
      es: "Bloque de cocción de 800 mm en inox 304. Módulos: freidora eléctrica, cuba de salmuera, cocina de 4 fuegos a gas con horno, plancha, cocedor de pasta, elemento neutro."
    },
    images: [
      "/products/line-cuisine.jpg",
      "/products/line-cuisine-01.jpg"
    ],
    specs: {
      "Largeur de module": "800 mm (400 mm pour 1/2)",
      "Friteuse électrique": "B88F-EC, 12 kW ×2, 60–190°C, 2×23.8 L",
      "Bac de salage": "B84B-EC, 3 kW, 30–85°C",
      "Fourneau 4 feux (gaz)": "B88R-GE, 5 kW×2 + 7.5 kW×2, four 4.8 kW",
      "Plaque de cuisson": "B88G-EO, 9 kW, 50–300°C, zone 795×535",
      "Cuiseur à pâtes": "B84N-EC, 12 kW, 30–100°C, cuve 26 L, 2 paniers",
      "Élément neutre": "Inox 304",
      "Dimensions typiques": "800 × 800 × 850 mm (socle +70 mm)",
      "Alimentation": "AC3N380V (gaz pour fourneau)"
    }
  },
  
  {
    id: "meuble-bas-3",
    categorySlug: "froid",
    subCategorySlug: "tours-patissiers",
    name: {
      fr: "Meuble bas réfrigéré 3 portes GN",
      en: "Refrigerated low counter 3 doors GN",
      es: "Mueble bajo refrigerado 3 puertas GN"
    },
    description: {
      fr: "Comptoir bas 3 portes. Matériau interne/externe en inox 304.",
      en: "Three-door low refrigerated counter. Internal/external material 304 stainless.",
      es: "Mostrador bajo refrigerado de tres puertas. Material interno/externo inox 304."
    },
    images: [
      "/products/meuble-bas-3-01.jpg",
      "/products/meuble-bas-3-02.jpg"
    ],
    specs: {
      "Classification": "Chiller",
      "Température": "+2°C / +8°C",
      "Voltage": "230V / 50Hz",
      "Dimension Interne": "1455 × 680 × 589 mm",
      "Dimensions (Externe)": "2020 × 800 × 960 mm",
      "Volume": "635 L",
      "Poids Net": "132 kg",
      "Poids Brut": "150 kg",
      "Matériau Interne": "Inox 304",
      "Matériau Externe": "Inox 304"
    }
  },
  {
    id: "grille-inox-304-2tailles",
    categorySlug: "chaud",
    subCategorySlug: "friteuses",
    name: {
      fr: "Grille inox 304 (400×600 & 600×800)",
      en: "Stainless 304 wire rack (400×600 & 600×800)",
      es: "Rejilla inox 304 (400×600 y 600×800)"
    },
    description: {
      fr: "Grille pâtissière en inox 304, deux formats avec fils renforcés.",
      en: "304 stainless pastry wire rack, two sizes with reinforced wires.",
      es: "Rejilla pastelera de inox 304, dos tamaños con alambres reforzados."
    },
    images: [
      "/products/grill-01.jpg"
    ],
    specs: {
      "Matériau": "Inox 304",
      "Grille 304 400×600": "Bord 5.0 mm, fil 2.0 mm, pas 13 mm",
      "Grille 304 600×800": "Bord 6.0 mm, fil 2.4 mm, pas 25 mm"
    }
  }
  ,
  {
    id: "ampoules-comparatif",
    categorySlug: "chaud",
    subCategorySlug: "friteuses",
    name: {
      fr: "Ampoules transparentes (comparatif)",
      en: "Transparent bulbs (comparison)",
      es: "Bombillas transparentes (comparación)"
    },
    description: {
      fr: "Modèles A60, G45, ST22, T22; culots E27/E14; multiples voltages et puissances.",
      en: "A60, G45, ST22, T22 models; E27/E14 caps; multiple voltages and powers.",
      es: "Modelos A60, G45, ST22, T22; casquillos E27/E14; múltiples voltajes y potencias."
    },
    images: [
      "/products/ampoule.jpg"
    ],
    compare: {
      attributes: ["Dimensions", "Voltage", "Puissance", "Culot", "Transparence"],
      models: [
        { label: "A60", Dimensions: "60×106 mm", Voltage: ["24V", "230V"], Puissance: ["60W", "75W"], Culot: "E27", Transparence: "Transparent" },
        { label: "G45 (E27)", Dimensions: "45×70 mm", Voltage: ["24V", "230V"], Puissance: ["40W", "50W"], Culot: "E27", Transparence: "Transparent" },
        { label: "G45 (E14)", Dimensions: "45×72 mm", Voltage: ["230V"], Puissance: ["40W"], Culot: "E14", Transparence: "Transparent" },
        { label: "ST22", Dimensions: "22×50 mm", Voltage: ["230V"], Puissance: ["15W", "25W"], Culot: "E14", Transparence: "Transparent" },
        { label: "T22", Dimensions: "22×56 mm", Voltage: ["24V"], Puissance: ["25W"], Culot: "E14", Transparence: "Transparent" }
      ]
    }
  }
  ,
  {
    id: "four-convection-5-10",
    categorySlug: "chaud",
    subCategorySlug: "fours",
    name: {
      fr: "Four à convection (5/10 niveaux)",
      en: "Convection oven (5/10 levels)",
      es: "Horno de convección (5/10 niveles)"
    },
    description: {
      fr: "Four à convection pour plaques EN 600×400. Plage de température 25–300°C. Versions 5 ou 10 niveaux.",
      en: "Convection oven for EN 600×400 trays. Temperature range 25–300°C. Available in 5 or 10 levels.",
      es: "Horno de convección para bandejas EN 600×400. Rango de temperatura 25–300°C. Disponible en 5 o 10 niveles."
    },
    images: [
      "/products/four5-10-01.jpg"
    ],
    specs: {
      "Dimensions (Externe)": "738 × 850 × 620 mm",
      "Puissance": "5.4 kW",
      "Voltage": "380V / 50Hz",
      "Plateaux": "EN 600×400 mm",
      "Température": "25–300°C",
      "Capacité (5 niveaux)": "5 × EN 600×400 mm",
      "Capacité (10 niveaux)": "10 × EN 600×400 mm",
      "Dimensions (10 niveaux)": "1160 × 900 × 1430 mm",
      "Puissance (10 niveaux)": "18 kW",
      "Voltage (10 niveaux)": "380V / 50Hz",
      "Matériau": "Acier inoxydable 201",
      "Poids Net (5 niveaux)": "150 kg",
      "Poids Brut (5 niveaux)": "180 kg"
    }
  },
  {
    id: "moules-toast-box",
    categorySlug: "chaud",
    subCategorySlug: "moules",
    name: {
      fr: "Moules",
      en: "Moulds",
      es: "Moldes"
    },
    description: {
      fr: "Série de moules en acier aluminisé avec revêtement téflon double face. Nombreuses tailles disponibles. Formes et dimensions personnalisables selon besoin.",
      en: "Series of aluminized steel moulds with double-sided Teflon coating. Many sizes available. Shapes and dimensions customizable on request.",
      es: "Serie de moldes de acero aluminizado con recubrimiento de teflón a doble cara. Muchas talla disponibles. Formas y dimensiones personalizables a pedido."
    },
    images: [
      "/products/moules-01.jpg"
    ],
    specs: {
      "Matériau": "Acier aluminisé",
      "Revêtement": "Téflon (double face)",
      "Tailles sans couvercle": "160×90×70, 180×90×70, 200×90×70, 220×90×70 mm",
      "Tailles avec couvercle": "180×90×70, 250×90×70, 270×104×100, 290×106×110 mm"
    }
  }
  ,
  {
    id: "four-pizza-italien",
    categorySlug: "chaud",
    subCategorySlug: "fours",
    name: {
      fr: "Four à pizza italien",
      en: "Italian pizza oven",
      es: "Horno de pizza italiano"
    },
    description: {
      fr: "Four convoyeur pour pizza. Chauffe homogène, rendement stable, entretien facile.",
      en: "Conveyor pizza oven. Even heating, stable output, easy maintenance.",
      es: "Horno de pizza de cinta. Calentamiento uniforme, rendimiento estable, fácil mantenimiento."
    },
    images: [
      "/products/italian-pizza-oven-01.jpg"
    ],
    specs: {
      "Type": "Four convoyeur électrique",
      "Température": "RT–300°C",
      "Zone de chauffe (D×W)": "50 cm × 81.5 cm",
      "Alimentation": "380V 3PH 22A",
      "Consommation": "5.8–6.8 kWh",
      "Dimensions (machine)": "1817 × 1155 × 1140 mm",
      "Emballage": "2000 × 1280 × 890 mm",
      "Poids Brut": "350 kg"
    }
  }
  ,
  {
    id: "tissu-proofing-cloth",
    categorySlug: "chaud",
    subCategorySlug: "tissu",
    name: {
      fr: "Tissu à pâtons",
      en: "Proofing cloth",
      es: "Tela de fermentación"
    },
    description: {
      fr: "Tissu de panification pour repose/fermentation. Coutures tout autour, logo sur commande.",
      en: "Bakery proofing cloth for resting/proofing. Seams all around, logo on request.",
      es: "Tela de panificación para reposo/fermentación. Costuras alrededor, logo bajo pedido."
    },
    images: [
      "/products/tissu-01.jpg"
    ],
    specs: {
      "Dimensions": "Tailles multiples disponibles",
      "Matériau": "Lin 10A",
      "Coutures": "Tout autour",
      "Logo": "Sur commande",
      "Lavable": "Oui",
      "Température de lavage": "≤60°C",
      "Compatibilité": "Bacs à pâtons standards"
    }
  }
  ,
  {
    id: "fermentation-single-door",
    categorySlug: "froid",
    subCategorySlug: "fermentation",
    name: {
      fr: "Chambre de fermentation (simple porte)",
      en: "Proofing cabinet (single door)",
      es: "Cámara de fermentación (puerta simple)"
    },
    description: {
      fr: "Chambre de fermentation simple porte, chauffe homogène et contrôle stable.",
      en: "Single-door proofing cabinet with even heating and stable control.",
      es: "Cámara de fermentación de una puerta, calentamiento uniforme y control estable."
    },
    images: [
      "/products/fermentation-single-01.jpg"
    ],
    specs: {
      "Dimensions (Externe)": "780 × 1150 × 2105 mm",
      "Température": "15–38°C",
      "Réfrigération": "2–5°C",
      "Étages": "20 niveaux, espacement 70 mm",
      "Grilles": "600×800 (20 pièces)",
      "Compresseur": "SECOP SC18MLX",
      "Condenseur": "Beifeng, 4×10×380 mm",
      "Ventilateur": "EBM (origine Allemagne)",
      "Puissance": "2300 W (réfrigération)",
      "Matériau": "Acier inox 201 motif croisé, épaisseur 0.7 mm",
      "Matériau Interne": "Fond intérieur en inox 304",
      "Réfrigérant": "R404A",
      "Emballage": "123 × 82 × 125.5 cm"
    }
  }
  ,
  {
    id: "fermentation-double-door",
    categorySlug: "froid",
    subCategorySlug: "fermentation",
    name: {
      fr: "Chambre de fermentation (double porte)",
      en: "Proofing cabinet (double door)",
      es: "Cámara de fermentación (doble puerta)"
    },
    description: {
      fr: "Chambre de fermentation double porte, capacité accrue et contrôle stable.",
      en: "Double-door proofing cabinet with increased capacity and stable control.",
      es: "Cámara de fermentación de doble puerta, mayor capacidad y control estable."
    },
    images: [
      "/products/fermatation double-01.jpg"
    ],
    specs: {
      "Dimensions (Externe)": "1560 × 1150 × 2105 mm",
      "Température": "15–38°C",
      "Réfrigération": "2–5°C",
      "Étages": "40 niveaux, espacement 70 mm",
      "Grilles": "600×800 (40 pièces)",
      "Compresseur": "SECOP SC18MLX ×2",
      "Condenseur": "Beifeng, 4×10×380 mm",
      "Ventilateur": "EBM (origine Allemagne)",
      "Puissance": "4600 W (réfrigération)",
      "Matériau": "Acier inox 201 motif croisé, épaisseur 0.7 mm",
      "Matériau Interne": "Fond intérieur en inox 304",
      "Réfrigérant": "R404A",
      "Emballage": "180 × 120 × 130 cm"
    }
  },
  {
    id: "machine-a-glacons-50kg",
    categorySlug: "froid",
    subCategorySlug: "glace",
    name: {
      fr: "Machine à glaçons (cube)",
      en: "Ice maker (cube)",
      es: "Máquina de hielo (cubo)"
    },
    description: {
      fr: "Machine à glaçons professionnelle. Production quotidienne stable, bac de stockage intégré, refroidissement à air.",
      en: "Professional ice maker. Stable daily production, integrated storage bin, air-cooled.",
      es: "Máquina de hielo profesional. Producción diaria estable, depósito integrado, enfriamiento por aire."
    },
    images: [
      "/products/glacon-01.jpg"
    ],
    specs: {
      "Forme de glace": "Cube",
      "Production journalière": "50 kg/24h",
      "Stock de glace": "15 kg",
      "Refroidissement": "Air",
      "Réfrigérant": "R290",
      "Voltage": "220–240V / 50Hz",
      "Puissance": "300 W",
      "Dimensions (Externe)": "500 × 580 × 830 mm",
      "Poids Net": "35 kg",
      "Matériau Externe": "Inox 304"
    }
  },
  {
    id: "faconneuse-baguette-inox",
    categorySlug: "inox-mobilier",
    subCategorySlug: "faconneuses-baguettes",
    name: {
      fr: "Façonneuse baguette (2 cuves, 2 paniers)",
      en: "Baguette moulder (2 tanks, 2 baskets)",
      es: "Formadora de baguettes (2 cubas, 2 canastas)"
    },
    description: {
      fr: "Machine inox pour mise en forme de baguettes. Configuration 2 cuves 2 paniers.",
      en: "Stainless machine for baguette shaping. Configuration: 2 tanks, 2 baskets.",
      es: "Máquina de inox para formar baguettes. Configuración: 2 cubas, 2 canastas."
    },
    images: [
      "/products/facon-01.jpg"
    ],
    specs: {
      "Configuration": "2 cuves, 2 paniers",
      "Voltage": "220V / 380V",
      "Puissance": "0.75 kW",
      "Dimensions": "1000 × 970 × 1580 mm",
      "Poids": "302 kg",
      "Plage de poids de pâte": "50–1200 g / pièce"
    }
  }
  ,
  {
    id: "lave-vaisselle-700-800-1450",
    categorySlug: "inox-mobilier",
    subCategorySlug: "lave-vaisselle",
    name: {
      fr: "Lave-vaisselle industriel",
      en: "Industrial dishwasher",
      es: "Lavavajillas industrial"
    },
    description: {
      fr: "Tunnel/armoire de lavage professionnel, inox 304, cycle rapide, double circuit lavage/rinçage.",
      en: "Professional washing cabinet, stainless 304, fast cycle, dual wash/rinse circuits.",
      es: "Cabina de lavado profesional, acero inox 304, ciclo rápido, doble circuito de lavado/enjuague."
    },
    images: [
      "/products/lave vaisselle.jpg"
    ],
    specs: {
      "Dimensions": "700 × 800 × 1450 mm",
      "Voltage": "220V / 50Hz",
      "Puissance": "9.8 kW",
      "Puissance (lavage)": "3 kW",
      "Puissance (rinçage)": "6 kW",
      "Température de lavage": "55–60°C",
      "Température de rinçage": "82–90°C",
      "Vitesse": "60 pcs/h",
      "Consommation d'eau": "2.3 L/pc"
    }
  }
];
