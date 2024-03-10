import { useState } from "react";
let Colourchanger = () => {
  const [backgroundColor, setbackgroundColour] = useState("#ffffff");

  let buttonClick = () => {
    setbackgroundColour(getRandomColour());
  };

  const getRandomColour = () => {
    const letters = "012346789ABCDEF";
    let colour = "#";
    for (let i = 0; i < 6; i++) {
      colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
  };

  return (
    <>
      <div className="flex flex-row space-x-5 justify-center">
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: backgroundColor,
            borderRadius: "50%",
          }}
        ></div>

        <div className="flex flex-row justify-center mt-10 items-center space-x-5">
          <button
            onClick={buttonClick}
            className="rounded-md bg-lime-600 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-lime-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Change color
          </button>
        </div>
      </div>
    </>
  );
};
export default Colourchanger;
