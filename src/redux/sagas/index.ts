import {all} from 'redux-saga/effects'
import watchProductSaga from './productSaga'
import watchUserSaga from './userSaga'
export default function* rootSaga() {
    yield all([watchProductSaga(),watchUserSaga()]);
}