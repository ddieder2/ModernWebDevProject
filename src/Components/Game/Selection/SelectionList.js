import React from "react";

const SelectionList = ({ colleges, difficulty }) => {
  // If the difficulty prop is easy, we show drop down
  if (difficulty === "easy") {
    return (
      <select className="form-select" name="colleges" id="college-select">
        <option value="selectCollege">--Select a college--</option>
        {colleges.map(
          (college) =>
          <option value={college.get('name')}>
          {college.get('name')}
          </option>
        )}
      </select>
    );
  } else {
    // If the difficulty is hard, we show a text input
    return (
      <input className="form-control" type="text" placeholder="Enter college name"></input>
    );
  }
};

export default SelectionList;
