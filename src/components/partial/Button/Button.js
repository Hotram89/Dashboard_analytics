import React from "react";
import { useState } from "react";
import "./Button.css";
const Button = () => {
  const [click, setClick] = useState(false);

  function handleClick() {
    click ? setClick(false) : setClick(true);
  }
  return (
    <div>
      {click ? (
        <li className="button clic" onClick={() => handleClick()}>
          <span className="handle"></span>
        </li>
      ) : (
        <li className="button " onClick={() => handleClick()}>
          <span className="handle"></span>
        </li>
      )}
      <li className="mock">ON / OFF</li>
    </div>
  );
};

export default Button;
