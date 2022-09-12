import React from "react";
import "./InfoCard.css";
import fire from "assets/fire.svg";
import chicken from "assets/chicken.svg";
import apple from "assets/apple.svg";
import cheeseburger from "assets/cheeseburger.svg";
import ApiProvider from "data/ApiProvider";

const FoodCart = ({ value, type, unit }) => {
  const data = new ApiProvider().getCardData();

  /****
   *
   * Switch to choose the good icon
   */
  switch (type) {
    case "Calories":
      return (
        <div className={"iconColor + calories"}>
          <img src={fire} alt="fire" />
        </div>
      );

    case "Proteines":
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
};

// <ul className="foodList">
//   {" "}
//   <li>
//     <div className={"iconColor + calories"}>
//       <img src={fire} alt="fire" />
//     </div>
//     <div className="textIcon ">
//       <h2>{calories}kCal</h2>
//       <h3>Calories</h3>
//     </div>
//   </li>
//   <li>
//     <div className={"iconColor + proteines "}>
//       <img src={chicken} alt="fire" />
//     </div>
//     <div className="textIcon ">
//       <h2>{proteines}g</h2>
//       <h3>Proteines</h3>
//     </div>
//   </li>
//   <li>
//     <div className={"iconColor + glucides"}>
//       <img src={apple} alt="fire" />
//     </div>
//     <div className="textIcon ">
//       <h2>{glucides}g</h2>
//       <h3>Glucides</h3>
//     </div>
//   </li>
//   <li>
//     <div className={"iconColor + lipides"}>
//       <img src={cheeseburger} alt="cheeseburger" />
//     </div>
//     <div className="textIcon ">
//       <h2>{lipides}g</h2>
//       <h3>Lipides</h3>
//     </div>
//   </li>
// </ul>

export default FoodCart;
