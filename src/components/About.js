import { useState, useEffect } from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  const [profile, setProfile] = useState({
    name: "default",
    avatar_url: "/",
    created_at: "",
  });

  useEffect(() => {
    //fetchData();
    const timer = setInterval(() => {
      console.log("timerr started");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/sumitchoudhary08");
    const jsonData = await data.json();
    setProfile(jsonData);
    //console.log(jsonData);
  };

  return (
    <div>
      {/* <img src={profile.avatar_url} alt="profileImg" />
      <h3>{profile.name}</h3>
      <h3>{profile.created_at}</h3> */}
      <User name={"Sumit fun"} location={"R1"} />
      <UserClass name={"Sumit class"} location={"R2"} />
    </div>
  );
};

export default About;
