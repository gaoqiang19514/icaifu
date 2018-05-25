import {TOGGLE_VIEW} from './actionTypes'

let flag = localStorage.getItem('view_num')

export default (state = flag, action) => {
    switch(action.type){
        case TOGGLE_VIEW:
            localStorage.setItem('view_num', state)
            return !state
        default:
            return state
    }
}