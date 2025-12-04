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
    image: "/products/petrin-test.jpg",
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
    categorySlug: "boulangerie-patisserie",
    subCategorySlug: "fours",
    name: "Four à soles 4x600",
    description: "Chambres indépendantes, vapeur intégrée, pierres réfractaires haute performance.",
    image: "/products/petrin-test.jpg",
    specs: {
      "Capacité": "4 x 600mm",
      "Puissance": "18 kW",
      "Alimentation": "380V",
      "Vapeur": "Oui"
    }
  },
  {
    id: "batteur-20l-pro",
    categorySlug: "preparation",
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
    categorySlug: "preparation",
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
      fr: "Inox 201, tubes 25×25, rails en L. 20 plaques 600×400. Roues Ø125 avec pare-chocs, 2 freins.",
      en: "Stainless 201, 25×25 tubes, L-side rails. 20 trays 600×400. Ø125 wheels with bumpers, 2 brakes.",
      es: "Acero inoxidable 201, tubos 25×25, carriles en L. 20 bandejas 600×400. Ruedas Ø125 con parachoques, 2 frenos."
    },
    image: "/products/petrin-test.jpg",
    specs: {
      "Dimensions": "460 x 636 x 1765 mm",
      "Inox": "Acier inoxydable 201",
      "Tube": "25×25 mm, épaisseur 0.9 mm",
      "Rails latéraux": "Forme L, longueur 22 mm, épaisseur 1.2 mm",
      "Plateaux": "20 x EN 600×400 mm",
      "Roues": "4 roues, 2 freins, Ø125 mm, 4 pare-chocs",
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
    image: "/products/petrin-test.jpg",
    specs: {
      "Longueur": "1500 mm",
      "Température": "+2°C / +8°C",
      "Réfrigérant": "R290"
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
