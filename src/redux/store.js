import { createStore, applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import  productReducer  from "../redux/reducers/apiData";
import detailsReducer from "./reducers/detail";

const rootReducer = combineReducers({
    productList: productReducer,
    detailproduct : detailsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;