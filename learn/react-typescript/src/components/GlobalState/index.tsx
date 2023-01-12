import React, { createContext, useReducer } from 'react';

export const initialValues = {
  rValue: true,
  turnOn: () => { },
  turnOff: () => { }
}

export const GlobalContext = createContext(initialValues);




type State = { rValue: boolean; }
type Action = {
  type: "one" | "two";
  payload?: any;
}
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'one':
      return { rValue: true }
    case 'two':
      return { rValue: false }
    default:
      return state;
  }
}




export const GlobalProvider: React.FC = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <GlobalContext.Provider value={{
      rValue: state.rValue,
      turnOn: () => dispatch({ type: 'one' }),
      turnOff: () => dispatch({ type: 'two' })
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

