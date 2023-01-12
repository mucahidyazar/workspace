import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';
import './index.css';
import App from './App';

const rootReducer = combineReducers({
    ctr: counterReducer,
    rslts: resultsReducer
})
//Tek reducer varken this.state ile istedigimiz yere ulasabiliriz.
//Fakat reducers lari combine ederken this.ctr/res.state (yukaridaki ornege gore verilmsitir) ulasabiliriz. Yani degisiklik yapmaniz gerekiyorsa diger componentlarda buna gore degisiklik yapin yoksa hata alrisiniz.
const store = createStore(rootReducer);


ReactDOM.render( <Provider store={store}><App /></Provider> , document.getElementById('root'));
