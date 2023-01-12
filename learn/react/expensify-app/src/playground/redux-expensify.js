import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';




store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000}));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, {amount : 500}));

store.dispatch(setTextFilter('rent'));
store.dispatch(sortByDate());
store.dispatch(sortByAmount());

//Alt satirla siralamada birisi gozukur. 125 expenseONe ve expenseTwo icin ikisininde 125 olarak ayarlanir. Fakat expenseOne createdAt 125 den buyuk oldugu icin siralama fonskyionumuzdan true doner ve gosterilir bu dispatch le.
store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'd2a5sd1a5das2das',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount, you can choose
        startDate: undefined,
        endDate: undefined
    }
};

