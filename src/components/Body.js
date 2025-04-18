import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [rest, setRest] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9588816&lng=77.6865383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    var res =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRest(res);
    setFilteredData(res);
  };

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

  //   if (rest.length === 0) {
  //     //return <h3>Loading....</h3>;
  //     return <Shimmer />;
  //   }

  return rest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div>
        <input
          type="text"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const fData = rest.filter(
              (restraunt) =>
                restraunt.info.cuisines.some((cuisine) =>
                  cuisine.toLowerCase().includes(searchText.toLowerCase())
                ) ||
                restraunt.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
            );
            setFilteredData(fData);
          }}
        >
          search
        </button>

        <button
          className="top-rest"
          onClick={() => {
            const ffData = rest.filter((restarunat) => {
              return restarunat.info?.avgRating > 4.2;
            });

            setFilteredData(ffData);
          }}
        >
          Top Restaurant
        </button>
      </div>
      <div className="rest-container">
        {filteredData.map((restraunt) => (
          <RestaurantCard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
