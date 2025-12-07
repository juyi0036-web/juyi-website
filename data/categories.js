export const categories = [
  {
    name: {
      fr: "Boulangerie (Magasin)",
      en: "Bakery Shop",
      es: "Panadería (Tienda)",
    },
    slug: "boulangerie-patisserie",
    subcategories: [
      { name: { fr: "Pétrins (Spirale/Fourche)", en: "Mixers (Spiral/Fork)", es: "Amasadoras (Espiral/Horquilla)" }, slug: "petrins" },
      { name: { fr: "Diviseuses & Façonneuses", en: "Dividers & Moulders", es: "Divisoras y Formadoras" }, slug: "diviseuses-faconneuses" },
      { name: { fr: "Laminoirs", en: "Sheeters", es: "Laminadoras" }, slug: "laminoirs" },
      { name: { fr: "Trancheuses à Pain", en: "Bread Slicers", es: "Cortadoras de pan" }, slug: "trancheuses" },
      { name: { fr: "Batteurs Mélangeurs", en: "Planetary Mixers", es: "Batidoras mezcladoras" }, slug: "batteurs" }
    ]
  },
  {
    name: {
      fr: "Fours & Ligne Chaude",
      en: "Ovens & Hot Line",
      es: "Hornos y Línea caliente",
    },
    slug: "chaud",
    subcategories: [
      { name: { fr: "Fours (Rotatifs/Soles)", en: "Ovens (Rotary/Deck)", es: "Hornos (Rotativos/De solera)" }, slug: "fours" },
      { name: { fr: "Ligne Chaude", en: "Hot Line", es: "Línea caliente" }, slug: "ligne-chaude" },
      { name: { fr: "Ampoules", en: "Bulbs", es: "Bombillas" }, slug: "friteuses" },
      { name: { fr: "Moules", en: "Moulds", es: "Moldes" }, slug: "moules" },
      { name: { fr: "Tissu à pâtons", en: "Proofing cloth", es: "Tela de fermentación" }, slug: "tissu" }
    ]
  },
  {
    name: {
      fr: "Froid & Réfrigération",
      en: "Cold & Refrigeration",
      es: "Frío y Refrigeración",
    },
    slug: "froid",
    subcategories: [
      { name: { fr: "Armoires Réfrigérées", en: "Refrigerated Cabinets", es: "Armarios refrigerados" }, slug: "armoires-refrigerees" },
      { name: { fr: "Tours Pâtissiers", en: "Pastry Counters", es: "Mesas pasteleras" }, slug: "tours-patissiers" },
      { name: { fr: "Cellules de Refroidissement", en: "Blast Chillers", es: "Abatidores" }, slug: "cellules" },
      { name: { fr: "Vitrines (Gâteaux/Boissons)", en: "Display Cases (Cakes/Drinks)", es: "Vitrinas (Pasteles/Bebidas)" }, slug: "vitrines" },
      { name: { fr: "Chambres de Fermentation", en: "Proofing Chambers", es: "Cámaras de fermentación" }, slug: "fermentation" },
      { name: { fr: "Machines à glace", en: "Ice makers", es: "Máquinas de hielo" }, slug: "glace" }
    ]
  },
  {
    name: {
      fr: "Inox & Mobilier",
      en: "Stainless & Furniture",
      es: "Inox y Mobiliario",
    },
    slug: "inox-mobilier",
    subcategories: [
      { name: { fr: "Tables de Travail (Inox)", en: "Work Tables (Stainless)", es: "Mesas de trabajo (Inox)" }, slug: "tables-inox" },
      { name: { fr: "Éviers Inox (Plonges)", en: "Stainless Steel Sinks", es: "Fregaderos de Acero Inoxidable" }, slug: "plonges" },
      { name: { fr: "Lave-vaisselle", en: "Dishwashers", es: "Lavavajillas" }, slug: "lave-vaisselle" },
      { name: { fr: "Échelles & Chariots", en: "Racks & Trolleys", es: "Carros y Estanterías" }, slug: "echelles-chariots" },
      { name: { fr: "Repose pâton", en: "Dough resting", es: "Reposo de masa" }, slug: "repose-paton" },
      { name: { fr: "Façonneuses Baguettes", en: "Baguette Moulders", es: "Formadoras de Baguettes" }, slug: "faconneuses-baguettes" },
      
    ]
  }
];
