import {HIDE_LOADING, SHOW_LOADING} from './actionTypes.js';

export const hideLoading = () => {
    return {
        type: HIDE_LOADING
    }
}

export const showLoading = () => {
    return {
        type: SHOW_LOADING
    }
}