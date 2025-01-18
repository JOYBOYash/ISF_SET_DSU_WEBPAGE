import React from "react";
import "../globals.css"
import { EarthLock, SquareArrowOutUpRightIcon } from "lucide-react";

function Button(props) {
  return (
    <div>
      <a
        href={props.link}
        target={props.openNewTab ? "_blank" : "_self"}
        className={
          props.styleNav === "true"
            ? "flex hover:cursor-pointer w-auto text-white hover:text-blue-900 text-center hover:bg-white h-[40px] transition ease-in-out px-4 py-2 rounded-md items-center gap-2"
            : "btn mt-2 px-4 py-2 bg-blue-900/70 flex gap-2 items-center text-center w-auto text-black text-xl hover:text-blue-900 hover:bg-white hover:font-bold transition ease-in-out rounded"
        }
      >
        {" "}
        {props.text}
        {props.styleNav === "true" ? (
          <EarthLock className="icon h-10"></EarthLock>
        ) : (
          <SquareArrowOutUpRightIcon className="icon h-10"></SquareArrowOutUpRightIcon>
        )}
      </a>
    </div>
  );
}

export default Button;
