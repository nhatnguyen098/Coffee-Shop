import { combineReducers } from "redux";
import products from './product'
import users from './user'
import carts from './cart'
export default combineReducers({
    products,
    users,
    carts
})