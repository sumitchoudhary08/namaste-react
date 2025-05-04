import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestrauntMenus from "../utils/useRestrauntMenus";

const RestaurantMenu = () => {
  //const [restInfo, setRestInfo] = useState(null);
  const { resId } = useParams();
  const restInfo = useRestrauntMenus(resId);

  if (restInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div>
      <h2>{name}</h2>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h3>Menu</h3>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {(item.card.info.price || item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
