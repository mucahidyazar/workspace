import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Button from './components/Button';
import Input from './components/Input';
import ReducerButtons from './components/ReducerButtons';
import { GlobalProvider } from './components/GlobalState/index';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Head title="Some Title" isActive={true} />
        <Button onClick={(e) => {
          e.preventDefault();
          return "Hello";
        }} />
        <Input />
        <ReducerButtons />
      </div>
    </GlobalProvider>
  );
}

export default App;
