import React from "react";
import Link from "next/link";
import ResetComponent from "../components/Reset";

const Reset = (props) => {
  return (
    <div>
      <h1>Reset Your Password {props.query.resetToken}</h1>
      <ResetComponent resetToken={props.query.resetToken} />
    </div>
  );
};

export default Reset;
