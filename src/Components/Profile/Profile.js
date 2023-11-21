import React, {useEffect, useState} from "react";
import { getProfile, updateProfile } from "../../Common/Services/Profileservice";
import ProfileList from "./ProfileList";
import ProfileEdit from "./ProfileEdit";

const Profile = () => {
    const [profile, setProfile] = useState({username: "", leaderboardName: "", description:""});
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        console.log('attempting to access user profile');
        getProfile().then((profile) => {
            if (profile !== null && profile !== undefined) {
                const username = profile.get('username');
                const leaderboardName = profile.get('leaderboardName');
                const description = profile.get('description');
                setProfile({username: username, leaderboardName: leaderboardName, description: description});
            }
        });
    }, []);

    const changeToEditMode = () => {
        setEdit(true);
    }

    const onChangeHandler = (e) => {
        const { name, value: newValue } = e.target;
    
        setProfile({
          ...profile,
          [name]: newValue
        });
      };

      const onSubmitHandler = (e) => {
        updateProfile(profile)
        setEdit(false)
      };

    if (!edit) {
        return (
            <div className="card border-dark mx-auto">
                <div className="card-body">
                    <h1 className="text-center">Profile</h1>
                    <ProfileList userProfile={profile}/>
                    <button className="btn btn-dark small upper-margin" onClick={()=>{changeToEditMode()}}>Edit Profile</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="card border-dark mx-auto">
                <div className="card-body">
                    <h1 className="text-center">Profile</h1>
                    <ProfileEdit userProfile={profile} onChange={onChangeHandler}/>
                    <button className="btn btn-dark small upper-margin" onClick={()=>{onSubmitHandler()}}>Submit Profile</button>
                </div>
            </div>
        );
    }
}

export default Profile;