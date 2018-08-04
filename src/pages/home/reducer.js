import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE, FETCH_PRODUCT_STARTED, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from './actionTypes';

const initialState = {
    status: 'loading',
    banners: null
};

export const bannerReducer = (state = initialState, action) => {
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
                ready: false,
                status: 'failure',
                error: action.error
            };
        default:
            return state;
    }
};

const productInitialState = {
    status: 'loading',
    ready: false,
    list: {
        ienjoy: [],
        jiplan: []
    }
};

export const productReducer = (state = productInitialState, action) => {
    switch(action.type){
        case FETCH_PRODUCT_STARTED:
            return {
                ...state,
                ready: false,
                status: 'loading'
            };
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                ready: true,
                status: 'success',
                list: action.result
            };
        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                ready: false,
                status: 'failure',
                error: action.error
            };
        default:
            return state;
    }
};