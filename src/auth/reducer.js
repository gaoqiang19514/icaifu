import {LOGIN_AUTH, LOGOUT_AUTH, SAVE_TOKEN_AUTH} from './actionTypes.js';

let isAuthenticated = false
let token = window.localStorage.getItem('token')

if(token){
	isAuthenticated = true
}

export default (state = isAuthenticated, action) => {
	switch(action.type){
		case LOGIN_AUTH:
			return true
		case LOGOUT_AUTH:
			window.localStorage.removeItem('token')
			return false
		case SAVE_TOKEN_AUTH:
			window.localStorage.setItem('token', action.token)
			return state
		default:
			return state
	}
}