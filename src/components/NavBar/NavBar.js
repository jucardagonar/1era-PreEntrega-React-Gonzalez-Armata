import React from "react";
import "./NavBar.css";
import Shop from "../Shop/Shop";
const NavBar = () => {
  return (
    <nav className="Navigation">
      <ul>
        <li>
          <a href="www.google.com.ar">INICIO</a>
        </li>
        <li>
          <a href="www.google.com.ar">PRODUCTOS</a>
        </li>
        <li>
          <a href="www.google.com.ar">GALERIA</a>
        </li>
        <li>
          <Shop />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
