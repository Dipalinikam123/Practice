// Simple React Componant

import React from "react";

// const ButtonFun =()=>{
//     return <button type="button">Click Me</button>
// }

// In TypeScript

interface ButtonProps {
  text: string;
  onClick?:() => void
}

const ButtonFun: React.FC<ButtonProps> = ({text,onClick}) => {   // React.FC for know that function is React Functional Componant
  return <button type="button" onClick={onClick}>{text}</button>;
};



export default ButtonFun;
