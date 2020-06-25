import { all, call, takeLatest, put } from "redux-saga/effects";
import {FETCHING_PRODUCT,ADD_NEW_PRODUCT,FETCHING_PRODUCT_BY_ID} from '../../constants/actionTypes/productType'
import {fetching_product_success,fetching_product_error,add_new_product_success,add_new_product_error,fetching_pro_by_id_success,fetching_pro_by_id_error} from '../actions/products'
import {getProListAPI,getProDetailAPI,postProductAPI} from '../../services/productService'

function* getProductSaga() {
    try {
        const {data} = yield call(getProListAPI);
        yield put(fetching_product_success(data));
    } catch (error) {
        yield put(fetching_product_error(error));
    }
}


function* fetchingProductIdSaga(action:any) {

    try {
        const {data} = yield call(getProDetailAPI,action.id);
        yield put(fetching_pro_by_id_success(data));
    } catch (error) {
        yield put(fetching_pro_by_id_error(error));
    }
}


function* postProductSaga(action:any) {

    try {
        const data = yield call(postProductAPI,action.data);
        console.log(data)
        yield put(add_new_product_success(data));
    } catch (error) {
        yield put(add_new_product_error(error));
    }
}

export default function* watchProductSaga() {
    yield all([
        takeLatest(FETCHING_PRODUCT, getProductSaga),
        takeLatest(FETCHING_PRODUCT_BY_ID, fetchingProductIdSaga),
        takeLatest(ADD_NEW_PRODUCT, postProductSaga),
    ]);
}



