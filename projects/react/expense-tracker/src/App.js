import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import styled from "styled-components";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { store } from "./store";
import { Provider } from "react-redux";

const AppWrapper = styled.div``;
const AppHeading = styled.h1`
  margin-top: 12px;
`;
const AppHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  margin-top: 12px;
`;
const ExpensesHeading = styled.h3`
  margin-top: 12px;
`;
const ExpenseListWrapper = styled.div`
  margin-top: 12px;
`;
const AddExpenseHeading = styled.h3`
  margin-top: 12px;
`;
const AddExpenseWrapper = styled.div`
  margin-top: 12px;
`;

const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper className="container">
        <AppHeading>My Budget Planner</AppHeading>
        <AppHeader>
          <Budget />
          <Remaining />
          <ExpenseTotal />
        </AppHeader>
        <ExpensesHeading>Expenses</ExpensesHeading>
        <ExpenseListWrapper>
          <ExpenseList />
        </ExpenseListWrapper>
        <AddExpenseHeading>Add Expense</AddExpenseHeading>
        <AddExpenseWrapper>
          <AddExpenseForm />
        </AddExpenseWrapper>
      </AppWrapper>
    </Provider>
  );
};

export default App;
