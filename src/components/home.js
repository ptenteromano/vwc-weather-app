import React, { Component } from "react";
import Forecast from "./forecast";
import { Header } from "./header";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Forecast />
      </div>
    );
  }
}

export default Main;
