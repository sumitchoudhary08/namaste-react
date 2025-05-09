import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleOnClick = () => {
    setShowIndex();
  };

  return (
    <div className="border-solid bg-gray-50 shadow-lg w-6/12 mx-auto my-4 p-2">
      <div className="flex justify-between font-bold" onClick={handleOnClick}>
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems ? "⬆️" : "⬇️"}</span>
      </div>

      {showItems && <ItemsList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
