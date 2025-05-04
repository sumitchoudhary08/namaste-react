import React, { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const { name, location } = props;
  return (
    <div className="userContainer">
      <h2>Count = {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment count
      </button>
      <h3>Name: {name}</h3>
      <h4>Location: {location}</h4>
    </div>
  );
};

export default User;
