import React from "react";
import '../css/navbar.css'
import { FaUser } from "react-icons/fa";
import Cartwidget from "./Cartwidget";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TecnoLine</div>

      <ul className="navbar-links">
        <li className="active">Inicio</li>
        <li>Productos</li>
        <li>Ofertas</li>
        <li>Categorías</li>
        <li>Soporte</li>
        <li>Contacto</li>
      </ul>

      <div className="navbar-icons">
        <FaUser className="icon" />
        <Cartwidget />
      </div>
    </nav>
  );
};

export default Navbar;
