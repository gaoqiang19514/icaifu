import { TOGGLE_VIEW } from './actionTypes';

const STORAGE_SIGN = 'icaifu_storage_toggle_view';

const initialState = {
    viewFlag: !!localStorage.getItem(STORAGE_SIGN)
};

export default (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_VIEW:
            localStorage.setItem(STORAGE_SIGN, state.viewFlag);
            return {
                viewFlag: !state.viewFlag
            };
        default:
            return {
                ...state
            };
    }
}