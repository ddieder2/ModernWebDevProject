import React from "react";
import MainList from "./MainList.js";

const Main = ({ college }) => {

// Pass list of colleges to stateless child
return (
    <div>
    <h1>College Guessing Game</h1>
    <MainList college={college} />
    </div>
);
};

export default Main;
  