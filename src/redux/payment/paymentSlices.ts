import { createSlice } from "@reduxjs/toolkit";

export interface PaymentMethod {
  id: number;
  type: string;
  masked: string;
  // expiry: string;
  // accountHolderName: string;
}

interface PaymentState {
  paymentMethods: PaymentMethod[];
  selectedPaymentId: number | null;
}

const initialState: PaymentState = {
  paymentMethods: [
    { id: 1, type: "Visa", masked: "**** **** **** 1234" },
    { id: 2, type: "HDFC Debit Card", masked: "**** **** **** 5678" },
  ],
  selectedPaymentId: 1,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    addPaymentMethod: (state, action: any) => {
      state.paymentMethods.push(action.payload);
    },

    removePaymentMethod: (state, action: any) => {
      state.paymentMethods = state.paymentMethods.filter(
        (pm) => pm.id !== action.payload
      );

      // reset selected method if removed
      if (state.selectedPaymentId === action.payload) {
        state.selectedPaymentId = state.paymentMethods[0]?.id || null;
      }
    },

    selectPaymentMethod: (state, action: any) => {
      state.selectedPaymentId = action.payload;
    },
  },
});

export const {
  addPaymentMethod,
  removePaymentMethod,
  selectPaymentMethod,
} = paymentSlice.actions;

export default paymentSlice.reducer;
