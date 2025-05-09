import React, { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class AboutClass extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   name: "default",
    //   location: "Ranchi",
    // };
    // console.log("parent constructor");
    this.timer = setInterval(() => {
      console.log("timer started");
    }, 1000);
  }

  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/sumitchoudhary08");
    // const jsonData = await data.json();
    // this.setState(jsonData);
    // console.log("parent did mount");
  }

  componentDidUpdate() {
    console.log("parent did update");
  }

  componentWillUnmount() {
    //console.log("parent unmount");
    clearInterval(this.timer);
  }

  render() {
    console.log("p render");
    return (
      <div>
        <h2>About class hbl</h2>
        <UserContext.Consumer>
          {({ loggedInUser }) => <p>User: {loggedInUser}</p>}
        </UserContext.Consumer>
        {/* <UserClass
          name={this.state.name}
          location={this.state.location}
          avatar_url={this.state.avatar_url}
        /> */}
      </div>
    );
  }
}

export default AboutClass;
