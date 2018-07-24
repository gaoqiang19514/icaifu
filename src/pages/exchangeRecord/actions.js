import axios from 'axios';

import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE, CHANGE_CATE } from './actionTypes';

export const fetchStarted = (cate) => {
    return {
        type: FETCH_STARTED,
        cate: cate
    };
};

export const fetchSuccess = (cate, list) => {
    return {
        type: FETCH_SUCCESS,
        cate: cate,
        list: list
    };
};

export const fetchFailure = (cate, error) => {
    return {
        type: FETCH_FAILURE,
        cate: cate,
        error: error
    };
};

export const fetchAsync = (page, cate) => {
    return (dispatch) => {
        // dispatch(fetchStarted(cate));

        axios.get('http://result.eolinker.com/xULXJFG7a8d149be1ed30d8132092c1987f99b9ee8f072d?uri=exchange_record')
            .then((response) => {
                dispatch(fetchSuccess(cate, response.data.list));
            })
            .catch((error) => {
                dispatch(fetchFailure(cate, error));
            })
            .finally(() => {
            });
    };
};

export const changeCate = (cate) => {
    return {
        type: CHANGE_CATE,
        cate: cate
    };
};