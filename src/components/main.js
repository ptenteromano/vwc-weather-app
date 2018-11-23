import React, { Component } from "react";
import { Header } from "./header";
import Home from "./home";
import Search from "./search";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Main;
