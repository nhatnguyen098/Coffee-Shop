import {
  FETCHING_PRODUCT,
  FETCHING_PRODUCT_SUCCESS,
  FETCHING_PRODUCT_ERROR,
  ADD_NEW_PRODUCT,
  ADD_NEW_PRODUCT_SUCCESS,
  ADD_NEW_PRODUCT_ERROR,
  FETCHING_PRODUCT_BY_ID,
  FETCHING_PRODUCT_BY_ID_SUCCESS,
  FETCHING_PRODUCT_BY_ID_ERROR
} from "./../../constants/actionTypes/productType";

export const fetching_product = () => {
  return {
    type: FETCHING_PRODUCT,
  };
};

export const fetching_product_success = (data: any) => {
  return {
    type: FETCHING_PRODUCT_SUCCESS,
    data,
  };
};

export const fetching_product_error = (error: any) => {
  return {
    type: FETCHING_PRODUCT_ERROR,
    error,
  };
};

export const add_new_product = (data: any) => {
    return {
        type: ADD_NEW_PRODUCT,
        data
    }
};

export const add_new_product_success = (data: any) => {
    return {
        type: ADD_NEW_PRODUCT_SUCCESS,
        data
    }
};

export const add_new_product_error = (error: any) => {
    return {
        type: ADD_NEW_PRODUCT_ERROR,
        error
    }
};

export const fetching_pro_by_id = (id:number) => {
  return {
    type : FETCHING_PRODUCT_BY_ID,
    id
  }
}

export const fetching_pro_by_id_success = (data:any) => {
  return {
    type : FETCHING_PRODUCT_BY_ID_SUCCESS,
    data
  }
}

export const fetching_pro_by_id_error = (error:any) => {
  return {
    type : FETCHING_PRODUCT_BY_ID_ERROR,
    error
  }
}
