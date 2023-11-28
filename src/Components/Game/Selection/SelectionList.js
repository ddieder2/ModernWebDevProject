import React from "react";

const SelectionList = ({ colleges, difficulty, onChange }) => {
  
  if (difficulty === "easy") {
    return (
      <select className="form-select" name="colleges" id="college-select" onChange={onChange}>
        <option value="selectCollege">--Select a college--</option>
        {colleges.map(
          (college) =>
          <option value={college.get('name')} key={college.get('name')}>
          {college.get('name')}
          </option>
        )}
      </select>
    );
  } else {
    // If the difficulty is hard, we show a text input
    return (
      <input className="form-control" type="text" placeholder="Enter college name" onChange={onChange}></input>
    );
  }
};

export default SelectionList;
