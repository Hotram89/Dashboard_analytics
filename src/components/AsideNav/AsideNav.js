import React from "react";
import pictoYoga from "../../assets/yoga.svg";
import pictoSwim from "../../assets/natation.svg";
import pictoBike from "../../assets/velo.svg";
import pictoMuscu from "../../assets/muscu.svg";
import "./AsideNav.css";

const AsideNav = () => {
  return (
    <ul className="pictoList">
      <li className="picto">
        <img src={pictoYoga} alt="yoga picto" />
      </li>
      <li className="picto">
        <img src={pictoSwim} alt="picto swim" />
      </li>
      <li className="picto">
        <img src={pictoBike} alt="picto bike" />
      </li>
      <li className="picto">
        <img src={pictoMuscu} alt="picto muscu" />
      </li>
    </ul>
  );
};

export default AsideNav;
