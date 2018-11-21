import React from "react";
import DropdownFilter from "./dropdownFilter";

export const Header = () => {
  return (
    <div className="center-flex">
      <DropdownFilter />
      <div>Link One</div>
      <div>Link Two</div>
      <div>Link Three</div>
      <div>Link Four</div>
    </div>
  );
};
