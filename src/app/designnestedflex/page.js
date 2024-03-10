export default function DesignNestedFlex() {
  return (
    <>
      <div className="w-full p-5 rounded bg-amber-200 ">
        <div className="flex flex-row space-x-5 justify-center ">
          <div className="w-[300px] h-[100px] bg-red-500 rounded"></div>
          <div className="flex flex-col space-y-2  ">
            <div className="w-[500px] h-[50px] bg-red-500  rounded"></div>
            <div className="w-[500px] h-[50px] bg-red-500 rounded"></div>
          </div>
          <div className="w-[300px] h-[100px] bg-red-500  rounded "></div>
        </div>
      </div>
    </>
  );
}
