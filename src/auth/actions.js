import {LOGIN_AUTH, LOGOUT_AUTH} from './actionTypes.js';

export const login = (token) => ({
	token: token,
	type: LOGIN_AUTH
})

export const logout = () => ({
	type: LOGOUT_AUTH
})
