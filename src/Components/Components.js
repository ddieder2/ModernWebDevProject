import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Game from "./Game/Game";
import Rules from "./Rules/Rules";
import Nav from "./Nav/Nav";
import Auth from "./Auth/Auth";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Profile from "./Profile/Profile";
import HighScores from "./HighScores/HighScores"

const Components = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route
          path="/"
          element={<ProtectedRoute path="/" element={Game} />}
        />
        <Route path="/rules" element={<Rules />} />
        <Route path="/profile" element={<ProtectedRoute path='profile' element={Profile}/>} />
        <Route path="/leaderboard" element={<ProtectedRoute path='leaderboard' element={HighScores} />} />
        <Route path="*" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default Components;