import { createSelector } from "reselect";

export const makeSelectBudget = createSelector(
  (state) => state.main,
  (main) => main.budget
);
export const makeSelectExpenses = createSelector(
  (state) => state.main,
  (main) => main.expenses
);

export const makeSelectTotalExpenses = createSelector(
  (state) => state.main,
  (main) =>
    main.expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0)
);
