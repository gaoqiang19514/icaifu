import {HIDE_LOADING, SHOW_LOADING} from './actionTypes.js';

export default (state = false, action) => {
    switch(action.type){
        case HIDE_LOADING:
            return false
        case SHOW_LOADING:
            return true
        default:
            return state
    }
}