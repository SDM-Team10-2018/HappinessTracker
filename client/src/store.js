import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

// [Future Sprint] - Setting up for Redux
const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware)
));


export default store;