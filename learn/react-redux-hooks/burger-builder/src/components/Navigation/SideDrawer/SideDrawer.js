import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxilliary from "../../../hoc/Auxilliary/Auxilliary";

const sideDrawer = props => {
  let attachedClasses;
  if (props.open) {
    attachedClasses = "sidedrawer sidedrawer__open";
  } else {
    attachedClasses = "sidedrawer sidedrawer__close";
  }

  return (
    <Auxilliary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses}>
        <div className="sidedrawer__logo">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxilliary>
  );
};

export default sideDrawer;
