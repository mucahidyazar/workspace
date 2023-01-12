import React, { Component } from "react";
import Joi from "@hapi/joi";
import Input from "../Input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const result = Joi.object(this.schema).validate(this.state.data, {
      abortEarly: false, //Tum formu kontrol etmeden ilk erroru gondermesini kapatiyoruz ve tum hatalari yakaliyoruz
    });
    console.log("Result", result);
    Joi.valid();

    if (!result.error) return null;
    const errors = {};

    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;

    //OLDWAY
    // const errors = {};
    // const { data } = this.state;
    // if (data.username.trim() === "")
    //   errors.username = "Username is required.";
    // if (data.password.trim() === "")
    //   errors.password = "Password is required.";
    // return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty = ({ name, value }) => {
    console.log(name);
    console.log(value);

    const { error } = this.schema[name].validate(value);
    return error ? error.details[0].message : null;

    // const obj = Joi.object({
    //   [name]: Joi.string().required().label("Username"),
    // });
    // const result = obj.validate({ name: value });
    // console.log(result);
    // if (name === "username") {
    //   if (value.trim() === "") return "Username is required!";
    // }

    // if (name === "password") {
    //   if (value.trim() === "") return "Password is required!";
    // }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSomething();
  };

  handleChange = (e) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];

    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({
      ...this.state,
      data,
      errors,
    });
  };

  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        className="registration__login--button"
      >
        {label}
      </button>
    );
  }

  renderInput(name, placeholder, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        className="registration__login--password"
        error={errors[name]}
        name={name}
        onChange={this.handleChange}
        placeholder={placeholder}
        type={type}
        value={data[name]}
      />
    );
  }
}

export default Form;
