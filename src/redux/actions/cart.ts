import {FETCHING_CART,FETCHING_CART_SUCCESS,FETCHING_CART_ERROR,ADD_CART,ADD_CART_SUCCESS,ADD_CART_ERROR,DELETE_CART,DELETE_CART_SUCCESS,DELETE_CART_ERROR} from '../../constants/actionTypes/cartType'

export const fetching_cart = () => {
    return {
        type: FETCHING_CART
    }
}

export const fetching_cart_success = (data:any) => {
    return {
        type: FETCHING_CART_SUCCESS,
        data
    }
}


export const fetching_cart_error = (error:any) => {
    return {
        type: FETCHING_CART_ERROR,
        error
    }
}

export const add_cart = (data:any) => {
    return {
        type: ADD_CART,
        data
    }
}

export const add_cart_success = (data:any) => {
    return {
        type: ADD_CART_SUCCESS,
        data
    }
}
export const add_cart_error = (error:any) => {
    return {
        type: ADD_CART_ERROR,
        error
    }
}
export const delete_cart = (id:any) => {
    return {
        type: DELETE_CART,
        id
    }
}
export const delete_cart_success = (data:any) => {
    return {
        type: DELETE_CART_SUCCESS,
        data
    }
}
export const delete_cart_error = (error:any) => {
    return {
        type: DELETE_CART_ERROR,
        error
    }
}