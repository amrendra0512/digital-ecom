import { createSlice } from "@reduxjs/toolkit";

export interface Address {
  name: string;
  street: string;
  city: string;
  zip: string;
  email: string;
}

interface UserState {
  address: Address;
}

const initialState: UserState = {
  address: {
    name: "",
    street: "",
    city: "",
    zip: "",
    email: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateAddress: (state, action: any) => {
      state.address = { ...state.address, ...action.payload };
    },
  },
});

export const { updateAddress } = userSlice.actions;

export default userSlice.reducer;
