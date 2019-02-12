

var friendsData = require("../data/friends");


module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });


    app.post("/api/friends", function (req, res) {

        var match = {
            name: "",
            photo: "",
            difference: 1000
        };
        var userScore = req.body.scores;
        var totalDifference = 0;

        for (var i = 0; i < friendsData.length; i++) {
            totalDifference = 0;

            for (var j = 0; j < friendsData[i].scores[j]; j++) {
                totalDifference += Math.abs(parseInt(userScore[j] - friendsData[i].scores[j]));

                if (totalDifference <= match.difference) {

                    match.name = friendsData[i].name;
                    match.photo = friendsData[i].photo;
                    match.difference = totalDifference;

                }
            }
        }
    
        friendsData.push(req.body);
        res.json(match);


    });

};