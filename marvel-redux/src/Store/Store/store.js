import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { rootReducer } from '../Reducer/combineReducer';

 export const store=createStore(rootReducer, applyMiddleware(thunk) ) 