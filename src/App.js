import React, { Component } from "react";
import Forecast from "./components/forecast";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Forecast />
      </div>
    );
  }
}

export default App;
