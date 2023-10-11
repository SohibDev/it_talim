import React from "react";
import "./style.css";
import Logo from "../../assets/img/logoIT.png";
import Email from "../../assets/img/iconmonstr-email-4 1.svg";
import Link from "../../assets/icon/opener1.svg";
import Linked from "../../assets/icon/opener.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <img src={Logo} className="footer-logo" />
        <div className="footer-content">
          <div className="footer-column">
            <div className="list">
              <li>
                <ul>
                  <li className="footer-item">Ta'lim</li>
                  <li className="footer-item">Targ'ibot</li>
                  <li className="footer-item">Tadbirlar</li>
                  <li className="footer-item">Targ'ibot</li>
                  <li className="footer-item">A’zolik</li>
                </ul>
              </li>
              <li>
                <ul className="footer-second-ul">
                  <li className="footer-item">Ta'lim</li>
                  <li className="footer-item">Targ'ibot</li>
                  <li className="footer-item">Tadbirlar</li>
                  <li className="footer-item">Targ'ibot</li>
                  <li className="footer-item">A’zolik</li>
                </ul>
              </li>
              <li>
                <div className="contact-info">
                  <img src={Email} className="email-icon" />
                  <p className="email">info@it-talim.uz</p>
                  <img className="phone-icon" src={Link}  />
                </div>
                <div className="contact-info">
                  <img src={Email} className="email-icon" />
                  <p className="email">info@it-talim.uz</p>
                  <img className="phone-icon" src={Link}  />
                </div>
                <div className="contact-info">
                  <img src={Email} className="email-icon" />
                  <p className="email">info@it-talim.uz</p>
                  <img className="phone-icon" src={Link}  />
                </div>
              </li>
            </div>
          </div>
          <hr className="divider" />
          <div className="footer-bottom">
            <button className="telegram-button">
              Telegram <img src={Linked} className="telegram-icon" />
            </button>
            <button className="telegram-button">
              Telegram <img src={Linked} className="telegram-icon" />
            </button>
            <button className="telegram-button">
              Telegram <img src={Linked} className="telegram-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
