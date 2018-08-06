// ============= pulled from hot restaurant activity =================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
                //  modify to got to /survey somehow
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
        // don't need but save example for another page/route
//   app.get("/reserve", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/reserve.html"));
//   });
        // think this example will work as-is
  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
// done i think