import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, isLogged } from './actions/index';

function App() {
  const selector = useSelector(state => state.counter)
  const logged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
    
      <h1>Counter : {selector}</h1>
      <button onClick={() => dispatch(increment(15))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(isLogged())}>Login</button>
      {
        logged && <h3>Valuable information I shouldn't see</h3>
      }

    </div>
  );
}



export default App;