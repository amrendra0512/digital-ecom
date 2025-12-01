import axios from "axios";
import { BASE_URL } from "../common/constant";
import { ResponseMapper } from "../common/responseMapper";


export default {

  getProducts: async ({ page = 1, limit = 20, search = "", category = "all" }) => {
  // Calculate skip for dummyjson pagination
  const skip = (page - 1) * limit;

  // Base URL
  let url = `${BASE_URL}/products?limit=${limit}&skip=${skip}`;

  // If search present
  if (search) {
    url = `${BASE_URL}/products/search?q=${search}&limit=${limit}&skip=${skip}`;
  }

  // If category filter applied
  if (category !== "all") {
    url = `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`;
  }

  const res = await axios.get(url);

  // DummyJSON returns: products, total, limit, skip
  const mapped = ResponseMapper({
    page,
    total: res.data.total,
    limit,
    data: res.data.products
  });
  return mapped;
},
};
