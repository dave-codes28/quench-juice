// Juice data shared across the app
export const juices = [
  {
    id: "apple",
    name: "AppleSip",
    image: "/apple juice.png",
    color: "bg-red-50 dark:bg-red-950/40",
    accent: "text-red-500 dark:text-red-400",
    borderAccent: "border-red-500 dark:border-red-600",
    description: "Fresh and crisp apple juice, pure and natural",
    price: "₦2,000",
    details: `Experience the perfect blend of nature's finest apples in our AppleSip. Each sip brings you the authentic taste of fresh apples, enhanced with a touch of natural sweetness.`,
    healthBenefits: [
      "Pectin and polyphenols support heart health",
      "Antioxidants (quercetin, vitamin C) reduce inflammation",
      "Ginger aids digestion; cinnamon may stabilize blood sugar",
      "Lemon boosts immunity; honey adds natural sweetness"
    ],
    nutritionFacts: [
      "Calories: 100-120 kcal",
      "Sugar: 20-24g (apple: 15g, honey: 4-8g, date syrup: 2-3g)",
      "Vitamin C: 10-15% DV",
      "Potassium: 5-7% DV",
      "Fiber: 0.5-1g (if pulpy)"
    ],
    storage: [
      "2-3 months unopened",
      "Store below 25°C, away from sunlight",
      "Refrigerate after opening, consume within 3-5 days",
      "Packed in sterile PET/glass bottles"
    ]
  },
  {
    id: "orange-carrot",
    name: "GlowJuice",
    image: "/orange carrot juice.png",
    color: "bg-orange-50 dark:bg-orange-950/40",
    accent: "text-orange-500 dark:text-orange-400",
    borderAccent: "border-orange-500 dark:border-orange-600",
    description: "A perfect blend of sweet oranges and nutritious carrots",
    price: "₦2,500",
    details: `Indulge in the vibrant, soul-warming embrace of our Carrot and Orange Juice. This golden elixir combines the sweet, earthy notes of carrots with the zesty burst of oranges, elevated by ginger, turmeric, and a splash of lemon.`,
    healthBenefits: [
      "Rich in Vitamin A (from carrots): Supports vision and skin health",
      "High in Vitamin C (from oranges): Boosts immunity",
      "Anti-inflammatory: Ginger and turmeric reduce inflammation",
      "Digestive Aid: Ginger and lemon promote healthy digestion",
      "Natural Sweetness: Honey and date syrup offer minerals and energy"
    ],
    nutritionFacts: [
      "Calories: 100-120 kcal",
      "Sugar: 20-24g (carrots: 6g, oranges: 8g, honey: 4g, date syrup: 2-6g)",
      "Vitamin A: 150-200% DV",
      "Vitamin C: 100-150% DV",
      "Potassium: 8-10% DV",
      "Fiber: 1-2g (if pulpy)"
    ],
    storage: [
      "2-3 months unopened (flash pasteurized)",
      "Store below 25°C, away from sunlight",
      "Refrigerate after opening, consume within 3-5 days",
      "Packed in sterile PET/glass bottles"
    ]
  },
  {
    id: "pineapple",
    name: "SunnySip",
    image: "/pinneaple juice.png",
    color: "bg-yellow-50 dark:bg-yellow-950/40",
    accent: "text-yellow-600 dark:text-yellow-400",
    borderAccent: "border-yellow-600 dark:border-yellow-500",
    description: "Sweet and tangy pineapple juice, bursting with tropical flavor",
    price: "₦2,000",
    details: `Transport yourself to a tropical paradise with our SunnySip. Made from ripe, golden pineapples, this juice offers a perfect balance of sweetness and tanginess.`,
    healthBenefits: [
      "Vitamin C (50-70% DV) and bromelain for immunity and digestion",
      "Ginger reduces inflammation and nausea",
      "Coconut water provides electrolytes for hydration",
      "Honey and date syrup offer natural energy and nutrients"
    ],
    nutritionFacts: [
      "Calories: 120-140 kcal",
      "Sugar: 24-28g (pineapple: 16g, honey: 4-8g, date syrup: 2-3g)",
      "Vitamin C: 50-70% DV",
      "Manganese: 30-40% DV",
      "Potassium: 7-10% DV"
    ],
    storage: [
      "2-3 months unopened",
      "Store below 25°C, shaded",
      "Refrigerate after opening, consume within 3-5 days",
      "Packed in sterile PET/glass bottles"
    ]
  },
  {
    id: "guava",
    name: "GuavaRush",
    image: "/quava juice.png",
    color: "bg-pink-50 dark:bg-pink-950/40",
    accent: "text-pink-500 dark:text-pink-400",
    borderAccent: "border-pink-500 dark:border-pink-600",
    description: "Exotic guava juice, rich in flavor and nutrients",
    price: "₦2,000",
    details: `Discover the exotic taste of our GuavaRush. This unique juice combines the sweet and slightly tart flavor of fresh guavas with their rich nutritional profile.`,
    healthBenefits: [
      "High in vitamin C (150-200% DV) for immunity and skin health",
      "Antioxidants (lycopene, flavonoids) reduce oxidative stress",
      "Ginger aids digestion and reduces inflammation",
      "Honey provides natural sweetness with trace nutrients",
      "Lemon and water promote hydration"
    ],
    nutritionFacts: [
      "Calories: 90-110 kcal",
      "Sugar: 18-22g (guava: 14g, honey: 4-8g)",
      "Vitamin C: 150-200% DV",
      "Potassium: 5-7% DV",
      "Fiber: 0.5-1g (if pulpy)"
    ],
    storage: [
      "2-3 months unopened",
      "Store below 25°C, away from sunlight",
      "Refrigerate after opening (0-4°C), consume within 3-5 days",
      "Packed in sterile PET/glass bottles"
    ]
  },
  {
    id: "ginger-shot",
    name: "Ginger Shot",
    image: "/ginger shot.png",
    color: "bg-gray-50 dark:bg-gray-900/40",
    accent: "text-yellow-700 dark:text-yellow-300",
    borderAccent: "border-yellow-700 dark:border-yellow-400",
    description: "A fiery, fresh hit of pure ginger blended with citrus. Perfect for mornings, immunity boosts, or whenever you need a sharp reset.",
    price: "₦1,500",
    details: `Ingredients: Cold-pressed ginger, lemon juice, a touch of honey (optional), and a dash of cayenne.\n\n🌿 Health Benefits:\n- Supports digestion and gut health\n- Boosts immunity and helps fight inflammation\n- Natural energy enhancer\n- Helps soothe sore throats\n- Aids in detox and circulation`,
    healthBenefits: [
      "Supports digestion and gut health",
      "Boosts immunity and helps fight inflammation",
      "Natural energy enhancer",
      "Helps soothe sore throats",
      "Aids in detox and circulation"
    ],
    nutritionFacts: [
      "Calories: 25-35 kcal",
      "Sugar: 3-5g (from lemon and honey)",
      "Vitamin C: 15-20% DV",
      "Potassium: 2-3% DV"
    ],
    storage: [
      "Refrigerate at all times",
      "Consume within 3-5 days of opening",
      "Best served chilled"
    ],
    tagline: "Ginger Shot — Small but mighty. A spicy kick for your system."
  },
] 