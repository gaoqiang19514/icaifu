import {LOGIN_AUTH, LOGOUT_AUTH, ISLOGIN, ISLOGOUT} from './actionTypes.js';

const initData = {
	token: localStorage.getItem('token')
}

export default (state = initData, action) => {
    const { type, token } = action

	switch(type){
		case LOGIN_AUTH:
			localStorage.setItem('token', token)
			return {
				...state,
				isAuthenticated: true
			}
		case LOGOUT_AUTH:
			localStorage.removeItem('token')
			return {
				...state,
				isAuthenticated: null
			}
		default:
			return {
                ...state
            }
	}
}