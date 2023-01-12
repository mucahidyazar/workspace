import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';


//STORE -- GLOBALIZED STATE Tum datalari tutan state dir.

//ACTION -- Yapmak istediklerimiz Eylemleri tutan fonksiyondur diyebiliriz.
//Obje donen fonksiyonlardir
const increment = () => {
    return {
        type: 'INCREMENT'
    }
}
const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

//REDUCER -- Hangi actions lari harekete gecirdigimizi kontrol eder
const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
let store = createStore(counter);
store.subscribe(() => console.log(store.getState()));


//DISPATCH -- Reducer i harekete gecirir.
store.dispatch(increment());



ReactDOM.render(<App />, document.getElementById('root'));