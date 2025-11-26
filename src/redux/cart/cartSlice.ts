import { createSlice } from "@reduxjs/toolkit";
import type { CartItem } from "../../types/cart";
// import { CartItem } from "../../types/cart";

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
      console.log("addToCart",action)
      const existing = state.items.find((i) => i.id === action.payload.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    }
  }
});

export const { addToCart } = slice.actions;
export default slice.reducer;
