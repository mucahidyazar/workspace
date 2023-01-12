import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <section className="footer">
        <div className="footer__item">
          <span className="footer__item--sello">
            Sello
            <div className="footer__item--dot"></div>
          </span>
          <ul className="footer__item--list">
            <li>
              <i className="fas fa-map-marker-alt"></i>{" "}
              <span>184 Main Rd E, St Albans VIC 3021, Australia</span>
            </li>
            <li>
              <i className="fas fa-at"></i> <span>mucahidyazar@test.com</span>
            </li>
            <li>
              <i className="fas fa-phone-square-alt"></i>{" "}
              <span>+90 553 488 5454</span>
            </li>
            <li>
              <ul className="footer__item--list-list">
                <li>
                  <a href="/">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-twitch"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="footer__item">
          <div className="footer__item--title">INFORMATION</div>
          <ul className="footer__item--list">
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Terms & Conditions</a>
            </li>
            <li>
              <a href="/">Returns & Exchanges</a>
            </li>
            <li>
              <a href="/">Shipping & Delivery</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer__item">
          <div className="footer__item--title">QUICK LINKS</div>
          <ul className="footer__item--list">
            <li>
              <a href="/">Store Location</a>
            </li>
            <li>
              <a href="/">My Account</a>
            </li>
            <li>
              <a href="/">Orders Tracking</a>
            </li>
            <li>
              <a href="/">Size Guide</a>
            </li>
            <li>
              <a href="/">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="footer__item">
          <div className="footer__item--title">PAYMENT</div>
          <ul className="footer__item--list">
            <li>
              <a href="/">Account</a>
            </li>
            <li>
              <a href="/">Free Shipping</a>
            </li>
            <li>
              <a href="/">Support 24/7</a>
            </li>
            <li>
              <a href="/">30 Days Product Returns</a>
            </li>
            <li>
              <a href="/">100% Payment Secure</a>
            </li>
            <li>
              <a href="/">Supported All Cards</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
