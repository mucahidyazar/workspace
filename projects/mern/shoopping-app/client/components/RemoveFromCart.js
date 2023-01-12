import React from "react";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import gql from "graphql-tag";
import PropTypes from "prop-types";
import { CURRENT_USER_QUERY } from "./User";

const REMOVE_FROM_CART = gql`
  mutation REMOVE_FROM_CART($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: none;
  &:hover {
    color: ${(props) => props.theme.red};
    cursor: pointer;
  }
`;

const RemoveFromCart = ({ id }) => {
  // this gets called as soon as we get a response back from the server after a mutation has been performed
  const update = (cache, payload) => {
    // first read the cache
    const data = cache.readQuery({
      query: CURRENT_USER_QUERY,
    });

    // remove that item from the cart
    const cartItemId = payload.data.removeFromCart.id;
    data.me.cart = data.me.cart.filter(
      (cartItem) => cartItem.id !== cartItemId
    );
    // write it back to the cache
    cache.writeQuery({ query: CURRENT_USER_QUERY, data });
  };

  return (
    <Mutation
      //Itemlar silindikten sonra ya bununla guncel itemlari aliriz yada updatedeki gibi cachelere giderek payloadda silinen itemin idsini cacheden gelen user'in cartindan silerek.
      //refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      update={update}
      //optimisticResponse ise hizlica yaptigimiz update nin ekranda gozukmesini saglar. Bunu yapmazsak islem bitene kadar bekler.
      optimisticResponse={{
        __typename: "Mutation",
        removeFromCart: {
          __typename: "CartItem",
          id,
        },
      }}
      mutation={REMOVE_FROM_CART}
      variables={{
        id,
      }}
    >
      {(removeFromCart, { loading, error }) => (
        <BigButton
          onClick={() => {
            removeFromCart().catch((err) => alert(err.message));
          }}
          title="Delete Item"
          disabled={loading}
        >
          &times;
        </BigButton>
      )}
    </Mutation>
  );
};

RemoveFromCart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default RemoveFromCart;
