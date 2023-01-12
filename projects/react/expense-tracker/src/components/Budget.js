import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { makeSelectBudget } from "../containers/Main/selectors";

const BudgetWrapper = styled.div``;
const BudgetSpan = styled.span``;

const Budget = () => {
  const budget = useSelector(makeSelectBudget);

  return (
    <BudgetWrapper className="alert alert-secondary">
      <BudgetSpan>Budget: £{budget}</BudgetSpan>
    </BudgetWrapper>
  );
};

export default Budget;
