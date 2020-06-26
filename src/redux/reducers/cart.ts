import {
  FETCHING_CART,
  FETCHING_CART_SUCCESS,
  FETCHING_CART_ERROR,
  ADD_CART,
  ADD_CART_SUCCESS,
  ADD_CART_ERROR,
  DELETE_CART,
  DELETE_CART_SUCCESS,
  DELETE_CART_ERROR,
} from "./../../constants/actionTypes/cartType";

let initState = {
  data: [],
  loading: false,
  error: null,
};
export default (state = initState, action: any) => {
  switch (action.type) {
    case FETCHING_CART:
      return { ...state, loading: true };
    case FETCHING_CART_SUCCESS:
      return { ...state, data: action.data, loading: false, error: null };
    case FETCHING_CART_ERROR:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.error,
      };
    case ADD_CART:
      return { ...state, loading: true };
    case ADD_CART_SUCCESS:
      return { ...state, loading: false, data: action.data, error: null };
    case ADD_CART_ERROR:
      return { ...state, loading: false, data: [], error: action.error };
    case DELETE_CART:
      return { ...state, loading: true};
    case DELETE_CART_SUCCESS:
      return { ...state, loading: false, data: action.data, error: null };
    case DELETE_CART_ERROR:
      return { ...state, loading: false, data: [], error: action.error };
    default:
      return { ...state };
  }
};
