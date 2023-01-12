//2. ASAMA

const counter = (counter=0, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return counter + action.payload;
        case 'DECREASE_COUNTER':
            return counter - action.payload;
        case 'INCREASE_BY_TWO_COUNTER':
            return counter + action.payload;
        default:
            return counter;
    }
}

export default counter;