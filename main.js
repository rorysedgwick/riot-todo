var socket = io();

// initial mount of riot tags with data from redis
socket.on("allTasks", function(data) {
  console.log("allTasks:", data);
  riot.mount("*", { tasks: data });
});

// when user adds new task, emit data to the server
function addTask (e) {
  e.preventDefault();

  var task = this.task.value;
  socket.emit("task-submitted", task);
  // reset text field to blank
  this.task.value = "";
}

function toggle(e) {
  console.log("this:", this);

   var taskId = this.id;
   var taskStatus = this.done;

  socket.emit("statusUpdate", taskId, taskStatus);
}
