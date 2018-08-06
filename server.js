// Dependencies
// =================used final star wars example============================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

            //  take example from hot restaurant server js file
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// bodyParser.text([options]), =new body string with parsed date is populated on the 
// request objectafter middleware or req.body
app.use(bodyParser.text());
// The type option is used to determine what media type the middleware will parse. 
// This option can be a string, array of strings, or a function. 
// If not a function, type option is passed directly to the type-is library and this
//  can be an extension name 
app.use(bodyParser.json(
    {
        type: "application/vnd.api+json"

    }

));

// ===================== pulled example from bottom of hot restaurant server js ===========================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
    //   no need to change example routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================
        // change for env port or 3000
app.listen(process.env.PORT || 3000);
//   console.log("App listening on PORT: " + PORT);

    //  done?
    // I know the code is riddled with notes but I Had 
    // to leave them in as is so i knew what example i
    // pulled them from