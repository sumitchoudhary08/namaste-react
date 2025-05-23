import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { REST_LIST_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [rest, setRest] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus(); //Custom hook
  const RestaurantCardWithLabel = withPromotedLabel(RestaurantCard); //HOC
  const { loggedInUser, setName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_LIST_API);

    const jsonData = await data.json();
    var res =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(jsonData);
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

  if (!onlineStatus) {
    return <div>you are offline</div>;
  }

  return rest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex m-2 items-center">
        <div>
          <input
            data-testid="searchInput"
            type="text"
            className="border"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-green-100 p-2 mr-1 rounded-lg"
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
        </div>

        <button
          className="bg-blue-100 ml-4 p-2 rounded-lg"
          onClick={() => {
            const ffData = rest.filter((restarunat) => {
              return restarunat.info?.avgRating > 4.2;
            });

            setFilteredData(ffData);
          }}
        >
          Top Restaurant
        </button>
        <div>
          <label>UserName</label>
          <input
            className="border border-black px-2"
            type="text"
            value={loggedInUser}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap place-content-center">
        {filteredData.map((restraunt) => (
          <Link key={restraunt.info.id} to={"/restaurant/" + restraunt.info.id}>
            {restraunt.info.avgRating > 4.3 ? (
              <RestaurantCardWithLabel resData={restraunt} />
            ) : (
              <RestaurantCard resData={restraunt} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
