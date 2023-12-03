import React from "react";
import MainList from "./MainList.js";

const Main = ({ college }) => {

// Pass list of colleges to stateless child
return (
    <div>
    <h1>Guess The College</h1>
    <MainList college={college} />
    </div>
);
};

export default Main;
  