import {LOGIN_AUTH, LOGOUT_AUTH, ISLOGIN} from './actionTypes.js';

export const login = (token) => ({
	token: token,
	type: LOGIN_AUTH
})

export const logout = () => ({
	type: LOGOUT_AUTH
})

export const islogin = () => ({
	type: ISLOGIN
})