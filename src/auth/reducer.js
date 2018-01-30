import {LOGIN_AUTH, LOGOUT_AUTH, SAVE_TOKEN_AUTH} from './actionTypes.js';

const data = {
	isAuthenticated: false,
	token: window.sessionStorage.getItem('token')
}

export default (state = data, action) => {
	switch(action.type){
		case LOGIN_AUTH:
			return {
				...state,
				isAuthenticated: true
			}
		case LOGOUT_AUTH:
			return {
				...state,
				isAuthenticated: false
			}
		case SAVE_TOKEN_AUTH:
			window.sessionStorage.setItem('token', action.token)
			return {
				...state,
				token: action.token
			}
		default:
			return state
	}
}