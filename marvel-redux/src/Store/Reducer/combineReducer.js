import { combineReducers } from "redux";
import fetchApiReducer from "./commicReducer";
import fetchSinglePage from "./singleComicReducer";


export const rootReducer= combineReducers({
    fetchApiReducer,
    fetchSinglePage
})