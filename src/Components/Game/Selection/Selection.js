import {React, useState, useEffect } from "react";
import SelectionList from "./SelectionList.js";
import { getAllCollegeData } from "../../../Common/Services/CollegeService.js";

const Selection = ( { college, score, setScore, setScoreChanged } ) => {
    const initialDifficulty = () => {
      let state = "easy";
      return state;
    };
    const [difficulty, setDifficulty] = useState(initialDifficulty);
    const [colleges, setColleges] = useState([]);
    const [selectedCollege, setSelectedCollege] = useState("");
  
    // get all colleges
    useEffect(() => {
      getAllCollegeData().then((colleges) => {
        console.log(colleges);
        setColleges(colleges);
      });
    }, []);
  
    // sets the state of the difficulty setting which is passed to stateless child
    const handleChange = (value) => {
      setDifficulty(value);
    };

    // checks if guess is correct and updates score accordingly
    const testGuess = (e) => {
      e.preventDefault();
      if(college){
        if(college.get('name') === selectedCollege){
          setScore(score + 1);
        }
        else{
          setScore(0);
        }
        setScoreChanged(true);
      }
    }

    // tracks current selection
    const onChangeHandler = (e) => {
      e.preventDefault();
      setSelectedCollege(e.target.value);
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
            <form>
                <SelectionList colleges={colleges} difficulty={difficulty} onChange={onChangeHandler}/>
                <button type="submit" className="btn btn-dark upper-margin" onClick={testGuess}>Submit</button>
            </form>
            <div>Score: {score}</div>
        </div>
      );
};
  
export default Selection;
