
import {createStore, combineReducers} from "redux";
import { productReducer } from "./categoryReducer";
import { foodReducer } from "./foodReducer";
import { CartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
    products: productReducer,
    foods:foodReducer,
    Cart: CartReducer,
});
