import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';

const initialState = {
    status: 'loading',
    banners: null
};

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_STARTED:
            return {
                ...state,
                status: 'loading'
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                status: 'success',
                banners: action.result
            };
        case FETCH_FAILURE:
            return {
                ...state,
                status: 'failure',
                error: action.error
            };
        default:
            return state;
    }
};