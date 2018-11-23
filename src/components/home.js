import React, { Component } from "react";
import Forecast from "./forecast";
import GetSpeed from "./getspeed";

class Home extends Component {
  render() {
    return (
      <div>
        <Forecast />
        <GetSpeed />
      </div>
    );
  }
}

export default Home;
