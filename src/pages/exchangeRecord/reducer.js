import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE, CHANGE_CATE } from './actionTypes';

const getData = (state = {
    status: 'loading',
    isInfiniteLoading: false,
    items: []
}, action) => {
    switch(action.type){
        case FETCH_STARTED:
            return {
                ...state,
                isInfiniteLoading: true,
                status: 'loading'
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                status: 'success',
                isInfiniteLoading: false,
                items: [
                    ...state.items,
                    ...action.list
                ]
            };          
        case FETCH_FAILURE:
            return {
                ...state,
                isInfiniteLoading: false,
                status: 'failure',
                error: action.error
            };     
        default:
            return state;
        }
}

export const list = (state = {}, action) => {
    switch (action.type) {
        case FETCH_STARTED:
        case FETCH_SUCCESS:
        case FETCH_FAILURE:
            return {
                ...state,
                [action.cate]: getData(state[action.cate], action)
            };
        default:
            return state;
    }
}


const initialSelectedCateState = 'all';
export const cate = (state = initialSelectedCateState, action) => {
    switch(action.type){
        case CHANGE_CATE:
            return action.cate;
        default:
            return state;
    }
}