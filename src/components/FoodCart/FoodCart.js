import React from "react";
import "./FoodCart.css";
import { USER_MAIN_DATA } from "data/dataMock";
import fire from "assets/fire.svg";
import chicken from "assets/chicken.svg";
import apple from "assets/apple.svg";
import cheeseburger from "assets/cheeseburger.svg";

const FoodCart = () => {
  const urlId = 12;
  let idFilter = USER_MAIN_DATA.filter((el) => {
    if (urlId === el.id) {
      return true;
    }
  });
  const currentUserData = idFilter[0].keyData;

  let calories = currentUserData.calorieCount;
  let proteines = currentUserData.proteinCount;
  let glucides = currentUserData.carbohydrateCount;
  let lipides = currentUserData.lipidCount;

  return (
    <ul className="foodList">
      {" "}
      <li>
        <div className={"iconColor + calories"}>
          <img src={fire} alt="fire" />
        </div>
        <div className="textIcon ">
          <h2>{calories}kCal</h2>
          <h3>Calories</h3>
        </div>
      </li>
      <li>
        <div className={"iconColor + proteines "}>
          <img src={chicken} alt="fire" />
        </div>
        <div className="textIcon ">
          <h2>{proteines}g</h2>
          <h3>Proteines</h3>
        </div>
      </li>
      <li>
        <div className={"iconColor + glucides"}>
          <img src={apple} alt="fire" />
        </div>
        <div className="textIcon ">
          <h2>{glucides}g</h2>
          <h3>Glucides</h3>
        </div>
      </li>
      <li>
        <div className={"iconColor + lipides"}>
          <img src={cheeseburger} alt="cheeseburger" />
        </div>
        <div className="textIcon ">
          <h2>{lipides}g</h2>
          <h3>Lipides</h3>
        </div>
      </li>
    </ul>
  );
};

export default FoodCart;
