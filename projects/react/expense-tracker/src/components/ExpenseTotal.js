import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { makeSelectTotalExpenses } from "../containers/Main/selectors";

const ExpenseWrapper = styled.div``;
const ExpenseSpan = styled.span``;

const Expense = () => {
  const totalExpenses = useSelector(makeSelectTotalExpenses);
  return (
    <ExpenseWrapper className="alert alert-primary">
      <ExpenseSpan>Expense: {totalExpenses}</ExpenseSpan>
    </ExpenseWrapper>
  );
};

export default Expense;
