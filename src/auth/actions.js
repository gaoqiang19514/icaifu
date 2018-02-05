import {LOGIN_AUTH, LOGOUT_AUTH, SAVE_TOKEN_AUTH} from './actionTypes.js';

export const login = () => {
	return {
		type: LOGIN_AUTH
	}
}

export const logout = () => ({
	type: LOGOUT_AUTH
})

export const saveToken = (token) => ({
	type: SAVE_TOKEN_AUTH,
	token: token
})