import { randomBoolen, createDataList, getScrollTop, setScrollTop } from '@/util';
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

export const changeCate = (cate, scroll) => {
    return {
        type: CHANGE_CATE,
        cate: cate,
        scroll: scroll
    };
};

export const superChangeCate = (prevCate, nextCate) => {
    return (dispatch, getState) => {
        dispatch(changeCate(nextCate, {
            prevCate: prevCate,
            scrollTop: getScrollTop()
        }))
        const y = getState()['record']['cate']['scroll'][nextCate] || 0
        window.scrollTo(0, 0)
        setTimeout(() => {
            console.log('getScrollTop(): ' + getScrollTop())
            console.log(y)
            window.scrollTo(0, y)
        }, 10)
    }
}