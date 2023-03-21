import React from "react";
import "../Header/Header.css";
import img from "./logo.jpeg";

const Header = () => {
  return (
    <div className="Header">
      <img src={img} alt="logo" />
      <h1>BOUTIQUE BY LILY</h1>
    </div>
  );
};
export default Header;
