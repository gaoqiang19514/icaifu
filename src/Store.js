import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import {reducer as authReducer} from './auth'
import {reducer as loadingReducer} from './common/loading'

const reducer = combineReducers({
	auth: authReducer,
	loading: loadingReducer
})

export default createStore(reducer)