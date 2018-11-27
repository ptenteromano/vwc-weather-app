import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback
} from "reactstrap";
import CityWeather from "./cityWeather";

// REACT_APP_ is needed in order for key to be read
const API_KEY = process.env.REACT_APP_API_KEY;
const weatherAPI = "https://api.openweathermap.org/data/2.5/";
const keyUrl = "&appid=" + API_KEY;
// console.log(keyUrl);

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      country: "",
      cityFound: false,
      cityNames: [],
      countryCodes: [],
      response: {},
      touched: {
        city: false,
        country: false
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cityWeather = null;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // need to pass in 'field' value
  handleBlur = field => evt => {
    this.setState({
      touched: {
        ...this.state.touched,
        [field]: true
      }
    });
  };

  // set component and force render
  renderResults() {
    this.cityWeather = <CityWeather weather={this.state.response} />;
    this.setState(this.state); // no change, but forces render
    console.log("Fetch complete!");
  }

  handleSubmit(event) {
    const city = this.state.city;
    console.log(keyUrl);
    event.preventDefault();
    fetch(weatherAPI + "weather?q=" + city + keyUrl)
      .then(
        response => {
          if (response.ok) return response;
          else {
            // handling response != ok
            let error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        error => {
          // handling no response
          let errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then(resp => resp.json())
      .then(myJson => {
        console.log(myJson);
        this.setState({
          response: myJson,
          cityFound: true
        });
        this.renderResults();

        return myJson;
      })
      .catch(error => {
        console.log(error, error.message);
        this.badRequest = <div>Error Finding City</div>;
        this.setState({ cityFound: false });
      });
  }

  // matchNames() {
  // TODO: type suggestion auto finish
  // use city.list.json from openweathermap
  // }

  render() {
    const isDone = this.state.cityFound;

    return (
      <div>
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Search</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <div className="col-md-4 offset-md-4">
          <h4 className="mb-4">Find Weather by City</h4>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="city" md={2}>
                  City Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    value={this.state.city}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("city")}
                  />
                  <FormFeedback>Errors go Here</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="country" md={2}>
                  Country Code
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Optional"
                    value={this.state.country}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("country")}
                  />
                  <FormFeedback>Errors go Here</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col sm={{ size: 2, offset: 2 }}>
                  <Button type="primary" color="primary">
                    Get Weather
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
        <div>{isDone ? this.cityWeather : this.badRequest}</div>
      </div>
    );
  }
}

export default Search;
