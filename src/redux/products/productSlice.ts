import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";

interface ProductState {
  loading: boolean;
  list: Product[];
  total: number;
  error: string | null;
  page: number;
  limit: number
}

const initialState: ProductState = {
  loading: false,
  list: [],
  total: 0,
  error: null,
  page: 1,
  limit: 20,
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state, _action: any) => {
      state.loading = true;
    },
    fetchProductsSuccess: (state, action: any) => {
      const { data, page, total, limit } = action.payload;

      state.list = data;
      state.limit = limit;
      state.total = total;
      state.loading = false;
      state.page = page;

      if (page === 1) {
        // first load → reset
        state.list = data;
      } else {
        // load more → append
        state.list = [...state.list, ...data];
      }
    },
    fetchProductsFailure: (state, action: any) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFailure
} = slice.actions;

export default slice.reducer;
