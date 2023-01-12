// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) { 
        case 'ADD_EXPENSE':
            //Burasi return state.concat(actiob.expense) 'de olabilirdi.
            return [
                ...state, action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => (
                expense.id !== action.id
            ));
        case 'EDIT_EXPENSE':
            return state.map((expense) =>{
                if (expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates //Bu yani action.updates ile gelen herseyi expense'in uzerine yazdirir. Ve map de o sekilde bir dizi olusturur.
                    }
                } else {
                    return expense;
                }
            })
        default: 
            return state;
    }
}

export default expensesReducer;