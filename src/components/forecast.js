import React, { Component } from "react";
import jsonData from "../db/weather";

// REACT_APP_ is needed in order for key to be read
const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);

class Forecast extends Component {
  state = {
    days: [...jsonData],
    isLoading: true
  };

  render() {
    return (
      <div>
        <h1>Your Weekly Forecast</h1>
        <div className="center-flex">
          {this.state.days.map(day => {
            return (
              <div key={day.id}>
                <h3 className="day">{day.day}</h3>
                <p>High of: {day.temp.high}</p>
                <p>Low of: {day.temp.low}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Forecast;
