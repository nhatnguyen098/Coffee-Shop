import { combineReducers } from "redux";
import products from './product'
import users from './user'
export default combineReducers({
    products,
    users
})