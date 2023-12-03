import React from "react";

const ProfileEdit = (props) => {
   const userProfile = props.userProfile;
   const onChange = props.onChange;

   if (userProfile !== null && userProfile !== undefined) {
      console.log(userProfile)
      console.log(userProfile !== null);
      return(
         <>
               <div className="upper-margin"><b>Username:</b> {userProfile['username']}</div>
               <div className="upper-margin"><label><b>Leaderboard Name: </b></label>
                <input type="text"
                className="form-control full"
                id="leaderboard-name-input"
                value={userProfile['leaderboardName']}
                onChange={onChange}
                name="leaderboardName"></input></div>
               <div className="upper-margin"><label><b>Description: </b></label>
               <textarea type="text"
                className="form-control full"
                id="description-input"
                value={userProfile['description']}
                onChange={onChange}
                name="description"></textarea></div>
         </>
      );
   } else {
      return(
         <div></div>
      )
   }
}

export default ProfileEdit;