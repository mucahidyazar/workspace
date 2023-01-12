import { delay, put, select, takeEvery } from "redux-saga/effects";
import { MainTypes } from "./action";
import { makeSelectBudget, makeSelectTotalExpenses } from "./selectors";

export function* addExpenseRequest() {
  yield takeEvery(MainTypes.ADD_EXPENSE_REQUEST, addExpenseSaga);
}

function* addExpenseSaga(expense) {
  const totalExpenses = yield select(makeSelectTotalExpenses);
  const budget = yield select(makeSelectBudget);
  const remaining = budget - totalExpenses;

  if (remaining < expense?.payload?.cost) {
    alert("You cant buy anymore!");
    return;
  }

  yield put({
    type: MainTypes.ADD_EXPENSE,
    payload: expense?.payload,
  });
}

export function* currentUserSaga() {
  yield delay(1000);
  console.log("User saga loop");
}
