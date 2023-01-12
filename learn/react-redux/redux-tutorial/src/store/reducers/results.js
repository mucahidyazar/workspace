import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: Date.now(), value:action.result})
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
}

export default reducer;