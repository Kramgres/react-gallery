import {applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import catalogReducer from "./catalog-reducers";
import albumReducer from "./album-reducers";

const  {createStore} = require("redux");

const reducers = combineReducers({
    catalogPage: catalogReducer,
    albumPage: albumReducer
})

const store = createStore(reducers, applyMiddleware(thunk));
export default store;