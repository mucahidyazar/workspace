import React from "react";
import Link from "next/link";
import UpdateItem from "../components/UpdateItem";

const Sell = ({ query }) => {
  return (
    <div>
      <h1>Update Item</h1>
      <UpdateItem id={query.id} />
    </div>
  );
};

export default Sell;
