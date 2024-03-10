let ListV2 = () => {
  let items = ["apple", "banana", "orange", "cherry", "pineapple"];

  return (
    <ol className="listv2 list-decimal text-left font-bold text-xl italic">
      {items.map((item) => (
        <li key={item}>{fruitName(item, "v2")}</li>
      ))}
    </ol>
  );
};
let fruitName = (item) => {
  let fruit = item == "apple" ? "pineapple" : item;
  return fruit;
};
export default ListV2;
