var redis = require("redis");
var client = redis.createClient();


function readAllTasks(callback) {
  var taskArray = [];

  client.smembers("idSet", function(err, reply) {
    reply.forEach(function(key) {
      client.hgetall(key, function(err, reply) {
        taskArray.push(reply);
      });
    });
  });

  // Remove setTimeout when we have the time
  setTimeout(function() {
    // console.log("taskArray in readAllTasks: ", taskArray);
    callback(null, taskArray);
  }, 500);
};



function storeTask(task, callback) {

  client.select(0, function() {

    // Random id for each task
    var id = Math.floor(Math.random() * 1000);
    client.hmset(id, {
      "taskName": task,
      "status": "not-done",
      "category": "red"
    }, callback);
    client.sadd("idSet", id, function(err, reply) {
      if (err) console.log("id sadd err: ", err);
      else console.log("id sadd successful");
    });
  });
}

module.exports = {
  readAllTasks: readAllTasks,
  storeTask: storeTask
};
