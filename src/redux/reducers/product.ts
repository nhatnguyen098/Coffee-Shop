import {
  FETCHING_PRODUCT,
  FETCHING_PRODUCT_SUCCESS,
  FETCHING_PRODUCT_ERROR,
  FETCHING_PRODUCT_BY_ID,
  FETCHING_PRODUCT_BY_ID_SUCCESS,
  FETCHING_PRODUCT_BY_ID_ERROR,
} from "./../../constants/actionTypes/productType";
let initState = {
  data: [],
  loading: false,
  error: null,
  productDetail: null,
};
export default (state = initState, action: any) => {
  switch (action.type) {
    case FETCHING_PRODUCT:
      return { ...state, loading: true };
    case FETCHING_PRODUCT_SUCCESS:
      return { ...state, loading: false, data: action.data };
    case FETCHING_PRODUCT_ERROR:
      return { ...state, loading: false, data: [], error: action.error };
    case FETCHING_PRODUCT_BY_ID:
      return { ...state, loading: true };
    case FETCHING_PRODUCT_BY_ID_SUCCESS:
      return { ...state, loading: false, productDetail: action.data };
    case FETCHING_PRODUCT_BY_ID_ERROR:
      return { ...state, loading: false, productDetail: null, error: action.error };
    default:
      return { ...state };
  }
};
