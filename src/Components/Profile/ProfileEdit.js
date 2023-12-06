import React from "react";

const ProfileEdit = (props) => {
   const userProfile = props.userProfile;
   const onChange = props.onChange;
   const scores = props.scores;

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
                name="leaderboardName"
                data-test="leaderboard-name-input"></input></div>
               <div className="upper-margin"><label><b>Description: </b></label>
               <textarea type="text"
                className="form-control full"
                id="description-input"
                value={userProfile['description']}
                onChange={onChange}
                name="description"
                data-test="description-input"></textarea></div>
               <div><b>High Scores:</b>
                  <ol data-test='scores'>{scores.map((highScore) => 
                     (<li><span className="emphasize">{highScore.get("highScore")}</span> on <span className="emphasize">{highScore.get("mode")}</span></li>))}
                  </ol>
               </div>
         </>
      );
   } else {
      return(
         <div></div>
      )
   }
}

export default ProfileEdit;