const account = {
  name: "Mucahid Yazar",
  expenses: [],
  incomes: [],
  addExpense: function (description, amount) {
    this.expenses = [...this.expenses, { description, amount }];
  },
  addIncome: function (description, amount) {
    this.incomes.push({ description, amount });
  },
  getAccountSummary: function () {
    let totalExpenses = 0;
    let totalIncomes = 0;
    let balance;
    this.expenses.forEach((exp) => {
      totalExpenses += exp.amount;
    });
    account.incomes.forEach((inc) => {
      totalIncomes += inc.amount;
    });
    balance = totalIncomes - totalExpenses;
    console.log(
      `${this.name} has a balance $${balance}. $${totalIncomes} in income. $${totalExpenses} in expenses`
    );
  },
};

// Expense => description(Coffee), amount(2.5)
// addExpense => (description, amount)
// getAccountSummary => total up all expenses => Andrew Mead has $1250 in expenses
console.log(account.getAccountSummary());
account.addExpense("Rent", 950);
account.addIncome("Web design", 1500);
console.log(account.expenses);
console.log(account.getAccountSummary());
account.addExpense("Coffee", 2.5);
console.log(account.expenses);
console.log(account.getAccountSummary());
