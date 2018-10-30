var http = require("http");                             // INSTALLATION PACKAGES
var express = require('express')
var fs = require("fs");

var PORT = 8080;                                        // LOCAL PORT

function handleRequest(request, response) {             // HITS HTTP PATH
    response.end("It Works!! Path Hit: " + request.url);
  }

  var server = http.createServer(handleRequest);        // TEST PORT IS WORKING
  server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
  });

