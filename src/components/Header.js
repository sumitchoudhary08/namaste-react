import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  //console.log("comp rendered");
  useEffect(() => {
    //console.log("useEffect Called");
  }, [btnName]);

  return (
    <div className="flex bg-pink-50 justify-between p-2 sm:bg-yellow-50 md:bg-green-50">
      <div className="w-20">
        <img className="logo-img" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className=" px-2">OnlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className=" px-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className=" px-2">
            <Link to={"/about"}>About</Link>
          </li>
          <li className=" px-2">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className=" px-2">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className=" px-2 font-bold">
            <Link to={"/cart"}>
              <div className="px-2 relative">
                <span>🛒</span>{" "}
                <span className="absolute bg-red-400 rounded-full h-5 w-5 text-white text-xs flex items-center justify-center -top-2 -right-2">
                  {cartItems.length}
                </span>
              </div>
            </Link>
          </li>
          <li className=" px-2">
            <button
              className=" bg-gray-200 p-1.5 border rounded-lg"
              onClick={() => {
                setBtnName(btnName === "Login" ? "Logout" : "Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className=" px-2  font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
