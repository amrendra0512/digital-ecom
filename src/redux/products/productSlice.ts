import { createSlice } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";

interface ProductState {
  loading: boolean;
  list: Product[];
  total: number;
  error: string | null;
}

const initialState: ProductState = {
  loading: false,
  list: [],
  total: 0,
  error: null
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state, _action: any) => {
      state.loading = true;
    },
    fetchProductsSuccess: (state, action: any) => {
      state.list = action.payload.data;
      state.total = action.payload.total;
      state.loading = false;
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
