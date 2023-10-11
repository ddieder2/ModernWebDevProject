import React, { useState, useEffect } from "react";
import { getAllHighScoreData } from "../../../Common/Services/HighScoreService.js";
import HighScoresList from "./HighScoresList.js";

const Main = () => {
const [highScores, setHighScores] = useState([]);

useEffect(() => {
    getAllHighScoreData().then((highScores) => {
    setHighScores(highScores);
    });
}, []);

// Pass list of high scores to stateless child
return (
    <div>
    <HighScoresList highScores={highScores} />
    </div>
);
};

export default Main;
  