import React from "react";

const ProfileList = (props) => {
   const userProfile = props.userProfile;
   if (userProfile !== null && userProfile !== undefined) {
      console.log(userProfile)
      console.log(userProfile !== null);
      return(
         <>
               <div><b>Username:</b> {userProfile['username']}</div>
               <div><b>Leaderboard Name:</b> {userProfile['leaderboardName']}</div>
               <div><b>Description:</b> {userProfile['description']}</div>
         </>
      );
   } else {
      return(
         <div></div>
      )
   }
}

export default ProfileList;