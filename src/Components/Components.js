import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./Game/Game";
import Rules from "./Rules/Rules";
import Nav from "./Nav/Nav";

const Components = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </Router>
  );
};

export default Components;