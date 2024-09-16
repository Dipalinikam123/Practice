
import { applyMiddleware, createStore } from 'redux';
import {thunk} from 'redux-thunk'; // Corrected import for thunk
import { rootReducer } from './reducers/rootReducer';

export const store = createStore(rootReducer, applyMiddleware(thunk));
