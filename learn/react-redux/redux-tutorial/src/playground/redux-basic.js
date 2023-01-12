const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Reducer => Reducer 2 argument alir. State ve Action. State prevState gibi dusunun.
const rootReducer = (state = initialState, action) => {
    switch (action.type ) {
        case 'INC_COUNTER':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'ADD_COUNTER':
            return {
                ...state,
                counter: state.counter + action.value
            }
        default:
            return state;
    }
}

//Store
const store = createStore(rootReducer);

//Subscribtion
store.subscribe(() => {
    console.log('[Subscribtion', store.getState());
});


//Dispatching Action
//dispatch icine bir obje alir.
//Ve bu obje 2 argument alir. 1. type 2. si ise istedigimiz herhangi bir isimle cagrilabilir. Genelde payload diyorlar.
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });