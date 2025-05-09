import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import useRestrauntMenus from "../utils/useRestrauntMenus";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restInfo = useRestrauntMenus(resId);
  const [showIndex, setShowIndex] = useState(0);

  const handleFromParent = () => {
    console.log("hadle form parent");
    setShow(!show);
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

  // console.log(categories);

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
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}

        {/* // {itemCards?.map((item) => (
          //   <li key={item.card.info.id}>
          //     {item.card.info.name} - Rs.{" "}
          //     {(item.card.info.price || item.card.info.defaultPrice) / 100}
          //   </li>
          // ))} */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
