import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import Thunk from 'redux-thunk';

const middlewares = [Thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
