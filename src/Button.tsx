import React, { ButtonHTMLAttributes, FC } from "react";
type buttonProps = {
  theme?: "secondary";
  border?: "full";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<buttonProps> = (props) => {
  let themeClass =
    " text-white bg-indigo-500 hover:bg-indigo-900 border-2 border-yellow-500 hover:bg-red-400";
  if (props.theme === "secondary") {
    themeClass = " border  border-gray-300 hover:bg-gray-200";
  }
  let borderClass = "rounded-md";
  if (props.border === "full") {
    borderClass = "rounded-md";
  }
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={"text-center px-2 rounded-md  py-2 " + themeClass + "  " + borderClass}
    >
      {props.children}
    </button>
  );
};
export default Button;
