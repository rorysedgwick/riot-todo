var Hapi           = require('hapi');
var routes         = require('./routes.js');
var redis          = require("./redis.js");
var server         = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(process.env.PORT) || 8000
});

var io = require("socket.io")(server.listener);

io.on("connection", function (socket) {
  console.log('connection on');
  socket.emit("connectionSuccess")

  socket.on("task-added", function (task){
    // console.log("task received on server", task);
    redis.storeTask(task, function() {
      console.log("task passed to redis");
    })
  });
});

// server.views({
//   engines: {
//     "html": require("handlebars")
//   },
//   relativeTo: __dirname,
//   path: '../public',
// });

server.route(routes);

server.start(
  console.log("server running at port " + server.info.port)
);

module.exports = server;
