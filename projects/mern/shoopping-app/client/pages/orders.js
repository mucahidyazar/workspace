import React from "react";
import PleaseSignIn from "../components/PleaseSignIn";
import OrderList from "../components/OrderList";

const Orders = () => {
  return (
    <PleaseSignIn>
      <p>This is a single order</p>
      <OrderList />
    </PleaseSignIn>
  );
};

export default Orders;
