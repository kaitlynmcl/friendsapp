var path = require("path");                             // INSTALLATION PACKAGES
var express = require('express')

var PORT = 8080;                                        // LOCAL PORT
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
                                                        // TEST PORT IS LISTENING
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  