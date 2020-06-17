import { FETCHING_PRODUCT,FETCHING_PRODUCT_SUCCESS,FETCHING_PRODUCT_ERROR } from './../../constants/actionTypes/productType';

export const fetching_product = () => {
    return {
        type: FETCHING_PRODUCT
    }
}

export const fetching_product_success = (data:any) => {
    console.log(data)
    return {
        type: FETCHING_PRODUCT_SUCCESS,
        data
    }
}

export const fetching_product_error = (error:any) => {
    console.log(error)
    return {
        type: FETCHING_PRODUCT_ERROR,
        error
    }
}