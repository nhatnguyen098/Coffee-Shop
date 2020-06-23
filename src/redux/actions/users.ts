import {
  FETCHING_USER,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_ERROR,
  ADD_NEW_USER,
  ADD_NEW_USER_SUCCESS,
  ADD_NEW_USER_ERROR,
} from "./../../constants/actionTypes/userType";
export const fetching_user = (user: any) => {
  return {
    type: FETCHING_USER,
    user,
  };
};
export const fetching_user_success = (data: any) => {
  return {
    type: FETCHING_USER_SUCCESS,
    data,
  };
};
export const fetching_user_error = (error: any) => {
  return {
    type: FETCHING_USER_ERROR,
    error,
  };
};

export const add_new_user = (user:any) => {
  return {
    type: ADD_NEW_USER,
    user,
  };
};

export const add_new_user_success = (data: any) => {
  console.log(data)
  return {
    type: ADD_NEW_USER_SUCCESS,
    data,
  };
};

export const add_new_user_error = (error: any) => {
  console.log(error)
    return {
      type: ADD_NEW_USER_ERROR,
      error,
    };
  };
