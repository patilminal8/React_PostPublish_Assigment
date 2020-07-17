import React from "react";
import styled, { css } from 'styled-components'
import './Button.css';

const Button = props => {
  const { variant, disabled, children, onClick  } = props;

  // This is the default style
  let backgroundColor = "hsl(206, 80%, 24%)";
  let color = "white";
  let borderColor = "white";

  // Which variant do we want?
  switch (variant) {
    case "buttonNotActive":
      backgroundColor = "#62c7ff";
      color = "white";
      break;
    case "buttonActive":
      backgroundColor = "hsl(206, 80%, 24%)";
      color = "white";
      break;
      case "primary":
      backgroundColor = "red";
      color = "white";
      break;
    case "secondary":
      backgroundColor = "green";
      color = "white";
      break;
    default:
      break;
  }

  // Let's build the style based on the variant
  // We also add properties depending on the `disabled` state
  const style = {
    backgroundColor,
    color,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1
  };

  return (
    <button onClick={onClick} disabled={disabled} style={style}>
      {children}
    </button>
  );
};

export default Button;