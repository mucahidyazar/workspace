import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footerLeft">
        <p>
          © 2018 <span>Sikayetvar</span>
        </p>
      </div>
      <div className="footerRight">
        <a href="/posts">Posts</a>
      </div>
    </footer>
  );
};

export default Footer;
