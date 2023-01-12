import React from "react";
import "./navigation.scss";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigationSlogan">
        <h2>Thank you for supporting us!</h2>
        <h3>Let's get in touch on any of these platforms.</h3>
      </div>
      <div className="navigationLinks">
        <a className="navigationLinkItem" href="https://www.twitter.com">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="navigationLinkItem" href="https://www.facebook.com">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a className="navigationLinkItem" href="https://www.dribble.com">
          <i className="fab fa-dribbble"></i>
        </a>
        <a className="navigationLinkItem" href="https://www.github.com">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Navigation;
