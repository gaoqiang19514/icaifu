import {LOGIN_AUTH, LOGOUT_AUTH, ISLOGIN, ISLOGOUT} from './actionTypes.js';

const data = {
	isAuthenticated: sessionStorage.getItem('isAuthenticated') || null,
	token: localStorage.getItem('token')
}


export default (state = data, action) => {
	switch(action.type){
		case LOGIN_AUTH:
			localStorage.setItem('token', action.token)
			sessionStorage.setItem('isAuthenticated', true)
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
				isAuthenticated: null
			}
		case ISLOGIN:
			sessionStorage.setItem('isAuthenticated', true)
			return {
				...state,
				isAuthenticated: true				
			}
		case ISLOGOUT:
			sessionStorage.setItem('isAuthenticated', null)
			localStorage.removeItem('token')
			return {
				...state,
				isAuthenticated: null				
			}
		default:
			return state
	}
}