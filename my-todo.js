// Initializing a socket
var socket = io();

socket.on("connectionSuccess", function(socket) {
  console.log("Connection successful");
});

socket.on("allTasks", function(data) {
  console.log("allTasks", data);
});

riot.tag('my-todo', '<form onsubmit="{ addTask }"> <input type="text" name="task"> <input type="submit"> </form> <ul class="task-list"> <li each="{ data }" class="{ status }"> { taskName } </li> </ul>', function(opts) {

});


// function renderTasks(data) {
//   console.log("renderTasks data: ", data);
//   data.forEach(function(task) {
//     $('.task-list').append("<li class=" + task.status + "><span class=" + task.category + "></span> " + task.taskName + "</li>");
//   });
// }

function addTask (e) {

  e.preventDefault();
  var task = this.task.value;
  socket.emit("task-added", task);
}

// var taskArray = [];

riot.mount("*");
