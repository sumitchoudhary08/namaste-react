import { useState, useEffect } from "react";
import { REST_MENU_API } from "./constants";

const useRestrauntMenus = (resId) => {
  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchData();
    console.log("hook called");
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_MENU_API + resId);
    const jsonData = await data.json();
    console.log(jsonData);
    setRestInfo(jsonData);
  };

  return restInfo;
};

export default useRestrauntMenus;
