import {
  getUserAPI,
  setToken,
  postUserAPI,
  removeToken,
} from "./../../services/userService";
import {
  FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_ERROR,
  ADD_NEW_USER,
  // ADD_NEW_USER_SUCCESS,
  ADD_NEW_USER_ERROR,
  SIGN_OUT,
} from "./../../constants/actionTypes/userType";
import { toastSuccess } from "../../helpers/toastHelper";
import { DISPLAY_MODAL } from "../../constants/actionTypes/navBarType";
import { all, call, takeLatest, put } from "redux-saga/effects";

function* getUserSaga(action: any) {
  try {
    const data = yield call(getUserAPI, action.user);
    if (data) {
      yield call(setToken, data.user.xa);
    }
    yield put({ type: FETCHING_USER_SUCCESS, data });
    yield put({ type: DISPLAY_MODAL, show: false });
  } catch (error) {
    yield put({ type: FETCHING_USER_ERROR, error });
  }
}

function* postUserSaga(action: any) {
  try {
    const data = yield call(postUserAPI, action.user);
    // yield put({ type: ADD_NEW_USER_SUCCESS, data });
    data && toastSuccess("Sign Up account successful.!");
  } catch (error) {
    yield put({ type: ADD_NEW_USER_ERROR, error });
  }
}
function* signOutSaga() {
  try {
    yield call(removeToken);
  } catch (error) {
    console.log(error);
  }
}
export default function* watchUserSaga() {
  yield all([
    takeLatest(FETCHING_USER, getUserSaga),
    takeLatest(ADD_NEW_USER, postUserSaga),
    takeLatest(SIGN_OUT, signOutSaga),
  ]);
}
