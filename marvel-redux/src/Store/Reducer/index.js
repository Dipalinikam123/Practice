import { combineReducers } from "redux";
import fetchSinglePage from "./singleComicReducer";
import fetchCharApiReducer from "./characterReducer";
import fetchApiReducer from "./commicReducer";


export const rootReducer= combineReducers({
    fetchApiReducer,
    fetchSinglePage,
    fetchCharApiReducer
})