var redis = require("redis");
var client = redis.createClient();

// read all tasks from redis and return
function readAllTasks(callback) {
  var taskArray = [];

  // fetches set of tasks ids
  client.smembers("idSet", function(err, reply) {
    reply.forEach(function(key) {

      // for each id return all hash info
      client.hgetall(key, function(err, reply) {
        taskArray.push(reply);
      });
    });
  });

  // Remove setTimeout when we have the time
  setTimeout(function() {
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

      if (err) {
        console.log("id sadd err: ", err);
      } else {
        console.log("id sadd successful");

        // once new task is added, return all data
        readAllTasks(callback);
      }
    });
  });
}

module.exports = {
  readAllTasks: readAllTasks,
  storeTask: storeTask
};
