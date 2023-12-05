import {React, useState, useEffect } from "react";
import SelectionList from "./SelectionList.js";
import { getAllCollegeData } from "../../../Common/Services/CollegeService.js";
import { saveHighScore } from "../../../Common/Services/HighScoreService.js";

const Selection = ( { college, score, setScore, setScoreChanged } ) => {
    const initialDifficulty = () => {
      let state = "easy";
      return state;
    };
    const [difficulty, setDifficulty] = useState(initialDifficulty);
    const [colleges, setColleges] = useState([]);
    const [selectedCollege, setSelectedCollege] = useState("");
    const [disableDifficultyChange, setDisableDifficultyChange] = useState(false);
    const [highscoreMessage, setHighScoreMessage] = useState('');
  
    // get all colleges
    useEffect(() => {
      getAllCollegeData().then((colleges) => {
        setColleges(colleges.sort(function (a, b) {
          if (a.get('name') < b.get('name')) {
            return -1;
          }
          if (a.get('name') > b.get('name')) {
            return 1;
          }
          return 0;
        }));
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
        setHighScoreMessage('');
        if(selectedCollege === college.get('name') || selectedCollege === college.get('SimpleName')){
          setScore(score + 1);
          setDisableDifficultyChange(true);
        }
        else{
          if (score !== 0) {
          saveHighScore(score, difficulty);
          setHighScoreMessage('Congratulations! Your score of ' + score.toString() + ' was added to the leaderboard!');
          setScore(0);
          setDisableDifficultyChange(false);
          }
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
                    disabled={disableDifficultyChange}
                    type="button"
                    className="btn btn-dark"
                    onClick={()=>handleChange("easy")} 
                >
                    Easy
                </button>
                <button
                    disabled={disableDifficultyChange}
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
            <div className="highScore">{highscoreMessage}</div>
        </div>
      );
};
  
export default Selection;
