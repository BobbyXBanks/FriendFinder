// ============= hot restaurant example as starting point==================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");
// var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
            //   modify to route /api/friends
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
                // second get not needed but keep just in case
//   app.get("/api/waitlist", function(req, res) {
//     res.json(waitListData);
//   });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

                    // modify this to post route to /api/friends

  app.post("/api/friends", function(req, res) {
    //   variable for person who does survey
    var surveyFriend = req.body;
    // best match object
    var bestMatch = {?};

    // based on scores by

    // looping through friends scores

    // compare friends scores with user score

    // best match is friend with the least difference in score?





  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     friendsData = [];
//     waitListData = [];

//     console.log(friendsData);
//   });
};

// done except the content of the app.post function 

// I know the code is riddled with notes but I Had 
//     to leave them in as is so i knew what example i
//     pulled them from