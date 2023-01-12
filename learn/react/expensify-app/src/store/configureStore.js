import { createStore, combineReducers } from "redux";
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

//Combinereducers'lar bumbuyu reducer 'lar yerine kucuk multiple reducur lara ayirmamiza yariyor uygulamamizi.
//createStore icine combineReducers 'larimizi fonksiyon olarak yaziyoruz. Ve o fonksiyonun icindede argumet olarak bir obje olucak
//Bu objeler 1 value ve 1 ke y olmak zorundadir. Ama bu ornek icin demoState 'den dolayi 2 VALUE ve 2 KEY 'muz vardir. 
//Bunlardan expenses ve filters VALUE 'dir
//yukaridaki tanimladigimiz expensesReducer ise KEY 'dir.

// Store Creation
export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer 
        }),
        //Alttaki satiri eklememizin nedeni chrome redux eklentisini kullanabilmek
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};