import React from "react";
import "./style.css";
import Logo from "../../assets/img/logo.png";
import Plus from "../../assets/icon/plus.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <NavLink exact to="/">
          <img src={Logo} alt="logo" className="logo" />
        </NavLink>
        <div className="nav-links">
          <NavLink to="/about" className="nav-link" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/goal" className="nav-link">
            Maqsadimiz
          </NavLink>
          <NavLink to="/education" className="nav-link">
            Ta'lim
          </NavLink>
          <NavLink to="/news" className="nav-link">
            Yangiliklar
          </NavLink>
          <NavLink to="/membership" className="nav-link">
            A’zolik
          </NavLink>
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>
        </div>
      </div>
      <div className="language-selector">
        <div>
          <span className="language-icon"></span>
          <select className="language-select">
            <option value="uz">Uz</option>
            <option value="ru">Ru</option>
            <option value="en">En</option>
          </select>
        </div>

        <button className="login-button">
          Kirish <img src={Plus} alt="Plus" className="plus-icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
