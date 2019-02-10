// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

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
            for (var n = 0; n < friendsData[i].scores[n]; n++) {
                totalDifference += Math.abs(parseInt(userScore[n] - friendsData[i].scores[n]))
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

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        friendsData.length = [];

        res.json({
            ok: true
        });
    });
};