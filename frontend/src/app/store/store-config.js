import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../store/reducers/root.reducer';
import thunkMiddleware from 'redux-thunk';

export const makeStore = () => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));





