import axios from 'axios';

import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE, FETCH_PRODUCT_STARTED, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from './actionTypes';



export const fetchListStarted = () => {
    return {
        type: FETCH_STARTED
    };
};

export const fetchListSuccess = (result) => {
    return {
        type: FETCH_SUCCESS,
        result: result
    };    
};

export const fetchListFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        error: error
    };    
};

export const fetchListAsync = (callback) => {
    return (dispatch) => {
        dispatch(fetchListStarted());

        axios.get('http://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=banners')
        .then((response) => {
            dispatch(fetchListSuccess(response.data.list));
            callback && callback();
        })
        .catch((error) => {
            dispatch(fetchListFailure(error));
        })
        .finally(() => {
        });
    };
};


// product
export const fetchProductStarted = () => {
    return {
        type: FETCH_PRODUCT_STARTED
    };
};

export const fetchProductSuccess = (result) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        result: result
    };    
};

export const fetchProductFailure = (error) => {
    return {
        type: FETCH_PRODUCT_FAILURE,
        error: error
    };    
};

export const fetchProductAsync = (callback) => {
    return (dispatch) => {
        dispatch(fetchProductStarted());

        axios.get('http://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=home_product_list')
        .then((response) => {
            dispatch(fetchProductSuccess(response.data.list));
            callback && callback();
        })
        .catch((error) => {
            dispatch(fetchProductFailure(error));
        })
        .finally(() => {
        });
    };
};