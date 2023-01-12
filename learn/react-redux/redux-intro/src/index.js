//Once ConfigureStore mizi import ediyoruz.
//Sonra react redux 'dan Provider 'imizi cekiyoruz yani improt ediyoruz.
//Sonra Render edilen component 'i Provider icine aliyoruz.
//Provider 'a store olarak reducerlarimizin ve createStore nin import edildigi ortak dosya configureStore dosyamizi buraya import ediyoruz ve ardindan onu bir degiskene tanimliyoruz. sonuna () isaretini unutmuyoruz. ORNEK const store = configureStore(); // Genelde store olur bu degiskenin adi. Ve daha sonra bu Provider icinde store olarak tanimlanir. Ornek => <Provider store={store}> <App /> </Provider>

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './redux/reducers/configure.store';
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render( <Provider store={store}> <App /> </Provider> , document.getElementById('root'));