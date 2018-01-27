import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import {reducer as authReducer} from './auth'

const reducer = combineReducers({
	auth: authReducer
})

export default createStore(reducer)