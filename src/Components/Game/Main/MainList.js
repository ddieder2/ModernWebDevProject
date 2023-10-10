import React from "react";

const MainList = ({ colleges }) => {
  // Check if the colleges array is not empty (otherwise errors arise)
  if (colleges && colleges.length > 0) {
    // Select random college
    const randomCollege = colleges[Math.floor(Math.random() * colleges.length)];

    return (
      <div>
        <hr />
        Guess the college by the following info:
        <ul>
          <li key={randomCollege.team_name}>
            Team Name: {randomCollege.team_name}
          </li>
          <li key={randomCollege.football_conference}>
            Conference: {randomCollege.football_conference}
          </li>
          <li key={randomCollege.type}>
            Type: {randomCollege.type}
          </li>
        </ul>
      </div>
    );
  } else {
    // Handle the case where the colleges array is empty
    return (
      <div>
        <hr />
        This is the stateless child component, but there are no colleges to
        display.
      </div>
    );
  }
};

export default MainList;
