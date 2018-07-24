import { combineReducers } from 'redux';

import view from './views/home.js';
import * as actions from './actions';
import { bannerReducer, productReducer } from './reducer';

const reducer = combineReducers({
	banner: bannerReducer,
	product: productReducer
});


export { view, reducer, actions };