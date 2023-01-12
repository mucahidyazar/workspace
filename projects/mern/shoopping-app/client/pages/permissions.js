import React from "react";
import Link from "next/link";
import PermissionsComponent from "../components/Permissions";
import PleaseSignIn from "../components/PleaseSignIn";

const Permissions = (props) => {
  return (
    <PleaseSignIn>
      <PermissionsComponent />
    </PleaseSignIn>
  );
};

export default Permissions;
