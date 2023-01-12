import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { makeSelectExpenses } from "../containers/Main/selectors";
import ExpenseItem from "./ExpenseItem";

const ExpenseListWrapper = styled.ul``;

const ExpenseList = () => {
  const expenses = useSelector(makeSelectExpenses);

  return (
    <ExpenseListWrapper className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
        />
      ))}
    </ExpenseListWrapper>
  );
};

export default ExpenseList;
