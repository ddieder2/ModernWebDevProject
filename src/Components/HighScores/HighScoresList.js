import Parse from "parse";


const HighScoresList = ({highScores, leaderboardNames, openProfile}) => {

    const extractName = (username) => {
        for (let r = 0; r < leaderboardNames.length; r++) {
                const uName = leaderboardNames[r][0];
                const lbName = leaderboardNames[r][1];
                if (username === uName) {
                    return lbName;
                }
        }
        return username;
    }

    const getName = (username) => {
        if (leaderboardNames !== undefined && leaderboardNames !== null) {
            const name = leaderboardNames[username];
            if (name !== null || name !== undefined) {
                if (username === Parse.User.current().getUsername())
                {
                    return <button onClick={() => {openProfile(username)}} className="emphasize btn btn-link">*{extractName(username)}*</button>;
                } else {
                    return <button onClick={() => {openProfile(username)}} className="emphasize btn btn-link">{extractName(username)}</button>;
                }
            }
        }
        if (username === Parse.User.current().getUsername())
        {
                return <button onClick={() => {openProfile(username)}} className="emphasize btn btn-link">*{username}*</button>;
        }
        return <button onClick={() => {openProfile(username)}} className="emphasize btn btn-link">{username}</button>;
    }
   

    return (
        <>
            {/* Check that the highScore object exists */}
            {highScores && highScores.length > 0 && (
            <ol>
                {/* Using getter for highScore Object to display name */}
                {highScores.sort((a,b) => b.get("highScore") - a.get("highScore")).map((highScore) => (
                <li key={highScore.id}>
                    <span className="emphasize">{highScore.get("highScore")}</span> by <span className="lb_link">{getName(highScore.get('username'))}</span> on <span className="emphasize">{highScore.get("mode")}</span>
                </li>
                ))}
            </ol>
            )}
        </>
    );
};
export default HighScoresList;
  