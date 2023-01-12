/* eslint-disable no-unused-vars */
import React from "react";
import Joi from "@hapi/joi";
import Form from "../../common/Form";

//REDUX CONNECTION
import { connect } from "react-redux";
//REDUX ACTIONS
import { register } from "../../../redux/actions";

class Register extends Form {
  state = {
    data: {
      username: "",
      email: "",
      password: "",
      repassword: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    email: Joi.string().required().label("Email"),
    password: Joi.string().required().label("Password"),
    repassword: Joi.string().required().label("Repassword"),
  };

  doSomething = (e) => {
    this.props.dispatch(
      register({
        username: this.state.data.username,
        email: this.state.data.email,
        password: this.state.data.password,
        repassword: this.state.data.repassword,
      })
    );
    //eslin
  };

  render() {
    const { data, errors } = this.state;

    return (
      <form className="registration__register" onSubmit={this.handleSubmit}>
        {this.renderInput("username", "Username")}
        {this.renderInput("email", "Email")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("repassword", "Repassword", "password")}
        {this.renderButton("Register")}
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Register);
