import type { Product } from "../types/product";


const mockProducts: Product[] = [
  {
    id: 1,
    title: "Wireless Noise-Canceling Headphones",
    price: 2499,
    category: "electronics",
    image: "https://picsum.photos/200?random=101",
    description: "Premium over-ear headphones with active noise cancellation."
  },
  {
    id: 2,
    title: "Men's Running Shoes",
    price: 1799,
    category: "fashion",
    image: "https://picsum.photos/200?random=102",
    description: "Breathable and lightweight running shoes for daily workouts."
  },
  {
    id: 3,
    title: "Smart Fitness Watch",
    price: 3299,
    category: "electronics",
    image: "https://picsum.photos/200?random=103",
    description: "Tracks steps, heart rate, and fitness activities."
  },
  {
    id: 4,
    title: "Bluetooth Portable Speaker",
    price: 1299,
    category: "electronics",
    image: "https://picsum.photos/200?random=104",
    description: "Compact speaker with deep bass and 10-hour battery life."
  },
  {
    id: 5,
    title: "Women’s Stylish Handbag",
    price: 999,
    category: "fashion",
    image: "https://picsum.photos/200?random=105",
    description: "A classic handbag designed for premium elegance."
  },
  {
    id: 6,
    title: "Gaming Mouse RGB",
    price: 899,
    category: "electronics",
    image: "https://picsum.photos/200?random=106",
    description: "Ergonomic gaming mouse with customizable RGB lighting."
  },
  {
    id: 7,
    title: "Classic Analog Wrist Watch",
    price: 2199,
    category: "fashion",
    image: "https://picsum.photos/200?random=107",
    description: "Elegant analog watch with leather strap."
  },
  {
    id: 8,
    title: "Cotton Casual T-Shirt",
    price: 499,
    category: "fashion",
    image: "https://picsum.photos/200?random=108",
    description: "Soft cotton breathable T-shirt available in multiple colors."
  },
  {
    id: 9,
    title: "Laptop Backpack",
    price: 1299,
    category: "accessories",
    image: "https://picsum.photos/200?random=109",
    description: "Water-resistant backpack with padded laptop compartment."
  },
  {
    id: 10,
    title: "Wireless Earbuds",
    price: 1499,
    category: "electronics",
    image: "https://picsum.photos/200?random=110",
    description: "True wireless earbuds with touch control and long battery life."
  },
  {
    id: 11,
    title: "Stainless Steel Water Bottle",
    price: 599,
    category: "home",
    image: "https://picsum.photos/200?random=111",
    description: "Eco-friendly insulated bottle that keeps drinks cold or hot."
  },
  {
    id: 12,
    title: "Yoga Mat Non-Slip",
    price: 899,
    category: "sports",
    image: "https://picsum.photos/200?random=112",
    description: "Non-slip yoga mat with extra cushioning for comfort."
  },
  {
    id: 13,
    title: "Digital Alarm Clock",
    price: 699,
    category: "home",
    image: "https://picsum.photos/200?random=113",
    description: "LED display digital alarm clock with night mode."
  },
  {
    id: 14,
    title: "Kitchen Knife Set",
    price: 1599,
    category: "home",
    image: "https://picsum.photos/200?random=114",
    description: "High-quality stainless steel kitchen knife set."
  },
  {
    id: 15,
    title: "Foldable Study Table",
    price: 2499,
    category: "home",
    image: "https://picsum.photos/200?random=115",
    description: "Space-saving foldable study table with sturdy build."
  },
  {
    id: 16,
    title: "Sports Gym Gloves",
    price: 499,
    category: "sports",
    image: "https://picsum.photos/200?random=116",
    description: "Breathable gym gloves for strength training."
  },
  {
    id: 17,
    title: "Wireless Keyboard & Mouse Combo",
    price: 1699,
    category: "electronics",
    image: "https://picsum.photos/200?random=117",
    description: "Silent wireless keyboard and mouse for office and home use."
  },
  {
    id: 18,
    title: "Premium Leather Wallet",
    price: 799,
    category: "fashion",
    image: "https://picsum.photos/200?random=118",
    description: "Genuine leather wallet with multiple card slots."
  },
  {
    id: 19,
    title: "Scented Candles Pack",
    price: 499,
    category: "home",
    image: "https://picsum.photos/200?random=119",
    description: "Soothing scented candles for home relaxation."
  },
  {
    id: 20,
    title: "LED Desk Lamp",
    price: 999,
    category: "electronics",
    image: "https://picsum.photos/200?random=120",
    description: "Adjustable LED desk lamp with touch brightness control."
  }
];


export default {
  getProducts: async ({ page = 1, limit = 9, search = "", category = "all" }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let data = [...mockProducts];

        if (search) {
          data = data.filter((p) =>
            p.title.toLowerCase().includes(search.toLowerCase())
          );
        }

        if (category !== "all") {
          data = data.filter((p) => p.category === category);
        }

        resolve({
          page,
          total: data.length,
          limit,
          data
        });
      }, 600);
    });
  },

  getProductById: async (id: number) => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(mockProducts.find((p) => p.id === id));
      }, 500)
    );
  }
};
