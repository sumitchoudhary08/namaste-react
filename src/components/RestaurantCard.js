import { useContext } from "react";
import { REST_LOGO_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="w-55 m-2 p-2  rounded-lg overflow-hidden shadow-md bg-gray-100 hover:shadow-lg hover:bg-gray-200 hover:-translate-y-1 transition-all">
      <div className="w-full h-36 overflow-hidden">
        <img
          src={REST_LOGO_URL + resData.info.cloudinaryImageId}
          alt="restImg"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold py-2">{name}</h3>
        <p className=" font-medium">{cuisines.join(", ")}</p>
        <p className="flex justify-between py-2">
          <span>{avgRating} ⭐</span> <span>{deliveryTime} mins</span>
        </p>
        <p className=" font-medium">{loggedInUser}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-black text-white z-1 rounded-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
