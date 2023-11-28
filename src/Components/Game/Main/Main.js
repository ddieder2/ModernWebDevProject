import React, { useState, useEffect } from "react";
import { getAllCollegeData } from "../../../Common/Services/CollegeService.js";
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
  