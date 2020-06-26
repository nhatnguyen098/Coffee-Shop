import {all} from 'redux-saga/effects'
import watchProductSaga from './productSaga'
import watchUserSaga from './userSaga'
import watchCartSaga from './cartSaga'
export default function* rootSaga() {
    yield all([watchProductSaga(),watchUserSaga(),watchCartSaga()]);
}