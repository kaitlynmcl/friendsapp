var path = require("path");                             // INSTALLATION PACKAGES
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3000;



app.use(express.urlencoded({ extended: true }));
app.use(express.static("./app/public"));
app.use(bodyParser.json());

                                                        // REQUIRES ROUTES
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
                                                        // TEST PORT IS LISTENING
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  