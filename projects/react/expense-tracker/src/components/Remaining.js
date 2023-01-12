import React from "react";
import styled from "styled-components";
import {
  makeSelectTotalExpenses,
  makeSelectBudget,
} from "../containers/Main/selectors";
import { useSelector } from "react-redux";

const RemainingWrapper = styled.div``;
const RemainingSpan = styled.span``;

const Remaining = () => {
  const totalExpenses = useSelector(makeSelectTotalExpenses);
  const budget = useSelector(makeSelectBudget);
  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    <RemainingWrapper className={`alert alert-${alertType}`}>
      <RemainingSpan>Remaining: £{budget - totalExpenses}</RemainingSpan>
    </RemainingWrapper>
  );
};

export default Remaining;
