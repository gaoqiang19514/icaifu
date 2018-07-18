import axios from 'axios';

import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE } from './actionTypes';

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