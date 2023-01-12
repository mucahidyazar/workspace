import * as actionTypes from '../store/actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: Date.now(), value:state.counter})
            }
        case actionTypes.DELETE_RESULT:
            // FIRST WAY - SPLICE
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 1)

            // SECOND WAY - FILTER
            const updatedArray = state.results.filter((result) => result.id !== action.resultId)
            return {
                ...state,
                results: updatedArray
            }

        default:
            return state;
    }
    return state;
}

export default reducer;