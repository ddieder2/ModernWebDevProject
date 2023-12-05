import React from "react";

const ProfileList = (props) => {
   const userProfile = props.userProfile;
   const showUsername = props.showUsername;
   if (userProfile !== null && userProfile !== undefined) {
      console.log(userProfile)
      console.log(userProfile !== null);
      return(
         <>
               {showUsername ? <div data-test='username'><b>Username:</b> {userProfile['username']}</div> : <></>}
               <div data-test='leaderboardName'><b>Leaderboard Name:</b> {userProfile['leaderboardName']}</div>
               <div data-test='description'><b>Description:</b> {userProfile['description']}</div>
         </>
      );
   } else {
      return(
         <div></div>
      )
   }
}

export default ProfileList;