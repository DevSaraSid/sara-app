"use client";
import { useState } from "react";
import ListV2 from "../components/list";
export default function Employees() {
  const [click, setclick] = useState("Show");
  const [isShow, setisShow] = useState(ListV2);

  const showClick = () => {
    setclick("Hide");
    if (click == "Hide") {
      setclick("Show");
    }
    setisShow(!isShow);
  };

  return (
    <div className="flex flex-row justify-center mt-10 items-center space-x-5">
      <button
        onClick={showClick}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {click}
      </button>
      {isShow && <ListV2 />}
    </div>
  );
}
// {isShow && (<ListV2 />)}

// setIsShow(!isShow)
