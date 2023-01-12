import React from "react";
import PleaseSignIn from "../components/PleaseSignIn";
import OrderComponent from "../components/Order";

const Order = ({ query }) => {
  return (
    <PleaseSignIn>
      <p>This is a single order</p>
      <OrderComponent id={query.id} />
    </PleaseSignIn>
  );
};

export default Order;
