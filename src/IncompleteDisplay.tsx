import React, { FC, HtmlHTMLAttributes } from "react";
import { useSelector } from "react-redux";

type display = HtmlHTMLAttributes<HTMLHtmlElement>;
const IncompleteDisplay: FC<display> = (props) => {
  const incompleteCount = useSelector((s: any) => s.incomplete);
  return (
    <h1 className="text-red-500">
      INCOMPLETE = <span className="text-green-500 ml-1">{incompleteCount}</span>
    </h1>
  );
};

export default IncompleteDisplay;
