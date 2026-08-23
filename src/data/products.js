const PRODUCTS = [
  {
    id: 1,
    name: "Metformin 500mg",
    category: "Diabetes Care",
    price: 340,
    unit: "Strip of 10",
    inStock: true,
    requiresPrescription: true,
    longDescription:
      "Metformin is a first-line oral medication widely prescribed for managing type 2 diabetes. It works by reducing the amount of glucose your liver produces and improving how your body responds to insulin, helping keep blood sugar levels within a healthy range when combined with diet and exercise.",
    highlights: [
      "Helps control blood sugar levels",
      "Does not typically cause weight gain",
      "Taken with meals to reduce stomach upset",
    ],
    details: [
      { label: "Composition", value: "Metformin Hydrochloride 500mg" },
      { label: "Dosage", value: "1 tablet twice daily, with meals, or as prescribed" },
      { label: "Common side effects", value: "Nausea, mild stomach upset, diarrhea (usually temporary)" },
      { label: "Storage", value: "Store below 30°C, away from moisture and direct sunlight" },
    ],
  },
  {
    id: 2,
    name: "Panadol Extra",
    category: "Pain Relief",
    price: 120,
    compareAtPrice: 150,
    unit: "Strip of 20",
    inStock: true,
    requiresPrescription: false,
    longDescription:
      "Panadol Extra combines paracetamol with a small amount of caffeine for enhanced relief from headaches, migraines, toothaches, and general body pain. The added caffeine helps the paracetamol work faster and more effectively for many types of pain.",
    highlights: [
      "Fast-acting relief for headaches and body pain",
      "Contains caffeine for enhanced effectiveness",
      "Safe for most adults when used as directed",
    ],
    details: [
      { label: "Composition", value: "Paracetamol 500mg + Caffeine 65mg" },
      { label: "Dosage", value: "1-2 tablets every 4-6 hours, max 8 tablets in 24 hours" },
      { label: "Common side effects", value: "Rare at normal doses; avoid exceeding recommended dose" },
      { label: "Storage", value: "Store in a cool, dry place below 25°C" },
    ],
  },
  {
    id: 3,
    name: "Vitamin D3 1000IU",
    category: "Wellness",
    price: 680,
    unit: "Bottle of 60",
    inStock: false,
    requiresPrescription: false,
    longDescription:
      "Vitamin D3 supports strong bones, a healthy immune system, and normal muscle function. It's especially useful for people with limited sun exposure, and is commonly recommended as part of a daily wellness routine for overall health maintenance.",
    highlights: [
      "Supports bone and immune health",
      "Ideal for people with low sun exposure",
      "Easy-to-swallow softgel capsules",
    ],
    details: [
      { label: "Composition", value: "Cholecalciferol (Vitamin D3) 1000IU per capsule" },
      { label: "Dosage", value: "1 capsule daily with a meal, or as advised by your doctor" },
      { label: "Common side effects", value: "Uncommon at recommended doses" },
      { label: "Storage", value: "Store below 25°C, keep bottle tightly closed" },
    ],
  },
  {
    id: 4,
    name: "Digital BP Monitor",
    category: "Health Devices",
    price: 4200,
    compareAtPrice: 4800,
    unit: "1 unit",
    inStock: true,
    requiresPrescription: false,
    longDescription:
      "This fully automatic digital blood pressure monitor gives accurate systolic, diastolic, and pulse readings at the touch of a button. Designed for home use, it's ideal for anyone monitoring hypertension or tracking their cardiovascular health over time.",
    highlights: [
      "One-touch automatic measurement",
      "Stores up to 90 previous readings",
      "Large, easy-to-read digital display",
    ],
    details: [
      { label: "Measurement range", value: "0-299 mmHg, pulse 40-199 bpm" },
      { label: "Power source", value: "4 x AA batteries (included) or adapter" },
      { label: "Cuff size", value: "Fits arm circumference 22-32 cm" },
      { label: "Warranty", value: "1 year manufacturer warranty" },
    ],
  },
  {
    id: 5,
    name: "Amoxicillin 250mg",
    category: "Antibiotics",
    price: 210,
    unit: "Strip of 12",
    inStock: true,
    requiresPrescription: true,
    longDescription:
      "Amoxicillin is a penicillin-type antibiotic used to treat a wide range of bacterial infections, including respiratory, ear, and urinary tract infections. It should only be used under medical supervision and the full course should be completed even if symptoms improve early.",
    highlights: [
      "Treats a broad range of bacterial infections",
      "Prescribed course should always be completed",
      "Not effective against viral infections like flu or colds",
    ],
    details: [
      { label: "Composition", value: "Amoxicillin (as trihydrate) 250mg" },
      { label: "Dosage", value: "As prescribed by your doctor, typically every 8 hours" },
      { label: "Common side effects", value: "Nausea, diarrhea, rash (consult doctor if severe)" },
      { label: "Storage", value: "Store below 25°C in a dry place" },
    ],
  },
  {
    id: 6,
    name: "Glucometer Kit",
    category: "Health Devices",
    price: 2600,
    unit: "1 unit",
    inStock: false,
    requiresPrescription: false,
    longDescription:
      "This glucometer kit gives fast, accurate blood glucose readings from a small blood sample, making daily diabetes monitoring simple and convenient at home. The kit includes everything needed to get started, including a lancing device and sample strips.",
    highlights: [
      "Results in under 10 seconds",
      "Includes lancing device and starter strips",
      "Compact and easy to carry",
    ],
    details: [
      { label: "Sample size", value: "0.5 microliters" },
      { label: "Memory", value: "Stores up to 300 readings with date and time" },
      { label: "Included", value: "Meter, lancing device, 10 test strips, carry case" },
      { label: "Warranty", value: "2 year manufacturer warranty" },
    ],
  },
];

export default PRODUCTS;