export default function DesignSara() {
  return (
    <>
      <div className="flex flex-col space-y-10">
        <div className="flex flex-row space-x-5 justify-start">
          <div className="w-[100px] h-[50px] bg-red-500 rounded"></div>
          <div className="w-[100px] h-[50px] bg-red-500 rounded"></div>
          <div className="w-[100px] h-[50px] bg-red-500 rounded"></div>
        </div>

        <div className="flex flex-row space-x-5 justify-end">
          <div className="w-[100px] h-[50px] bg-yellow-500 rounded"></div>
          <div className="w-[100px] h-[50px] bg-yellow-500 rounded"></div>
          <div className="w-[100px] h-[50px] bg-yellow-500 rounded"></div>
        </div>
        <div className="flex flex-row space-x-5 justify-center">
          <div className="w-[100px] h-[50px] bg-blue-500 rounded"></div>
          <div className="w-[100px] h-[50px] bg-blue-500 rounded"></div>
          <div className="w-[100px] h-[50px] bg-blue-500 rounded"></div>
        </div>
      </div>
    </>
  );
}
