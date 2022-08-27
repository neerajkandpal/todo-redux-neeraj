import React, { FC, HtmlHTMLAttributes } from "react";
import CompleteDisplay from "./CompleteDisplay";
import IncompleteDisplay from "./IncompleteDisplay";

type headerProps = HtmlHTMLAttributes<HTMLHtmlElement>;

const Header: FC<headerProps> = (props) => {
  return (
    <div className=" py-3 flex justify-between  shadow-lg ">

      <div className=" flex justify-items-center text-center items-center" >
      <img className="w-12" src="https://cdn.discordapp.com/attachments/957284229031546993/1012633597838110720/Pink_Beige_Luxury_Elegant_Personal_Brand_Monogram_Logo_1.png" />
      <h1 className="font-mono text-xl px-4 ">{props.children}</h1>
      </div>
      <div className="  font-mono  flex  ">
        <CompleteDisplay></CompleteDisplay>
        <IncompleteDisplay></IncompleteDisplay>
      </div>
      
    </div>
  );
};
export default Header;
