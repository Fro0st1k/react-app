import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from '../store/reducers/root.reducer';
import thunk from 'redux-thunk';

export const makeStore = () => createStore(rootReducer, compose(applyMiddleware(thunk)));
