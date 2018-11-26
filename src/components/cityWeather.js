import React from "react";

const CityWeather = props => {
  console.log("WEATHER OBJECT! : ", props.weather.coord);
  return (
    <div className="container">
      <div className="col-md-4 offset-md-4">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.weather.coord.lon}</li>
        </ul>
      </div>
    </div>
  );
};

export default CityWeather;
