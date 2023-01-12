import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import MainActions from "../containers/Main/action";

const AddExpenseFormWrapper = styled.form``;
const AddExpenseName = styled.div``;
const AddExpenseNameLabel = styled.label``;
const AddExpenseNameInput = styled.input``;
const AddExpenseCost = styled.div``;
const AddExpenseCostLabel = styled.label``;
const AddExpenseCostInput = styled.input``;
const AddExpenseSubmitWrapper = styled.div``;
const AddExpenseSubmitButton = styled.button`
  margin-top: 12px;
`;

const AddExpenseForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch(MainActions.addExpenseRequest(expense));
  };

  return (
    <AddExpenseFormWrapper onSubmit={onSubmit}>
      <AddExpenseName>
        <AddExpenseNameLabel htmlFor="name">Name</AddExpenseNameLabel>
        <AddExpenseNameInput
          required="required"
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></AddExpenseNameInput>
      </AddExpenseName>
      <AddExpenseCost>
        <AddExpenseCostLabel>Cost</AddExpenseCostLabel>
        <AddExpenseCostInput
          required="required"
          type="text"
          className="form-control"
          id="cost"
          value={cost}
          onChange={(event) => setCost(event.target.value)}
        ></AddExpenseCostInput>
      </AddExpenseCost>
      <AddExpenseSubmitWrapper>
        <AddExpenseSubmitButton type="submit" className="btn btn-primary">
          Save
        </AddExpenseSubmitButton>
      </AddExpenseSubmitWrapper>
    </AddExpenseFormWrapper>
  );
};

export default AddExpenseForm;
