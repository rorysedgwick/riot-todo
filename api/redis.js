var redis = require("redis");
var client = redis.createClient();


function storeTask(task, callback) {
  console.log("storeTask handler");

  client.select(0, function() {

    // Random id for each task
    var id = Math.floor(Math.random() * 1000);
    client.hmset(id, {
      "taskName": task
    }, callback);
  });
}

module.exports = {
  storeTask: storeTask
};
