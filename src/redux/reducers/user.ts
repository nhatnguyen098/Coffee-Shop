import {
  FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_ERROR,
  ADD_NEW_USER,
  ADD_NEW_USER_SUCCESS,
  ADD_NEW_USER_ERROR,
} from "./../../constants/actionTypes/userType";

let initState = {
  data: {
    email: null,
    token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  },
  loading: false,
  error: null,
};
export default (state = initState, action: any) => {
  switch (action.type) {
    case FETCHING_USER:
      return { ...state, loading: true };
    case FETCHING_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          email: action.data.user.email,
          token: action.data.user.xa,
        },
      };
    case FETCHING_USER_ERROR:
      return { ...state, loading: false, data: {}, error: action.error };
    case ADD_NEW_USER:
      return { ...state, loading: true };
    case ADD_NEW_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          email: action.data.user.email,
          token: action.data.user.xa,
        },
      };
    case ADD_NEW_USER_ERROR:
      return { ...state, loading: false, data: {}, error: action.error };
    default:
      return { ...state };
  }
};
