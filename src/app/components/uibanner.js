"use client";
import { useState } from "react";

let UiBanner = (props) => {
  const [isShow, setisShow] = useState("show");

  let crossButton = () => {
    setisShow(" dont show");
  };
  return (
    <>
      {isShow == "show" && (
        <div className="w-screen h-[30px] bg-red-500 top-0 fixed">
          <div className="flex flex-row justify-between mx-10 ">
            <div className="text-center">{props.text}</div>
            <button className="" onClick={crossButton}>
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default UiBanner;
