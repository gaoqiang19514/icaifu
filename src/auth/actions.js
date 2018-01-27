import {LOGIN_AUTH, LOGOUT_AUTH} from './actionTypes.js';

export const login = (callback) => {
	return {
		type: LOGIN_AUTH,
		cb: callback
	}
}

export const logout = (callback) => ({
	type: LOGOUT_AUTH,
	cb: callback
})