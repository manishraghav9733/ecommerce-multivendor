import React from "react";
import "./elements.css";

const CartServicesBox = (props) => {
  return (
    <div>
      <div className="serviceBox">
        <div className="serviceBox__img">
          <img
            src={props.logo}
            style={{ width: "40px", objectFit: "contain" }}
          />
        </div>
        <div className="serviceBox__text">{props.text}</div>
      </div>
    </div>
  );
};

export default CartServicesBox;
