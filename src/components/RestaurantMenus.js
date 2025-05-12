import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import useRestrauntMenus from "../utils/useRestrauntMenus";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestrauntMenus(resId);
  const [showIndex, setShowIndex] = useState(0);
  const [expand, setExpand] = useState(true);

  const handleShow = (index) => {
    if (index === showIndex) {
      setExpand(!expand);
    } else {
      setExpand(true);
    }

    setShowIndex(index);
  };

  if (restInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const categories =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <div className=" text-center ">
        <h2 className="font-bold my-4">{name}</h2>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      <div className=" text-center ">
        <h3>Menu</h3>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex && expand}
            setShowIndex={() => handleShow(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
