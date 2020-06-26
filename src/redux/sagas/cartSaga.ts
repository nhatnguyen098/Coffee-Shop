import { all, call, takeLatest, put } from "redux-saga/effects";
import {
  FETCHING_CART,
  ADD_CART,
  DELETE_CART,
} from "../../constants/actionTypes/cartType";
import {
  fetching_cart_success,
  fetching_cart_error,
  add_cart_success,
  add_cart_error,
  delete_cart_success,
  delete_cart_error,
} from "../actions/cart";
import { getCartList, addToCart, deleteCart } from "../../services/cartService";

function* getCartSaga() {
  try {
    const data = yield call(getCartList);
    data && (yield put(fetching_cart_success(data)));
  } catch (error) {
    yield put(fetching_cart_error(error));
  }
}

function* postCartSaga(action: any) {
  try {
    const data = yield call(addToCart, action.data);
    data && (yield put(add_cart_success(data)));
  } catch (error) {
    yield put(add_cart_error(error));
  }
}

function* deleteCartSaga(action: any) {
  try {
    const data = yield call(deleteCart, action.id);
    data && (yield put(delete_cart_success(data)));
  } catch (error) {
    yield put(delete_cart_error(error));
  }
}

export default function* watchCartSaga() {
  yield all([
    takeLatest(FETCHING_CART, getCartSaga),
    takeLatest(ADD_CART, postCartSaga),
    takeLatest(DELETE_CART, deleteCartSaga),
  ]);
}
