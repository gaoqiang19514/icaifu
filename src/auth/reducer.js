import {LOGIN_AUTH, LOGOUT_AUTH} from './actionTypes.js';

const isAuthenticated = false

export default (state = isAuthenticated, action) => {
	switch(action.type){
		case LOGIN_AUTH:
			return true
		case LOGOUT_AUTH:
			return false
		default:
			return state
	}
}