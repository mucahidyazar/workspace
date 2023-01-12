import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";
import PropTypes from "prop-types";

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      email
      name
    }
  }
`;

class Reset extends Component {
  static propTypes = {
    resetToken: PropTypes.string.isRequired,
  };

  state = {
    password: "",
    confirmPassword: "",
  };

  saveToState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Mutation
        //Bunun anlami singnup olduktan sonra mutation apollo server'e refetchQueries ile tekrar yakalanmasi gereken query'leri soyluyor.
        //Ve useri tekrar yakalatarak sayfada giris yapilir yaspilmaz guncel kullaniciyi gorebilecegiz.
        //Istersek icine variablesda verebilridik ama gerek yok burada
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        mutation={RESET_MUTATION}
        variables={{
          resetToken: this.props.resetToken,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
        }}
      >
        {(reset, { loading, error, called }) => {
          return (
            <Form
              method="post"
              onSubmit={async (e) => {
                e.preventDefault();
                await reset();
                this.setState({ password: "", confirmPassord: "" });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Reset your password</h2>
                <Error error={error} />
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="confirmPassword">
                  Confirm Your Password
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={this.state.confirmPassword}
                    onChange={this.saveToState}
                  />
                </label>
                <button type="submit">Reset Your Password</button>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default Reset;
