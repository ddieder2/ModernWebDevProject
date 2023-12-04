import Parse from "parse";

export const createDefaultProfile = () => {
    const username = Parse.User.current().getUsername();
    const Profile = Parse.Object.extend('Profile');
    const profile = new Profile();
    profile.set('username', username);
    profile.set('leaderboardName', username);
    profile.set('description', '');
    return profile.save().then((result) => {
        console.log(`Success making profile for ${username}`)
        return result;
    }).catch((error) => {
        alert('Error:' + error.code + " " + error.message);
        return null;
    }
    );
}

export const getLeaderBoardNames = () => {
    const Profile = Parse.Object.extend('Profile');
    const query = new Parse.Query(Profile);
    return query.find().then((object) =>{
        return object;
    }).catch((error) => {
        alert('Error:' + error.code + " " + error.message);
        return null;
    });
}

export const getProfile = (username) => {
    const Profile = Parse.Object.extend('Profile');
    const query = new Parse.Query(Profile);
    query.equalTo('username', username);
    return query.first().then((object) =>{
        return object;
    }).catch((error) => {
        alert('Error:' + error.code + " " + error.message);
            return null;
    });
}

export const updateProfile = (profileObject) => {
    const username = Parse.User.current().getUsername();
    const Profile = Parse.Object.extend('Profile');
    const query = new Parse.Query(Profile);
    console.log("Submitting:", profileObject);
    query.equalTo('username', username);
    query.first().then((object) => {
            console.log("Success");
            object.set('leaderboardName', profileObject['leaderboardName']);
            object.set('description', profileObject['description']);
            object.save()
        }).catch((error) => {
            alert('Error:' + error.code + " " + error.message);
        });
}

export const updateDescription = (description) => {
    const username = Parse.User.current().getUsername();
    const Profile = Parse.Object.extend('Profile');
    const query = new Parse.Query(Profile);
    query.equalTo('username', username);
    query.first({
        success: function(object) {
            object.set('description', description);
            object.save()
        },
        error: function(error) {
            alert('Error:' + error.code + " " + error.message);
        }
    });
}

export const getProfileLeaderboardName = (username) => {
    const Profile = Parse.Object.extend('Profile');
    const query = new Parse.Query(Profile);
    query.equalTo('username', username);

    return query.first().then((profile) => {
        if (profile) {
            // If the profile is found, return the leaderboardName
            return profile.get('leaderboardName');
        } else {
            // If no profile is found, return the provided username
            return username;
        }
    }).catch((error) => {
        console.error('Error:', error.code, error.message);
        return null;
    });
}

