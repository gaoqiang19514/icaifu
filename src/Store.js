import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { reducer as authReducer } from './common/auth';
import { reducer as loadingReducer } from './common/loading';
import { reducer as userReducer } from './pages/user';
import { reducer as homeReducer } from './pages/home';

const reducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	loading: loadingReducer,
	home: homeReducer
});

const middlewares = [thunkMiddleware];

if(process.env.NODE_ENV !== 'production'){
    // do something...
}

const storeEnhancers = compose(
    applyMiddleware(...middlewares)
);

export default createStore(reducer, storeEnhancers);