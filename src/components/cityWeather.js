import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button
} from "reactstrap";

class CityWeather extends Component {
  constructor(props) {
    super(props);

    // 0 == F, 1 == C
    this.state = {
      tempStyle: 0,
      showTemp: this.getFahrenheit(this.props.weather.main.temp),
      tempLogo: "°F",
      kelvin: this.props.weather.main.temp
    };

    this.toggleTemp = this.toggleTemp.bind(this);
  }

  getCelsius = kelvin => {
    return (kelvin - 273.15).toFixed(2);
  };

  getFahrenheit = kelvin => {
    return ((kelvin - 273.15) * (9 / 5) + 32).toFixed(2);
  };

  convertUTC = utc => {
    let d = new Date(utc);

    return `${d.getHours() % 12}:${d.getMinutes()}`;
  };

  // switch between C and F
  toggleTemp() {
    if (this.state.tempStyle)
      this.setState({
        tempStyle: !this.state.tempStyle,
        showTemp: this.getCelsius(this.state.kelvin),
        tempLogo: "°C"
      });
    else
      this.setState({
        tempStyle: !this.state.tempStyle,
        showTemp: this.getFahrenheit(this.state.kelvin),
        tempLogo: "°F"
      });
  }

  render() {
    const temp = `${this.state.showTemp} ${this.state.tempLogo}`;

    return (
      <div className="container">
        <div className="col-md-8 offset-md-2">
          <h2>Weather Data for {this.props.weather.name}</h2>
          <ListGroup>
            <ListGroupItem>
              <ListGroupItemHeading>Current Temperature</ListGroupItemHeading>
              <ListGroupItemText>
                <Button
                  style={{ marginBottom: "6px" }}
                  outline
                  color="info"
                  size="sm"
                  onClick={this.toggleTemp}
                >
                  Toggle Temp
                </Button>
                <br />
                {temp}
              </ListGroupItemText>
            </ListGroupItem>

            <ListGroupItem>
              <ListGroupItemHeading>Description</ListGroupItemHeading>
              <ListGroupItemText>
                {this.props.weather.weather[0].main} <br />
                {this.props.weather.weather[0].description}
              </ListGroupItemText>
            </ListGroupItem>

            <ListGroupItem>
              <ListGroupItemHeading>Cloud Coverage</ListGroupItemHeading>
              <ListGroupItemText>
                {this.props.weather.clouds.all}%
              </ListGroupItemText>
            </ListGroupItem>

            <ListGroupItem>
              <ListGroupItemHeading>More Details</ListGroupItemHeading>
              <ListGroupItemText>
                Pressure: {this.props.weather.main.pressure} <br />
                Humidity: {this.props.weather.main.humidity} % <br />
                Wind Speed: {this.props.weather.wind.speed} M/S <br />
                Wind Direction: {this.props.weather.wind.deg} Degrees <br />
              </ListGroupItemText>
            </ListGroupItem>

            <ListGroupItem>
              <ListGroupItemHeading>Location</ListGroupItemHeading>
              <ListGroupItemText>
                Latitude: {this.props.weather.coord.lat} <br />
                Longitude: {this.props.weather.coord.lon} <br />
                {/* Sunrise: {this.convertUTC(this.props.weather.sys.sunrise)}
                <br />
                Sunset: {this.convertUTC(this.props.weather.sys.sunset)} <br /> */}
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default CityWeather;
