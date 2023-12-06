import React, {useEffect, useState} from "react";
import Parse from "parse";
import { getProfile, updateProfile } from "../../Common/Services/Profileservice";
import { getHighScoreForUser } from "../../Common/Services/HighScoreService";
import ProfileList from "./ProfileList";
import ProfileEdit from "./ProfileEdit";


const Profile = ({otherUser, providedUsername, closeProfile}) => {
    const [profile, setProfile] = useState({username: "", leaderboardName: "", description:""});
    const [edit, setEdit] = useState(false);
    const [scores, setScores] = useState([]);

    useEffect(() => {
        console.log('attempting to access user profile');
        var un;
        if (otherUser) {
            un = providedUsername;
        } else {
            un = Parse.User.current().getUsername()
        }

        getProfile(un).then((profile) => {
            if (profile !== null && profile !== undefined) {
                const username = profile.get('username');
                const leaderboardName = profile.get('leaderboardName');
                const description = profile.get('description');
                setProfile({username: username, leaderboardName: leaderboardName, description: description});
                getHighScoreForUser(un).then((scoreObjects) => {
                    if (scoreObjects) {
                        scoreObjects.sort((a,b) => b.get("highScore") - a.get("highScore"));
                        const finalScores = (scoreObjects.length >= 5) ? scoreObjects.slice(0, 5) : scoreObjects;
                        setScores(finalScores);
                    }
                });
            }
        });
    }, [otherUser, providedUsername]);

    const changeToEditMode = () => {
        if (!otherUser) {
            setEdit(true);
        }
    }

    const onChangeHandler = (e) => {
        const { name, value: newValue } = e.target;
    
        setProfile({
          ...profile,
          [name]: newValue
        });
      };

    const onSubmitHandler = (e) => {
        if (!otherUser) {
            updateProfile(profile)
            setEdit(false)
        }
    };
    
    console.log("otherUser", otherUser)
    if (otherUser) {
        return (
            <div className="card border-dark mx-auto">
                <div className="card-body">
                    <button onClick={() => {closeProfile()}}className="btn btn-dark small">&lt;</button>
                    <h1 className="text-center">Profile</h1>
                    <ProfileList userProfile={profile} showUsername={false} scores={scores}/>
                </div>
            </div>
        );
    } else if (!edit) {
        return (
            <div className="card border-dark mx-auto">
                <div className="card-body">
                    <h1 className="text-center">Profile</h1>
                    <ProfileList userProfile={profile} showUsername={true} scores={scores}/>
                    <button data-cy="profile-edit" className="btn btn-dark small upper-margin" onClick={()=>{changeToEditMode()}}>Edit Profile</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="card border-dark mx-auto">
                <div className="card-body">
                    <h1 className="text-center">Profile</h1>
                    <ProfileEdit userProfile={profile} onChange={onChangeHandler} scores={scores}/>
                    <button data-cy="profile-submit" className="btn btn-dark small upper-margin" onClick={()=>{onSubmitHandler()}}>Submit Profile</button>
                </div>
            </div>
        );
    }
}

export default Profile;