import React from "react";

const Input = props => {
  let inputElement = null;

  let invalidClass = "";
  if (props.invalid && props.shouldValidate && props.touched) {
    invalidClass = "input-element__invalid";
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={"input-element" + " " + invalidClass}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={"input-element" + " " + invalidClass}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className="input-element"
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className="input-element"
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  return (
    <div className="input">
      <label className="label" htmlFor="">
        {props.label}
      </label>
      {inputElement}
    </div>
  );
};

export default Input;
