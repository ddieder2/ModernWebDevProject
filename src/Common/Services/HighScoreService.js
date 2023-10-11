import Parse from "parse";

export const getAllHighScoreData = () => {
  const HighScore = Parse.Object.extend("HighScore");
  const query = new Parse.Query(HighScore);
  return query.find().then((results) => {
    return results;
  });
};