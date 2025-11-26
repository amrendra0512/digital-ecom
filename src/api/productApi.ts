import type { Product } from "../types/product";


const mockProducts: Product[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 1999,
    category: "electronics",
    image: "https://picsum.photos/200?random=1",
    description: "Noise cancelling headphones"
  },
  {
    id: 2,
    title: "Running Shoes",
    price: 1499,
    category: "fashion",
    image: "https://picsum.photos/200?random=2",
    description: "Comfortable running shoes"
  },
  {
    id: 3,
    title: "Smart Watch",
    price: 2999,
    category: "electronics",
    image: "https://picsum.photos/200?random=3",
    description: "Track fitness and notifications"
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
