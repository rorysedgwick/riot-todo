var redis = require("redis");
var config = require("./config").url;

if (process.env.REDISTOGO_URL) {
    // TODO: redistogo connection
    var rtg   = require("url").parse(process.env.REDISTOGO_URL);
    var client = redis.createClient(rtg.port, rtg.hostname);
    client.auth(rtg.auth.split(":")[1]);
} else {
    var client = redis.createClient();
}

// read all tasks from redis and return
function readAllTasks(callback) {
  var taskArray = [];

  // fetches set of tasks ids
  client.smembers("idSet", function(err, reply) {

    var replyLength = reply.length;

    if (replyLength > 0) {

      reply.forEach(function(key) {

        // for each id return all hash info
        client.hgetall(key, function(err, reply) {
          taskArray.push(reply);

          if (taskArray.length === replyLength) {
            callback(null, taskArray);
          }
        });
      });
    } else {
      callback(null, taskArray)
    }
  });
}

function storeTask(task, category, callback) {

  client.select(0, function() {

    // Random id for each task
    var id = Math.floor(Math.random() * 1000);
    client.hmset(id, {
      "id": id,
      "taskName": task,
      "done": "not-done",
      "category": category
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

function updateStatus(taskId, taskStatus, callback) {

  client.select(0, function() {

    var update;
    if (taskStatus == "not-done") {
      update = "done"
    } else {
        update = "not-done"
      }

    client.hset(taskId, "done", update, function(err, reply) {

      if (err) {
        console.log("status update err:", err);
      } else {
        console.log("status update successful");

        readAllTasks(callback);
      }
    })
  });
}

module.exports = {
  readAllTasks: readAllTasks,
  storeTask: storeTask,
  updateStatus: updateStatus
};
