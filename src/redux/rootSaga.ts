// rootSaga.ts
import { all, fork } from "redux-saga/effects";
import productSaga from "./products/productSaga";
// If you later add other sagas (e.g., cartSaga), import them here:
// import cartSaga from "./cart/cartSaga";

export default function* rootSaga() {
  // Combine all sagas here using fork (non-blocking)
  yield all([
    fork(productSaga),
    // fork(cartSaga),
  ]);
}
