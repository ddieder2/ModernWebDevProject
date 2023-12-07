import React from "react";

const SelectionList = ({ colleges, difficulty, onChange, selectedCollege }) => {
  
  if (difficulty === "easy") {
    return (
      <select className="form-select full" name="colleges" id="college-select" onChange={onChange} value={selectedCollege}>
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
      <input className="form-control full" type="text" placeholder="Enter college name" onChange={onChange} value={selectedCollege}></input>
    );
  }
};

export default SelectionList;
