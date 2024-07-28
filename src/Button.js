import React from "react";
import "./style/index.css";

const Button = ({ label, status, styles, disabled }) => {
  const getStatusClass = () => {
    switch (status) {
      case "default":
        return "button-default";
      case "disabled":
        return "button-disabled";
      default:
        return "";
    }
  };

  const getStylesClass = () => {
    switch (styles) {
      case "solid":
        return "button-solid";
      case "outline":
        return "button-outline";
      default:
        return "";
    }
  };

  return (
    <button
      className={`button ${getStatusClass()} ${getStylesClass()}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
