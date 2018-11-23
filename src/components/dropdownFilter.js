import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import { Link } from "react-router-dom";
import jsonData from "../db/weather";

class DropdownFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      days: [...jsonData]
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>Menu</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Days</DropdownItem>
            {this.state.days.map(day => (
              <DropdownItem key={day.id}>{day.day}</DropdownItem>
            ))}
            <DropdownItem divider />
            <DropdownItem>
              <Link to="/">Home</Link>
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}

export default DropdownFilter;
