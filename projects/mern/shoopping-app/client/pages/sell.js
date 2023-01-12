import React from "react";
import Link from "next/link";
import CreateItem from "../components/CreateItem";
import PleaseSignIn from "../components/PleaseSignIn";

const Sell = (props) => {
  return (
    <PleaseSignIn>
      <CreateItem />
    </PleaseSignIn>
  );
};

export default Sell;
