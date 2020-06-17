import { FETCHING_PRODUCT,FETCHING_PRODUCT_SUCCESS,FETCHING_PRODUCT_ERROR } from './../../constants/actionTypes/productType';
let initState = {
    data: [],
    loading:false,
    error:null
}
export default (state = initState,action:any) => {
    switch(action.type){
        case FETCHING_PRODUCT:
            return {...state,loading:true}
        case FETCHING_PRODUCT_SUCCESS:
            return {...state,loading:false,data:action.data}
        case FETCHING_PRODUCT_ERROR:
            return {...state,loading:false,data:[],error:action.error}
        default:
            return {...state}
    }
}