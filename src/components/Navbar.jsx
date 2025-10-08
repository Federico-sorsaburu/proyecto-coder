import React from "react";
 import '../css/navbar.css'
import { FaUser } from "react-icons/fa";
import Cartwidget from "./Cartwidget";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TecnoLine</div>

      <ul className="navbar-links">
        <li className="active">Home</li>
        <li>Shop</li>
        <li>About us</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Contact us</li>
      </ul>

      <div className="navbar-icons">
        <FaUser className="icon" />
          <Cartwidget/>
      </div>
     
    </nav>
  );
};

export default Navbar;
