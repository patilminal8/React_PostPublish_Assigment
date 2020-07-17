import React from "react";

const InputText = props => {
  const { variant, onClick  } = props;
  let border = "2px solid black";
  let color = "white";

  switch (variant) {
    case "borderRed":
      border= "2px solid red";
      color = "white";
      break;
    case "NoBorder":
      color = "white";
      break;
    default:
      break;
  }
  const style = {
    border,
    color
  };

  return (
    
    <input type="text" style={style}></input>
        
  );
};

export default InputText;