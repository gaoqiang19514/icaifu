import {LOGIN_AUTH, LOGOUT_AUTH} from './actionTypes.js';

const data = {
	isAuthenticated: false,
	token: localStorage.getItem('token')
}

export default (state = data, action) => {
	switch(action.type){
		case LOGIN_AUTH:
			localStorage.setItem('token', action.token)
			return {
				...state,
				token: action.token,
				isAuthenticated: true
			}
		case LOGOUT_AUTH:
			localStorage.removeItem('token')
			return {
				...state,
				token: null,
				isAuthenticated: false
			}
		default:
			return state
	}
}