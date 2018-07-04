import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import {reducer as authReducer} from './common/auth'
import {reducer as loadingReducer} from './common/loading'
import {reducer as userReducer} from './pages/user'

const reducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	loading: loadingReducer
})

export default createStore(reducer)