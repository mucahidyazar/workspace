import React, { useRef, useContext } from 'react';
import { useClickOutside } from '../useClickOutside';
import { GlobalContext } from '../GlobalState';

const ReducerButtons = () => {
  const ref = useRef<HTMLDivElement>(null!);

  const context = useContext(GlobalContext);
  const { rValue, turnOn, turnOff } = context;

  useClickOutside(ref, () => console.log('Clicked Outside'))

  return (
    <div ref={ref}>
      {rValue && <h1>Visible</h1>}
      <button onClick={turnOn}>Action One</button>
      <button onClick={turnOff}>Action Two</button>
    </div>
  )
}

export default ReducerButtons;