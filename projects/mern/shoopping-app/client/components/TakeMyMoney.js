import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Mutation } from "react-apollo";
import Router from "next/router";
import NProgress from "nprogress";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import calcTotalPrice from "../lib/calcTotalPrice";
import Error from "./ErrorMessage";
import User, { CURRENT_USER_QUERY } from "./User";

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

const totalItems = (cart) => {
  return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
};

class TakmeMyMoney extends React.Component {
  onToken = async (res, createOrder) => {
    NProgress.start();
    //res => tokenden sayesinde bize siparis bilgileri doner buradaki res icinde
    //console.log(res);

    //manually call the mutation once we have the stripe token
    const order = await createOrder({
      variables: {
        token: res.id,
      },
    }).catch((err) => {
      alert(err.message);
    });
    console.log(order);
    Router.push({
      pathname: "/order",
      query: {
        id: order.data.createOrder.id,
      },
    });
  };

  render() {
    return (
      <User>
        {({ data: { me } }) => {
          return (
            <Mutation
              mutation={CREATE_ORDER_MUTATION}
              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >
              {(createOrder) => {
                return (
                  <StripeCheckout
                    amount={calcTotalPrice(me.cart)}
                    name="Sick Fits"
                    description={`Order of ${totalItems(me.cart)} items`}
                    image={
                      me.cart.length && me.cart[0].item && me.cart[0].item.image
                    }
                    //Stripe.com uzerindeki API keys kismindaki Publishable key
                    stripeKey="pk_test_51HAIsABidqVPXDunzYIbveONoXzcWaLVHNkaDUrtuxNTMFeh485ocWvqJpkoAKtMLmlgFVThcvCJDeIdWK0fDmaC0086WomZBJ"
                    currency="USD"
                    email={me.email}
                    token={(res) => this.onToken(res, createOrder)}
                  >
                    {this.props.children}
                  </StripeCheckout>
                );
              }}
            </Mutation>
          );
        }}
      </User>
    );
  }
}

export default TakmeMyMoney;
