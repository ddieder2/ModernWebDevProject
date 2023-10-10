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
          <li key={randomCollege.get('teamName')}>
            Team Name: {randomCollege.get('teamName')}
          </li>
          <li key={randomCollege.get('footballConference')}>
            Conference: {randomCollege.get('footballConference')}
          </li>
          <li key={randomCollege.get('type')}>
            Type: {randomCollege.get('type')}
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
