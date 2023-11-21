import React, { useState, useEffect } from "react";
import { getAllHighScoreData } from "../../Common/Services/HighScoreService.js";
import HighScoresList from "./HighScoresList.js";
import { getLeaderBoardNames } from "../../Common/Services/Profileservice.js";
import Profile from "../Profile/Profile";


const Main = () => {
    const [highScores, setHighScores] = useState([]);
    const [leaderboardNames, setLeaderboardNames] = useState([]);
    const [showProfile, setShowProfile] = useState(false);
    const [currentProfile, setCurrentProfile] = useState();

    /**
     * 
     * Callback function to open user profile
     */
    const openProfile = (username) => {
        setShowProfile(true);
        setCurrentProfile(username);
    }

    /**
     * Call back function to close user profile
     */
    const closeProfile = () => {
        setShowProfile(false);
        setCurrentProfile();
    }

    useEffect(() => {
        getAllHighScoreData().then((highScores) => {
        setHighScores(highScores);
    });
    }, []);

    useEffect(() => {
        getLeaderBoardNames().then((names) => {
        const namesToSet = names.map((object) => {
            const lbName = object.get('leaderboardName');
            const uName = object.get('username');
            return [uName,lbName];
        });
        setLeaderboardNames(namesToSet)
    });
    }, []);

    if (showProfile) {
        return(
            <Profile otherUser={true} providedUsername={currentProfile} closeProfile={closeProfile}/>
        );
    }
    // Pass list of high scores to stateless child
    return (
        <div className="card border-dark mx-auto">
            <div className="card-body">
                <h1 className="text-center">Leaderboard</h1>
                <HighScoresList highScores={highScores} leaderboardNames={leaderboardNames} openProfile={openProfile}/>
            </div>
        </div>
    );
};

export default Main;
  