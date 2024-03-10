import { useState } from "react";
let Counter = () => {
  const [add, setadd] = useState(0);

  let addClick = () => {
    setadd(add + 1);
  };

  let subtractClick = () => {
    setadd(add - 1);
    if (add <= 1) {
      setadd(0);
    }
  };
  return (
    <>
      <div className="flex flex-row justify-center space-x-5">
        <div className="flex flex-row justify-center mt-10 items-center space-x-5">
          <button
            onClick={addClick}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            +
          </button>
          <p className="font-semibold">{add}</p>
        </div>
        <div className="flex flex-row justify-center mt-10 items-center space-x-5">
          <button
            onClick={subtractClick}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
