var Hapi           = require('hapi');
var routes         = require('./routes.js');
var redis          = require("./redis.js");
var server         = new Hapi.Server();

server.connection({
  port: Number(process.env.PORT) || 8000
});

var io = require("socket.io")(server.listener);

io.on("connection", function (socket) {
  // on connection grab all data from redis
  console.log("io connection");

  var allTasks = redis.readAllTasks(function(err, data) {

    if (err) {
       console.log("readAllTasks error:", err);
    } else {
      socket.emit("allTasks", data);
    }
  });

  // when new task is created, store it to redis
  socket.on("task-submitted", function(task) {

    redis.storeTask(task, function() {

      // once task is saved, read all from redis and emit to front end
      var allTasks = redis.readAllTasks(function(err, data) {

        if (err) {
           console.log("readAllTasks error:", err);
        } else {
          socket.emit("update", data);
        }
      });
    });
  });

  socket.on("statusUpdate", function(taskId, taskStatus) {
    redis.updateStatus(taskId, taskStatus, function() {

      // once status is updated, read all from redis and emit to front end
      var allTasks = redis.readAllTasks(function(err, data) {

        if (err) {
           console.log("status update error:", err);
        } else {
          console.log("emitting status update");
          socket.emit("update", data);
        }
      });
    });
  });

});


server.route(routes);

server.start(
  console.log("server running at port " + server.info.port)
);

module.exports = server;
