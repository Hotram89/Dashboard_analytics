import React from "react";
import fire from "assets/fire.svg";
import chicken from "assets/chicken.svg";
import apple from "assets/apple.svg";
import cheeseburger from "assets/cheeseburger.svg";
import "./InfoCard.css";

const InfoCard = ({ index, type, fr, unit }) => {
  return (
    <li>
      {(() => {
        /****
         *
         * Switch to choose the good icon
         */
        switch (fr) {
          case "Calories":
            return (
              <div className={"iconColor + calories"}>
                <img src={fire} alt="fire" />
              </div>
            );

          case "Protéines":
            return (
              <div className={"iconColor + proteines "}>
                <img src={chicken} alt="fire" />
              </div>
            );

          case "Glucides":
            return (
              <div className={"iconColor + glucides"}>
                <img src={apple} alt="fire" />
              </div>
            );

          case "Lipides":
            return (
              <div className={"iconColor + lipides"}>
                <img src={cheeseburger} alt="cheeseburger" />
              </div>
            );
          default:
            return null;
        }
      })()}

      <div className="textIcon ">
        <h2>
          {unit}
          {(() => {
            switch (fr) {
              case "Calories":
                return "Kcal";
              default:
                return "g";
            }
          })()}
        </h2>
        <h3>{fr}</h3>
      </div>
    </li>
  );
};

export default InfoCard;
