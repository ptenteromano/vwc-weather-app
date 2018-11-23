import React, { Component } from "react";

class GetSpeed extends Component {
  state = {
    speed: 0,
    checker: 0
  };

  componentDidMount() {
    this.ticker = setInterval(() => this.speed(), 200);
  }

  speed() {
    navigator.geolocation.watchPosition(data => {
      console.log(data.coords);
      this.setState({
        speed: data.coords.speed
      });
    });
    this.setState({ checker: this.state.checker + 1 });
    console.log(this.state.checker);
    if (this.state.checker > 50) {
      console.log("Not moving!");
      clearInterval(this.ticker);
      this.setState({
        speed: "Not moving, speed checked stopped"
      });
    }
  }

  render() {
    return (
      <div>
        <h4> How fast are you going? </h4>
        <p>{this.state.speed !== null ? this.state.speed : "No speed"}</p>
      </div>
    );
  }
}

export default GetSpeed;
