import { FETCHING_USER,FETCHING_USER_SUCCESS,FETCHING_USER_ERROR } from './../../constants/actionTypes/userType';
export const fetching_user = (user:any) => {
    return {
        type: FETCHING_USER,
        user
    }
}
export const fetching_user_success = (data:any) => {
    return {
        type: FETCHING_USER_SUCCESS,
        data
    }
}
export const fetching_user_error = (error:any) => {
    return {
        type: FETCHING_USER_ERROR,
        error
    }
}