import {LOGIN_AUTH, LOGOUT_AUTH, ISLOGIN, ISLOGOUT} from './actionTypes.js';
import axios from 'axios';

const auth = localStorage.getItem('token')

const initData = {
	isAuthenticated: !!auth
}

if(!!auth){
	axios.defaults.headers.common['Authorization'] = auth;
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