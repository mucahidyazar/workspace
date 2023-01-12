import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

import {
    addExpense,
    removeExpense,
    editExpense
} from './actions/expenses';
import { 
    setTextFilter, 
    sortByDate, 
    sortByAmount,  
    setStartDate,
    setEndDate
} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'

const store = configureStore();

console.log(store.getState());
console.log(store.dispatch(addExpense({description: 'Water bill', amount: 100, createdAt: 1568})));
console.log(store.dispatch(addExpense({description: 'Rent', amount: 850, createdAt: 458})));
console.log(store.dispatch(addExpense({description: 'Cell Phone', amount: 1500, createdAt: 358})));
console.log(store.dispatch(addExpense({description: 'Gas bill', amount: 50, createdAt:550})));


//Eger boyle yaparsak yukarida ki dispatch bill olarak cikardigi sey 2 saniye sonra Fatura ya donusecek.
// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 2000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

//Provider
//Provider bize tum componentlarimiza STORE ile etkilesime girmemize ve uygulamamizi yapmamizi, ayaga kaldirmamizi sagliyor.
//Tek yapmamiz asagida tanimladigimiz degiskenin icine yazdigimiz AppRouter'i <Provider> tagleri icine almak
//ve Provider'a props olarak store tanimlamak.
//store props 'una yukarida configureStore(); atadigimiz store degiskenini yaziyoruz.
//Ve artik tum Component larimiz STORE 'a erisebilir.
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx , document.getElementById('app'));