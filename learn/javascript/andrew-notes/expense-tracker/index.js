let myAccount = {
  name: "Mucahid Yazar",
  expenses: 0,
  income: 0,
};

//addExpense
const addExpenses = (account, amount) => {
  account.expenses += amount;
};

//addIncome
const addIncome = (account, income) => {
  account.income += income;
};

//resetAcccount
const resetAcccount = (account) => {
  account.expenses = 0;
  account.income = 0;
};

//getAccountSummary
const getAccountSummary = (account) => {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 2000);
addExpenses(myAccount, 2.5);
addExpenses(myAccount, 160);
console.log(getAccountSummary(myAccount));
resetAcccount(myAccount);
console.log(getAccountSummary(myAccount));
