const HighScoresList = ({ highScores }) => {
    return (
        <div>
            <br />
            <hr />
        <div>
            <p> Leaderboard: </p>
            {/* Check that the highScore object exists */}
            {highScores && highScores.length > 0 && (
            <ul>
                {/* Using getter for highScore Object to display name */}
                {highScores.sort((a,b) => b.get("highScore") - a.get("highScore")).map((highScore) => (
                <li key={highScore.id}>
                    {" "}
                    {highScore.get("highScore")} by {highScore.get("username")} on {highScore.get("mode")}
                </li>
                ))}
            </ul>
            )}
        </div>{" "}
        </div>
    );
    };

    export default HighScoresList;
  