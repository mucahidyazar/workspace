import * as actionTypes from './action';

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_ONE:
            return {
                ...state,
                count: state.count + action.addOne
            }
        case actionTypes.ADD_TEN:
            return {
                ...state,
                count: state.count + action.addTen
            }
        case actionTypes.ADD_TF:
            return {
                ...state,
                count: state.count + action.addTf
            }
        case actionTypes.RESET:
            return {
                ...state,
                count: 0
            }
        case actionTypes.MINUS_ONE:
            return {
                ...state,
                count: state.count - action.minusOne
            }
        case actionTypes.MINUS_TEN:
            return {
                ...state,
                count: state.count - action.minusTen
            }
        case actionTypes.MINUS_TF:
            return {
                ...state,
                count: state.count - action.minusTf
            }
        default:
            return state;
    }
}

export default reducer;