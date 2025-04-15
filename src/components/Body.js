import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [rest, setRest] = useState(resList);

  //const arr = useState(resList);
  //const [rest, setRest] = arr;
  //const rest = arr[0];
  // const setRest = arr[1];

  //   let rest = [
  //     {
  //       info: {
  //         id: "234875",
  //         name: "Adil Hotel",
  //         cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
  //         cuisines: ["North Indian", "Biryani", "Tandoor"],
  //         avgRating: 3.8,
  //         sla: {
  //           deliveryTime: 38,
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "234876",
  //         name: "KFC",
  //         cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
  //         cuisines: ["North Indian", "Biryani", "Tandoor"],
  //         avgRating: 4.5,
  //         sla: {
  //           deliveryTime: 38,
  //         },
  //       },
  //     },
  //     {
  //       info: {
  //         id: "234877",
  //         name: "Dominos",
  //         cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
  //         cuisines: ["North Indian", "Biryani", "Tandoor"],
  //         avgRating: 4.3,
  //         sla: {
  //           deliveryTime: 38,
  //         },
  //       },
  //     },
  //   ];

  return (
    <div className="body">
      <div>
        <button
          className="top-rest"
          onClick={() => {
            const filteredData = rest.filter((restarunat) => {
              return restarunat.info?.avgRating > 4.3;
            });

            setRest(filteredData);
          }}
        >
          Top Restaurant
        </button>
      </div>
      <div className="rest-container">
        {rest.map((restraunt) => (
          <RestaurantCard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
