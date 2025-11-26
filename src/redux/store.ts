// store.ts
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productsReducer from "./products/productSlice";
import cartReducer from "./cart/cartSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // keep serializable checks and others enabled by default
      thunk: false, // we use sagas for side effects; disable thunk if you want to avoid mixing
    }).concat(sagaMiddleware)
});

// run root saga
sagaMiddleware.run(rootSaga);

// Types for use throughout the app (use in hooks / components)

export default store;
