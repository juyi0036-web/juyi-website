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
  {
    id: "armoire-positive",
    categorySlug: "froid",
    subCategorySlug: "armoires-refrigerees", // 必须对应 categories.js
    name: "Armoire Positive 700L Inox",
    description: "Froid ventilé, groupe tropicalisé (+43°C). Intérieur compatible GN 2/1.",
    image: "/products/petrin-test.jpg", // 暂时先用这张图占位
    specs: {
      "Volume": "700 Litres",
      "Température": "-2°C / +8°C",
      "Gaz": "R290 (Écologique)"
    }
  }
];
