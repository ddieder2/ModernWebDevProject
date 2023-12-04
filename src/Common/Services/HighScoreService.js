import Parse from "parse";

export const getAllHighScoreData = () => {
  const HighScore = Parse.Object.extend("HighScore");
  const query = new Parse.Query(HighScore);
  return query.find().then((results) => {
    return results;
  });
};

export const saveHighScore = (score, mode) => {
  const user = Parse.User.current();
  const username = Parse.User.current().getUsername();
  const HighScore = Parse.Object.extend('HighScore');
  const highScore = new HighScore();
  highScore.set('highScore', score)
  highScore.set('user', user);
  highScore.set('mode', mode);
  highScore.set('username', username);
  return highScore.save().then((result) => {
      console.log(`Success saving high score for ${username}`)
      return result;
  }).catch((error) => {
      alert('Error:' + error.code + " " + error.message);
      return null;
  });
}