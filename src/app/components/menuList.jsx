import Image from "next/image";

export default function MenuList({ data }) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);

  return (
    <>
      <div className="flex flex-col space-y-5 w-full ">
        {data
          .filter((record) => {
            const recordDate = new Date(record.Date);
            return (
              recordDate.toDateString() === today.toDateString() ||
              recordDate.toDateString() === tomorrow.toDateString() ||
              recordDate.toDateString() === dayAfterTomorrow.toDateString()
            );
          })
          .map((item) => (
            <div className="flex flex-row space-x-3">
              <div className="flex flex-col items-center justify-center ">
                <div className="text-sm">DAY</div>
                <div className="font-medium text-4xl">{item["Day No."]}</div>
              </div>
              <div
                key={item.Date}
                className="flex-1 relative flex space-x-3  rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-0 focus-within:ring-offset-0"
              >
                <div className="flex-shrink-0">
                  <Image
                    className="h-10 w-10 rounded-md"
                    src={
                      "https://glebekitchen.com/wp-content/uploads/2019/12/chickenbiryanibowltop.jpg"
                    }
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-sm font-medium text-gray-900">
                    {item.Dish}
                  </p>
                  <p className="truncate text-sm text-gray-500">
                    {item["Day Name"]}
                  </p>
                </div>
                {new Date(item.Date).toDateString() ===
                  today.toDateString() && (
                  <span className="inline-flex items-center rounded-md bg-yellow-400/10 px-5 py-1 text-xs font-medium text-yellow-600 ring-1 ring-inset ring-yellow-400/20">
                    Today
                  </span>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
