import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  console.log("comp rendered");
  useEffect(() => {
    console.log("useEffect Called");
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
