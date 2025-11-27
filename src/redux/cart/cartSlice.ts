import { createSlice } from "@reduxjs/toolkit";
import type { CartItem } from "../../types/cart";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: []
};

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: any) => {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action: any) => {
      const remainingData = state.items?.filter((data) => {
        return data.id !== action.payload
      });
      state.items = remainingData
    },
    updateQty: (state, action: any) => {
      const { id, qty } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) item.qty = qty;
    },
  }
});

export const { addToCart, removeFromCart, updateQty } = slice.actions;
export default slice.reducer;
