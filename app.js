var server = require("./api/server.js");

server.start(
  console.log("server running at port " + server.info.port)
);
