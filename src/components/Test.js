import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);

    console.log("test constuctor");
  }

  componentDidMount() {
    console.log("test did mount");
  }

  componentWillUnmount() {
    console.log("test unmount");
  }

  render() {
    console.log("test render");
    return <div>I am test</div>;
  }
}

export default Test;
