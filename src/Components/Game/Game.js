import React from "react";
import Main from "./Main/Main";
import Selection from "./Selection/Selection";
import HighScores from "./HighScores/HighScores";


const Game = () => {
  return (
    <div>
        <Main/>
        <Selection/>
        <HighScores/>
    </div>
  );
};

export default Game;