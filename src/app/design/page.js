export default function Design() {
  return (
    <>
      <div className="grid grid-cols-12 gap-10 mb-[100px] p-3 bg-teal-500">
        <div className="w-full h-[50px] bg-amber-500"></div>
        <div className="w-full h-[50px] bg-amber-500"></div>
        <div className="w-full h-[50px] bg-amber-500"></div>
        <div className=" w-full h-[50px] bg-amber-500"></div>
        <div className="w-full h-[50px] bg-amber-500"></div>
        <div className="w-full h-[50px] bg-amber-500"></div>
      </div>
      <div className="w-[500px] h-[500px] bg-blue-500 relative">
        <div className="w-[100px] h-[100px] bg-red-500 absolute bottom-[5px] right-[100px]"></div>

        <div className="flex flex-col space-y-5 justify-between">
          <div className="w-[50px] h-[50px] bg-amber-500"></div>
          <div className="w-[50px] h-[50px] bg-amber-500"></div>
          <div className="w-[50px] h-[50px] bg-amber-500"></div>
          <div className="w-[50px] h-[50px] bg-amber-500"></div>
          <div className="w-[50px] h-[50px] bg-amber-500"></div>
        </div>
      </div>
    </>
  );
}
