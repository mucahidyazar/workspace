import { PROMO_CODE_10 } from '../actions/types';

const initialState = {
    promo: 0
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROMO_CODE_10:
            return {
                ...state,
                promo: action.payload
            }
        default:
            return state;
    }
}

export default mainReducer;