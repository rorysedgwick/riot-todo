var handler = require("./handlers.js");

var routes = [

  {
    path: "/",
    method: "GET",
    handler: handler.home
  }

]

module.exports = routes;
