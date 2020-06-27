import { combineReducers } from "redux";
import products from './product'
import users from './user'
import carts from './cart'
import navbar from './navbar'
export default combineReducers({
    products,
    users,
    carts,
    navbar
})