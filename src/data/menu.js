// Menu data — array of all dishes served at The Spice Table.
// Each dish has an id, name, price, description, category, and image URL.

const menuItems = [
  // --- Starters ---
  {
    id: 1,
    name: "Bruschetta",
    price: 500,
    description: "Toasted bread topped with fresh tomatoes, garlic, and basil drizzle.",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500&q=80"
  },
  {
    id: 2,
    name: "Stuffed Mushrooms",
    price: 450,
    description: "Baked mushroom caps filled with herbed cream cheese and breadcrumbs.",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1625938145744-e380515399bf?w=500&q=80"
  },
  {
    id: 3,
    name: "Paneer Tikka",
    price: 250,
    description: "Chargrilled cottage cheese cubes marinated in spiced yoghurt.",
    category: "Starters",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&q=80"
  },

  // --- Mains ---
  {
    id: 4,
    name: "Grilled Salmon",
    price: 150,
    description: "Atlantic salmon fillet with lemon butter sauce and seasonal greens.",
    category: "Mains",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&q=80"
  },
  {
    id: 5,
    name: "Butter Chicken",
    price: 350,
    description: "Tender chicken simmered in a rich, creamy tomato and butter gravy.",
    category: "Mains",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&q=80"
  },
  {
    id: 6,
    name: "Lamb Shank",
    price: 200,
    description: "Slow-braised lamb shank with rosemary jus and mashed potatoes.",
    category: "Mains",
    image: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?w=500&q=80"
  },

  // --- Desserts ---
  {
    id: 7,
    name: "Tiramisu",
    price: 200,
    description: "Classic Italian dessert layered with coffee-soaked sponge and mascarpone.",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=80"
  },
  {
    id: 8,
    name: "Crème Brûlée",
    price: 150,
    description: "Silky vanilla custard with a crisp, caramelised sugar top.",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=500&q=80"
  },
  {
    id: 9,
    name: "Gulab Jamun",
    price: 80,
    description: "Soft milk-solid dumplings soaked in rose-scented sugar syrup.",
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1666190709498-afa49a8cfe68?w=500&q=80"
  },

  // --- Drinks ---
  {
    id: 10,
    name: "Mango Lassi",
    price: 99,
    description: "Chilled yoghurt smoothie blended with ripe Alphonso mangoes.",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=500&q=80"
  },
  {
    id: 11,
    name: "Masala Chai",
    price: 49,
    description: "Spiced Indian tea brewed with ginger, cardamom, and cinnamon.",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=500&q=80"
  },
  {
    id: 12,
    name: "Espresso Martini",
    price: 150,
    description: "Vodka, fresh espresso, and coffee liqueur shaken over ice.",
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=500&q=80"
  }
];

export default menuItems;
