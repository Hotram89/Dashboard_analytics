import React from "react";
import logo from "assets/logo.png";
import "./MainNav.css";

const MainNav = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="running man logo" />
      </div>
      <ul className="horizontalNav">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </header>
  );
};

export default MainNav;
