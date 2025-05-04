import React from "react";
import Test from "./Test";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //console.log(this.props.name + " did mount");
  }

  componentDidUpdate() {
    //console.log(this.props.name + " did update");
  }

  componentWillUnmount() {
    //console.log(this.props.name + " will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.props;
    return (
      <div className="userContainer">
        {/* <Test /> */}
        {/* <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button> */}
        <img src={avatar_url} />
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
      </div>
    );
  }
}

export default UserClass;
