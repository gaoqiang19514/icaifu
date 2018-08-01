import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE, CHANGE_CATE, DISSMISS_FETCH } from './actionTypes';

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
        case DISSMISS_FETCH:
            return {
                ...state,
                isInfiniteLoading: false
            }
        default:
            return state;
        }
}

export const list = (state = {}, action) => {
    switch (action.type) {
        case FETCH_STARTED:
        case FETCH_SUCCESS:
        case FETCH_FAILURE:
        case DISSMISS_FETCH:
            return {
                ...state,
                [action.cate]: getData(state[action.cate], action)
            };
        default:
            return state;
    }
}


const scroll = (state = { 'all': 0 }, action) => {
    return {
        ...state,
        [action.scroll.prevCate]: action.scroll.scrollTop
    }
}

const initialSelectedCateState = {
    type: 'all',
    scroll: {
        'all': 0
    }
};
export const cate = (state = initialSelectedCateState, action) => {
    switch(action.type){
        case CHANGE_CATE:
            const result = scroll(state.scroll, action)
            return {
                type: action.cate,
                scroll: result
            };
        default:
            return state;
    }
}