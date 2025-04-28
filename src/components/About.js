import { useState, useEffect } from "react";

const About = () => {
  const [profile, setProfile] = useState({
    name: "default",
    avatar_url: "/",
    created_at: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/sumitchoudhary08");
    const jsonData = await data.json();
    setProfile(jsonData);
    //console.log(jsonData);
  };

  return (
    <div>
      <img src={profile.avatar_url} alt="profileImg" />
      <h3>{profile.name}</h3>
      <h3>{profile.created_at}</h3>
    </div>
  );
};

export default About;
