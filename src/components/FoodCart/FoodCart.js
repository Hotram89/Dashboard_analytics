import React from "react";
import "./FoodCart.css";

const FoodCart = (props) => {
  console.log(props);
  return (
    <li>
      <div>
        <img src={process.env.DOSSIER_URL} alt={props.name.img} />
      </div>
      {props.name.name}
    </li>
  );
};

export default FoodCart;
