import {React, useState, useEffect } from "react";
import SelectionList from "./SelectionList.js";
  
const Selection = () => {
    const initialDifficulty = () => {
      let state = "easy";
      return state;
    };
    const [difficulty, setDifficulty] = useState(initialDifficulty);
    const [colleges, setColleges] = useState([]);
  
    // get all colleges
    // useEffect(() => {
    //   getAllCollegeData().then((colleges) => {
    //     setColleges(colleges);
    //   });
    // }, []);
  
    // sets the state of the difficulty setting which is passed to stateless child
    const handleChange = (value) => {
      setDifficulty(value);
    };
  
    // TODO: Add action to form to check response
    return (
        <div>
            <div class="btn-group" role="group" id="difficulty-selector">
                <button
                    type="button"
                    class="btn btn-dark"
                    onclick={() => {
                        handleChange("easy");
                    } }
                >
                    Easy
                </button>
                <button
                    type="button"
                    class="btn btn-dark"
                    onclick={() => {
                        handleChange("hard");
                    } }
                >
                    Hard
                </button>
            </div>
            <form action="">
                <SelectionList colleges={colleges} difficulty={difficulty} />
                <button class="btn btn-dark upper-margin">Submit</button>
            </form>
        </div>
      );
};
  
export default Selection;
