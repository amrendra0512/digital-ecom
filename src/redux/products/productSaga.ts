import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFailure
} from "./productSlice";

import productApi from "../../api/productApi";

function* handleFetchProducts(action: any): Generator<any> {
  try {
    const response: any = yield call(productApi.getProducts, action.payload);
    yield put(fetchProductsSuccess(response));
  } catch (err: any) {
    yield put(fetchProductsFailure(err.message));
  }
}

export default function* productSaga() {
  yield takeLatest(fetchProducts.type, handleFetchProducts);
}
