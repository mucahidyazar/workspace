//3. ASAMA
//Burada Reducer 'larimizi bir araya getirip toplu tanimlarini yapmis oluyoruz.


// 4. ASAMA
//configureStore ye sadece createStore ve reducers larin import ediyoruz.
//Ve configureStore adinda bir fonksiyon olusturuyoruz 
//Bu fonksiyonda redux 'dan cagirdigimiz createStore 'ye reducer 'larimizi tanimladigimiz daha sonra export edip buraya import ettigimiz reducers degiskenini createStore icine yerlestiriyoruz. configure Store bize bunu bu ornekteki gibi return ediyor. return createStore(reducers);

import { createStore, combineReducers } from 'redux';
import counter from './counter.reducer';

export default () => {
    const store = createStore(
        combineReducers({
            counter: counter
        })
    )
    return store;
}