import React, { useState, useEffect } from "react";
import { getAllCollegeData } from "../../Common/Services/CollegeService.js";
import MainList from "./MainList.js";

const Main = () => {
const [colleges, setColleges] = useState([]);

// useEffect(() => {
//     getAllCollegeData().then((colleges) => {
//     setColleges(colleges);
//     });
// }, []);

// Pass list of colleges to stateless child
return (
    <div>
    <h1>Guess The College</h1>
    <MainList colleges={colleges} />
    </div>
);
};

export default Main;
  