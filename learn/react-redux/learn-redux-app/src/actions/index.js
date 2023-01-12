export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    }
}

export const decrement = () => ({type: 'DECREMENT'});

export const isLogged = () => ({type: 'SIGN_IN'})