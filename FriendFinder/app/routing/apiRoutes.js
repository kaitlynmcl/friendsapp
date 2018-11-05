var friendsData = require("../data/friends.js")


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {             // API GET REQUEST
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {

        var userData = req.body;
        var userScores = userData.scores;                   //TO CALCULATE USER SCORES AS INTG THAT CAN BE COUNTED

        var bestMatch = {
            "name": req.body.name,
            "photo": req.body.photo,
            "scores": userScores
        }

        console.log(bestMatch);                               //LOGS NEW FREN INFO

        var leastDiff = 40;                                 //DETERMINES MAX DIFFERENCE IN SCORE: (5 - 1) * 10 = 40
        var newFriend = friendsData[0];                     // TO ITERATE THROUGH FRIENDS DATA AND DETERMINE NEW FRIEND

        for (var f = 0; f < friendsData.length; f++) {
            var totalDiff = 0;                              // VARIABLE FOR SCORES REGARDING TOTAL DIFFERENCE BETWEEN STORED FREINDS + NEW FRIEND

            for (var j = 0; j < bestMatch.scores.length; j++) {       //FOR LOOP THROUGH NEW FRIEND SCORES
                totalDiff += Math.abs(parseInt(bestMatch.scores[j]) - friendsData[f].scores[j]);  // DETERMINES TOTAL DIFFERENCE BETWEEN bestMatch SCORES AND FREINDSDATA SCORES
            }
            console.log("Total difference: " + totalDiff);

            if (totalDiff < leastDiff) {                    // IF TOTAL DIFFERENCE IN SCORES IS LESS THAN THE LEAST POSSIBLE DIFFERENCE, 
                leastDiff = totalDiff;                      // LEAST DIFFERENCE BECOMES TOTAL DIFFERENCE 
                newFriend = friendsData[f];                 // NEW FRIEND IS THE ONE WITH LEAST DIFFERENCE IN SCORE/BEST MATCH
            }

            console.log("New friend: " + newFriend.name);   //LOGS NEW FRIEND'S NAME, NEW FRIEND IS DETERMINED TO BE THE ONE WITH LEAST DIFFERENCE IN SCORES
        }

        friendsData.push(bestMatch);                          //PUSHES bestMatch TO DATABASE/API LINKS
        res.json(newFriend);                                   //ESTABLISHES NEW FRIEND

    })


}