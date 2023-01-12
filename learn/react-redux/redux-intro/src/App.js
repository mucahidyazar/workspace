import React from 'react';
import './App.css';
import Counter from './components/Counter';
import DecreaseCounter from './components/DecreaseCounter';
import IncreaseCounter from './components/IncreaseCounter';
import IncreaseByTwoCounter from './components/IncreaseByTwoConter';

function App() {
  return (
    <div className="App">
      <h1>Redux Intro</h1>
      <Counter />
      <IncreaseCounter />
      <DecreaseCounter />
      <IncreaseByTwoCounter />
    </div>
  );
}

export default App;
