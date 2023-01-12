//Ilk basta bu ikisini HTML sayfasina import ediyorduk ama simdi direk dosyaya import ediyoruz. Bu yuzden daha sonra bunlari dosyalarimiza ekledik. Ilk basta 2 sininde CDN kodu index.html de idi
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss'

ReactDOM.render( <IndecisionApp />, document.getElementById('app'));