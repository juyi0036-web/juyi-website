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
  }
  ,
  {
    id: "four-soles-4x6",
    categorySlug: "chaud",
    subCategorySlug: "fours",
    name: "Four à soles 4x600",
    description: "Chambres indépendantes, vapeur intégrée, pierres réfractaires haute performance.",
    image: "/products/chariot.jpg",
    specs: {
      "Capacité": "4 x 600mm",
      "Puissance": "18 kW",
      "Alimentation": "380V",
      "Vapeur": "Oui"
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
    image: "/products/petrin-test.jpg",
    specs: {
      "Largeur utile": "520 mm",
      "Épaisseur minimale": "0.5 mm",
      "Puissance": "0.75 kW",
      "Voltage": "220V / 50Hz",
      "Dimensions": "2300 x 950 x 1200 mm",
      "Poids": "190 kg"
    }
  },
  {
    id: "chambre-fermentation-16n",
    categorySlug: "froid",
    subCategorySlug: "fermentation",
    name: {
      fr: "Chambre de fermentation 16 niveaux",
      en: "Proofing cabinet 16 levels",
      es: "Cámara de fermentación 16 niveles"
    },
    description: {
      fr: "Contrôle d'humidité et température, compatible plaques 600×400.",
      en: "Humidity and temperature control, fits 600×400 trays.",
      es: "Control de humedad y temperatura, compatible bandejas 600×400."
    },
    image: "/products/petrin-test.jpg",
    specs: {
      "Niveaux": "16",
      "Température": "+20°C / +45°C",
      "Humidité": "60%–95%",
      "Puissance": "2.0 kW",
      "Voltage": "220V / 50Hz",
      "Dimensions": "800 x 900 x 2000 mm"
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
    subCategorySlug: "friteuses-grills",
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
    id: "tour-patissier-2portes",
    categorySlug: "froid",
    subCategorySlug: "tours-patissiers",
    name: "Tour pâtissier 2 portes GN",
    description: "Plan de travail inox, tiroirs GN optionnels, groupe tropicalisé.",
    image: "/products/petrin-test.jpg",
    specs: {
      "Format": "GN 1/1",
      "Température": "-2°C / +8°C",
      "Voltage": "220V"
    }
  }
];
