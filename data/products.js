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

  // 2. 不锈钢工作台 (Inox -> Tables Inox)
  {
    id: "table-inox-180",
    categorySlug: "inox-mobilier",
    subCategorySlug: "tables-inox", // 必须对应 categories.js
    name: "Table Centrale Inox 1800mm",
    description: "Table de préparation robuste en inox alimentaire. Idéale pour laboratoire de pâtisserie.",
    image: "/products/petrin-test.jpg", // 暂时先用这张图占位
    specs: {
      "Dimensions": "1800 x 700 x 850 mm",
      "Matériau": "Inox AISI 304",
      "Étagère": "Oui, basse renforcée"
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
    id: "moulder-450",
    categorySlug: "boulangerie-patisserie",
    subCategorySlug: "diviseuses-faconneuses",
    name: {
      fr: "Façonneuse à pain 450",
      en: "Bread moulder 450",
      es: "Formadora de pan 450"
    },
    description: {
      fr: "Rouleaux réglables, convoyeur 450 mm. Idéale pour baguettes et pains.",
      en: "Adjustable rollers, 450 mm conveyor. Ideal for baguettes and loaves.",
      es: "Rodillos ajustables, cinta de 450 mm. Ideal para baguettes y panes."
    },
    image: "/products/petrin-test.jpg",
    specs: {
      "Largeur bande": "450 mm",
      "Épaisseur laminage": "2–30 mm",
      "Puissance": "1.1 kW",
      "Voltage": "220V / 50Hz",
      "Dimensions": "800 x 700 x 1200 mm",
      "Poids": "180 kg"
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
      "/products/chambre de fermatation-02.jpg",
      "/products/chambre de fermatation-01.jpg"
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
    id: "etagere-murale-1200",
    categorySlug: "inox-mobilier",
    subCategorySlug: "rangements",
    name: {
      fr: "Étagère murale inox 1200",
      en: "Wall shelf stainless 1200",
      es: "Estante mural inox 1200"
    },
    description: {
      fr: "Inox 304, renforts soudés, dosseret, charge 80 kg.",
      en: "304 stainless, welded reinforcements, backsplash, 80 kg load.",
      es: "Inox 304, refuerzos soldados, alzaprimas, carga 80 kg."
    },
    image: "/products/petrin-test.jpg",
    specs: {
      "Dimensions": "1200 x 300 x 300 mm",
      "Matériau": "Inox 304",
      "Charge": "80 kg",
      "Épaisseur": "1.2 mm"
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
    id: "friteuse-double-2x16l",
    categorySlug: "chaud",
    subCategorySlug: "friteuses",
    name: "Friteuse double 2x16L",
    description: "Cuves indépendantes, robinet de vidange, inox 304, chauffage rapide.",
    image: "/products/petrin-test.jpg",
    specs: {
      "Capacité": "2 x 16 L",
      "Puissance": "2 x 6 kW",
      "Alimentation": "380V",
      "Température": "50–200°C"
    }
  },
  {
    id: "evier-double-1200",
    categorySlug: "inox-mobilier",
    subCategorySlug: "plonges",
    name: "Plonge double 1200mm",
    description: "Bacs profonds, dosseret anti-éclaboussures, structure en inox AISI 304.",
    image: "/products/petrin-test.jpg",
    specs: {
      "Dimensions": "1200 x 600 x 850 mm",
      "Matériau": "Inox 304",
      "Bacs": "2"
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
      "/products/meuble bas-3-01.jpg",
      "/products/meuble bas-3-02.jpg"
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
      "/products/moules-01.jpg",
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
      "/products/italian-pizza-oven-01.jpg",
      "/products/italian-pizza-oven.jpg"
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
];
