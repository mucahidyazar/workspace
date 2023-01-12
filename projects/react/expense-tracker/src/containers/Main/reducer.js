import { createReducer } from "reduxsauce";
import produce from "immer";
import { MainTypes } from "./action";

export const initialState = {
  budget: 2000,
  expenses: [
    { id: 12, name: "shopping", cost: 40 },
    { id: 13, name: "holiday", cost: 400 },
    { id: 14, name: "car service", cost: 50 },
  ],
};

const addExpense = (state, action) =>
  produce(state, (draft) => {
    draft.expenses = [...state.expenses, action.payload];
  });

const deleteExpense = (state, action) =>
  produce(state, (draft) => {
    draft.expenses = draft.expenses.filter(
      (expense) => expense.id !== action.payload
    );
  });

export const HANDLERS = {
  [MainTypes.ADD_EXPENSE]: addExpense,
  [MainTypes.DELETE_EXPENSE]: deleteExpense,
};

export default createReducer(initialState, HANDLERS);
