import { createStore } from 'redux';

// Reducers
// Bunlarin hepsi createStore 'un icindeken simdi countReducer degiskeninin icine attik
// Ve countReducer 'ida onun icine koyduk. Bir nevi yine ayni islemi yapiyoruz.
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.setBy
            }
        case 'RESET':
            return {
                count: action.resetBy
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);


const unsubscribe = store.subscribe(() =>{    
    console.log(store.getState());
});


const incrementCount = ( { incrementBy = 5 } = { } ) => ({
    type: 'INCREMENT',
    incrementBy //Buradada aslinda incrementBy obje elemani paramtez icindeki incrementBy obje elemanina esitleniyor. Parantez icindeki incrementBy atanmissa o degere sahip oluyor atanmamissa default degeri 1 e sahil oluyor.
})
store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 10}));


const decrementCount = ( { decrementBy = 1 } = { } ) => ({
    type: 'DECREMENT',
    decrementBy
})
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 5}));


const setCount = ( { setBy } ) => ({
    type: 'SET',
    setBy
});store.dispatch(setCount({ setBy: 100 }));


const resetCount = ( { resetBy = 0 } = { } ) => ({
    type: 'RESET',
    resetBy
})
store.dispatch(resetCount());
store.dispatch(resetCount({ resetBy: 200 }));
unsubscribe();


