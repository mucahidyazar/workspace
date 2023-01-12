/* eslint-disable no-unused-vars */
import React from "react";
import Joi from "@hapi/joi";
import Form from "../../common/Form";

//REDUX
import { connect } from "react-redux";
//REDUX ACTIONS
import { login } from "../../../redux/actions";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Email"), //label('Username') yaparak normalde "username" is not allowed to be empty gosterecegi hatadaki username'yi buyuk harfle baslatiyor
    password: Joi.string().required().label("Password"),
  };

  doSomething = (e) => {
    this.props.dispatch(
      login({
        email: this.state.data.email,
        password: this.state.data.password,
      })
    );
  };

  render() {
    const { data, errors } = this.state;

    return (
      <form className="registration__login" onSubmit={this.handleSubmit}>
        {this.renderInput("email", "Email")}
        {this.renderInput("password", "Password", "password")}
        {this.renderButton("Login")}
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Login);
