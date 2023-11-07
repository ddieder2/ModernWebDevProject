import {React, useState, useEffect } from "react";
import SelectionList from "./SelectionList.js";
import { getAllCollegeData } from "../../../Common/Services/CollegeService.js";
  
const Selection = () => {
    const initialDifficulty = () => {
      let state = "easy";
      return state;
    };
    const [difficulty, setDifficulty] = useState(initialDifficulty);
    const [colleges, setColleges] = useState([]);
  
    // get all colleges
    useEffect(() => {
      getAllCollegeData().then((colleges) => {
        setColleges(colleges);
      });
    }, []);
  
    // sets the state of the difficulty setting which is passed to stateless child
    const handleChange = (value) => {
      setDifficulty(value);
    };
  
    // TODO: Add action to form to check response
    return (
        <div>
            <div className="btn-group" role="group" id="difficulty-selector">
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={()=>handleChange("easy")} 
                >
                    Easy
                </button>
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() =>handleChange("hard")} 
                >
                    Hard
                </button>
            </div>
            <form action="">
                <SelectionList colleges={colleges} difficulty={difficulty} />
                {/* TO-DO: Add functionality for on Submit */}
                <button className="btn btn-dark upper-margin">Submit</button>
            </form>
        </div>
      );
};
  
export default Selection;
