"use client"
import { combineReducers } from "redux";
import fetchApiReducer from "./comicReducer";
import fetchSinglePage from "./singlePageReducer";

export const rootReducer= combineReducers({
    fetchApiReducer,
    fetchSinglePage
    
})