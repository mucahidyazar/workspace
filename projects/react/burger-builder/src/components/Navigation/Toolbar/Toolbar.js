import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = props => (
  <header className="toolbar">
    <DrawerToggle opened={props.opened} />
    <div className="toolbar__logo">
      <Logo />
    </div>
    <nav className="toolbar__nav toolbar__desktop-only">
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
