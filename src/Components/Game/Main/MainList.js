import React from "react";

const MainList = ({ college }) => {
  // Check if the colleges array is not empty (otherwise errors arise)
  if (college) {

    return (
      <div>
        <hr />
        Guess the college by the following info:
        <ul>
          <li key={college.get('teamName')}>
            Team Name: {college.get('teamName')}
          </li>
          <li key={college.get('footballConference')}>
            Conference: {college.get('footballConference')}
          </li>
          <li key={college.get('type')}>
            Type: {college.get('type')}
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
