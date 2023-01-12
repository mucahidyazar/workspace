import React from "react";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const ExpenseItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ExpenseItemWrapperDiv = styled.div``;
const ExpenseItemWrapperSpan = styled.span`
  margin-right: 3px;
`;

const ExpenseItem = (props) => {
  const dispatch = useDispatch();

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  return (
    <ExpenseItemWrapper className="list-group-item">
      {props.name}
      <ExpenseItemWrapperDiv>
        <ExpenseItemWrapperSpan className="badge badge-primary badge-pill">
          £{props.cost}
        </ExpenseItemWrapperSpan>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </ExpenseItemWrapperDiv>
    </ExpenseItemWrapper>
  );
};

export default ExpenseItem;
