export interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  description: string;
  image: string;
  badge?: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Chronograph Elite",
    price: "$2,499",
    description: "Premium Swiss movement with sapphire crystal",
    image: "https://images.unsplash.com/photo-1627794145862-2a82883c251b?w=600&q=80",
    category: "Precision Series",
  },
  {
    id: "2",
    name: "Aquatic Drift",
    price: "$1,899",
    description: "300m water resistance dive watch",
    image: "https://images.unsplash.com/photo-1589988574803-455587b19171?w=600&q=80",
    category: "Explorer Series",
  },
  {
    id: "3",
    name: "Heritage Classic",
    price: "$3,299",
    description: "Rose gold case with Italian leather strap",
    image: "https://images.unsplash.com/photo-1546118729-b9a3e4812724?w=600&q=80",
    category: "Elegance Series",
  },
  {
    id: "4",
    name: "Urban Pilot",
    price: "$1,599",
    description: "Aviation-inspired with dual timezone",
    image: "https://images.unsplash.com/photo-1759401909241-f554229ed260?w=600&q=80",
    category: "Fusion Series",
  },
  {
    id: "5",
    name: "Titanium Force",
    price: "$4,199",
    description: "Ultra-light titanium with ceramic bezel",
    image: "https://images.unsplash.com/photo-1704782709398-b41f86135e4a?w=600&q=80",
    category: "Precision Series",
  },
  {
    id: "6",
    name: "Meridian GMT",
    price: "$2,799",
    description: "World-time complication for the global traveler",
    image: "https://images.unsplash.com/photo-1752896596082-166c5685e74d?w=600&q=80",
    category: "Explorer Series",
  },
];

export const dealProducts: Product[] = [
  {
    id: "d1",
    name: "Heritage Moonphase",
    price: "$1,749",
    originalPrice: "$2,499",
    description: "Elegant moonphase complication with exhibition caseback",
    image: "https://images.unsplash.com/photo-1687078426457-89ce2b562eaf?w=600&q=80",
    badge: "30% OFF",
    category: "Elegance Series",
  },
  {
    id: "d2",
    name: "Oceanic Explorer",
    price: "$1,299",
    originalPrice: "$1,899",
    description: "Professional diver with helium escape valve",
    image: "https://images.unsplash.com/photo-1698729617220-102b6d5a30b6?w=600&q=80",
    badge: "SALE",
    category: "Explorer Series",
  },
  {
    id: "d3",
    name: "Carbon Racer",
    price: "$2,099",
    originalPrice: "$2,799",
    description: "Forged carbon case with racing chronograph",
    image: "https://images.unsplash.com/photo-1633676747094-352417b380c1?w=600&q=80",
    badge: "25% OFF",
    category: "Fusion Series",
  },
];

export const blogPosts = [
  {
    id: "1",
    title: "The Art of Swiss Watchmaking: A Deep Dive",
    excerpt:
      "Exploring centuries of precision craftsmanship in Switzerland's watchmaking tradition.",
    date: "Dec 15, 2024",
    category: "CRAFTSMANSHIP",
    image: "https://images.unsplash.com/photo-1698729617220-102b6d5a30b6?w=600&q=80",
  },
  {
    id: "2",
    title: "Choosing Your First Luxury Timepiece",
    excerpt:
      "A comprehensive guide to selecting a watch that matches your style and needs.",
    date: "Dec 10, 2024",
    category: "GUIDES",
    image: "https://images.unsplash.com/photo-1753943803304-8cf8b01bde9b?w=600&q=80",
  },
  {
    id: "3",
    title: "The Rise of Hybrid Smartwatches",
    excerpt:
      "How traditional watchmaking meets modern technology in the latest hybrid designs.",
    date: "Dec 5, 2024",
    category: "TECHNOLOGY",
    image: "https://images.unsplash.com/photo-1633676747094-352417b380c1?w=600&q=80",
  },
];
