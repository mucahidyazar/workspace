function createStore(initialState = {}) {
  let currentState = initialState
  const listeners = new Set<any>()

  return {
    getState: (): any => currentState,
    setState: (newState: any) => {
      currentState = newState
      listeners.forEach(listener => listener(currentState))
    },
    subscribe: (listener: any): any => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
  }
}

const store = createStore({
  value1: 0,
  value2: 0,
})

export {store}
