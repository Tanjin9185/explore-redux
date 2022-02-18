import { combineReducers } from "redux";
import { productReducer, selectesProductReducer } from "./ProductReducer";

const reducers = combineReducers({
    allProduct: productReducer,
    product: selectesProductReducer
})
export default reducers;