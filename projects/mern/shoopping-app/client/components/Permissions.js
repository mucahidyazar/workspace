import React, { useState } from "react";
import { Query, Mutation } from "react-apollo";
import Error from "./ErrorMessage";
import gql from "graphql-tag";
import Table from "./styles/Table";
import SickButton from "./styles/SickButton";
import PropTypes from "prop-types";

const possiblePermissions = [
  "ADMIN",
  "USER",
  "ITEMCREATE",
  "ITEMUPDATE",
  "ITEMDELETE",
  "PERMISSIONUPDATE",
];

const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation UPDATE_PERMISSIONS_MUTATION(
    $permissions: [Permission]
    $userId: ID!
  ) {
    updatePermissions(permissions: $permissions, userId: $userId) {
      id
      permissions
      name
      email
    }
  }
`;

const ALL_USER_QUERY = gql`
  query ALL_USER_QUERY {
    users {
      id
      name
      email
      permissions
    }
  }
`;

const Permissions = () => {
  return (
    <Query query={ALL_USER_QUERY}>
      {({ data, loading, error }) => {
        return (
          <div>
            <Error error={error} />
            <div>
              <h2>Manage Permissions</h2>
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    {possiblePermissions.map((per) => (
                      <th key={per}>{per}</th>
                    ))}
                    <th>👇</th>
                  </tr>
                </thead>
                <tbody>
                  {data.users.map((user) => {
                    return <User key={user.id} user={user} />;
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

class User extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      id: PropTypes.string,
      permissions: PropTypes.array,
    }).isRequired,
  };

  state = {
    permissions: this.props.user.permissions,
  };

  handlePermissionChange = (e) => {
    const checkbox = e.target;
    // take a copy of the current permissions
    let updatedPermissions = [...this.state.permissions];
    // figure out if we need to remove or add this permission
    if (checkbox.checked) {
      // add it in
      updatedPermissions.push(checkbox.value);
    } else {
      updatedPermissions = updatedPermissions.filter(
        (per) => per !== checkbox.value
      );
    }
    this.setState({ permissions: updatedPermissions });
  };

  render() {
    const { user } = this.props;

    return (
      <Mutation
        mutation={UPDATE_PERMISSIONS_MUTATION}
        variables={{
          permissions: this.state.permissions,
          userId: user.id,
        }}
      >
        {(updatePermissions, { loading, error }) => {
          return (
            <>
              {error && (
                <tr>
                  <td colSpan="8">
                    <Error error={error} />
                  </td>
                </tr>
              )}
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {possiblePermissions.map((per, index) => {
                  return (
                    <td key={index}>
                      <label htmlFor={`${user.id}-permission-${per}`}>
                        <input
                          id={`${user.id}-permission-${per}`}
                          type="checkbox"
                          checked={this.state.permissions.includes(per)}
                          value={per}
                          onChange={this.handlePermissionChange}
                        />
                      </label>
                    </td>
                  );
                })}
                <td>
                  <SickButton
                    type="button"
                    disabled={loading}
                    onClick={updatePermissions}
                  >
                    Updat{loading ? "ing" : "e"}
                  </SickButton>
                </td>
              </tr>
            </>
          );
        }}
      </Mutation>
    );
  }
}

// const User = ({ user }) => {

//   return (
//     <tr>
//       <td>{user.name}</td>
//       <td>{user.email}</td>
//       {possiblePermissions.map((per) => {
//         return (
//           <td>
//             <label htmlFor={`${user.id}-permission-${per}`}>
//               <input type="checkbox" />
//             </label>
//           </td>
//         );
//       })}
//       <td>
//         <SickButton>Update</SickButton>
//       </td>
//     </tr>
//   );
// };

export default Permissions;
