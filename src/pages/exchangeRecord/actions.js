import { randomBoolen, createDataList, getScrollTop } from '@/util';
import { FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE, CHANGE_CATE, DISSMISS_FETCH } from './actionTypes';

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
        dispatch(fetchStarted(cate));
        setTimeout(() => {
            if(true){
                dispatch(fetchSuccess(cate, createDataList()));
            }else{
                dispatch(fetchFailure(cate, 'error'));
            }
        }, 1000)
    };
};

export const changeCate = (cate) => {
    return {
        type: CHANGE_CATE,
        cate: cate
    };
};

export const superChangeCate = (cate) => {
    return (dispatch, getState) => {
        getScrollTop()
        dispatch(changeCate(cate))
        window.scrollTo(0, 0)
    }
}