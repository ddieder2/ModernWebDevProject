import Parse from "parse";

export const getAllCollegeData = () => {
  const College = Parse.Object.extend("College");
  const query = new Parse.Query(College);
  return query.find().then((results) => {
    return results;
  });
};