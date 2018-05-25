import {LOGIN_AUTH, LOGOUT_AUTH, ISLOGIN, ISLOGOUT} from './actionTypes.js';

export const login = (token) => {
    localStorage.setItem('tokne', token)
    return {
        token: token,
        type: LOGIN_AUTH
    }
}

export const logout = () => {
    localStorage.removeItem('token')
    return {
        type: LOGOUT_AUTH
    }
}

export const islogin = () => ({
	type: ISLOGIN
})

export const islogout = () => ({
	type: ISLOGOUT
})