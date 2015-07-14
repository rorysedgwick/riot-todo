// Initializing a socket
// QQ How do we have access to this?
var socket = io();
console.log("socket", socket);

socket.on("connectionSuccess", function(socket) {
  console.log("Connection successful");
})

riot.tag('my-todo', '<form onsubmit="{ addTask }"> <input type="text" name="task"> <input type="submit"> </form> <ul class="task-list"></ul>', function(opts) {

});



function addTask (e) {

  e.preventDefault();
  var task = this.task.value;
  console.log(task);
  socket.emit("task-added", task);

  $('.task-list').append("<li>" + task + "</li>");
}
