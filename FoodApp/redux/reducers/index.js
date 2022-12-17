
import {createStore, combineReducers} from "redux";
import { productReducer } from "./categoryReducer";
import { foodReducer } from "./foodReducer";
import { CartReducer } from "./cartReducer";
import {DiscountReducer} from "./DiscountReducer"
import { AccountReducer } from "./accountReducer";
export const rootReducer = combineReducers({
    products: productReducer,
    foods:foodReducer,
    Cart: CartReducer,
    disccount:DiscountReducer,
    Account:AccountReducer
});
