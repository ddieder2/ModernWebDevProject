import React, { useState, useEffect } from "react";
import Main from "./Main/Main";
import Selection from "./Selection/Selection";
// import HighScores from "./HighScores/HighScores";
import ChatSetup from "./Chat/ChatSetup";
import { getAllCollegeData } from "../../Common/Services/CollegeService.js";

const Game = () => {
  const [score, setScore] = useState(0);
  const [scoreChanged, setScoreChanged] = useState(true); // set as true to college is selected on load
  const [college, setCollege] = useState(null);
  
  useEffect(() => {
    if(scoreChanged){ // only execute code when scoreChanged is true
      setScoreChanged(false); // reset scoreChanged
      getAllCollegeData().then((colleges) => {
        let newCollege = colleges[Math.floor(Math.random() * colleges.length)];
        // make sure new college is not the same as the previous
        while(newCollege && college && newCollege.get('name') === college.get('name')){
          newCollege = colleges[Math.floor(Math.random() * colleges.length)];
        }
        setCollege(newCollege);
      })
    }
  }, [college, scoreChanged]);

  return (
    <>
    <div className="card border-dark mx-auto">
      <div className="card-body">
      <h1 className="center-text">College Guessing Game</h1>
        <Main college={college} />
        <Selection score={score} setScore={setScore} college={college} setScoreChanged={setScoreChanged} />
      </div>
    </div>
    <ChatSetup />
    </>
  );
};

export default Game;
