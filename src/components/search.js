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

class Search extends Component {
  render() {
    return (
      <div>
        <div className="col-md-4 offset-md-4">
          <h4 className="mb-4">Find Weather by City</h4>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="cityname" md={2}>
                  City Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="cityname"
                    name="cityname"
                    placeholder="City"
                  />
                  <FormFeedback>Errors go Here</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="countryname" md={2}>
                  Country
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="countryname"
                    name="countryname"
                    placeholder="Use only country codes"
                  />
                  <FormFeedback>Errors go Here</FormFeedback>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
