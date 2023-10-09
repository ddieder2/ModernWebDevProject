import React from "react";
import "../../App.css";

const SelectionList = ({ colleges, difficulty }) => {
  // If the difficulty prop is easy, we show drop down
  if (difficulty === "easy") {
    return (
      <select class="form-select" name="colleges" id="college-select">
        <option value="selectCollege">--Select a college--</option>
        {colleges.map(
          (college) =>
          <option value="${college.name}">
          ${college.name}
          </option>
        )}
      </select>
    );
  } else {
    // If the difficulty is hard, we show a text input
    return (
      <input class="form-control" type="text" placeholder="Enter college name"></input>
    );
  }
};

export default SelectionList;
