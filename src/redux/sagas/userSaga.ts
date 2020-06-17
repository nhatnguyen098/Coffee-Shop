import { getUserAPI, setToken } from "./../../services/userService";
import {
  FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_ERROR,
} from "./../../constants/actionTypes/userType";
import { all, call, takeLatest, put } from "redux-saga/effects";

function* getUserSaga(action: any) {
  try {
    const data = yield call(getUserAPI, action.user);
    if (data) {
      yield call(setToken, data.user.xa);
    }
    yield put({ type: FETCHING_USER_SUCCESS, data });
  } catch (error) {
    yield put({ type: FETCHING_USER_ERROR, error });
  }
}

export default function* watchUserSaga() {
  yield all([takeLatest(FETCHING_USER, getUserSaga)]);
}
