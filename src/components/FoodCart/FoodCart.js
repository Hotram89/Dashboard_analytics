import React from "react";
import "./FoodCart.css";

const FoodCart = (props) => {
  console.log(props);
  return (
    <li>
      <div className={"iconColor " + props.name.name}>
        <img
          src={props.name.img}
          alt={props.name.img}
          fill={props.name.color}
        />
      </div>
      <div className="textIcon ">
        <h2>{props.name.quantity}</h2>
        <h3>{props.name.name}</h3>
      </div>
    </li>
  );
};

export default FoodCart;
