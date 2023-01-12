import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";

const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    signOut {
      message
    }
  }
`;

function SignOut() {
  return (
    <Mutation
      refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      mutation={SIGNOUT_MUTATION}
    >
      {(signOut) => <button onClick={signOut}>Sign Out</button>}
    </Mutation>
  );
}

export default SignOut;
