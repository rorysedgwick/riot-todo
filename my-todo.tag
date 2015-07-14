// Initializing a socket
// QQ How do we have access to this?
// AA We are including the socket.io <script> in index.html
var socket = io();

socket.on("connectionSuccess", function(socket) {
  console.log("Connection successful");
});

socket.on("allTasks", function(data) {
  console.log("tasks received by riot", data);
})

<my-todo>
  <form onsubmit={ addTask }>
    <input type="text" name="task">
    <input type="submit">
  </form>

  <ul class="task-list"></ul>
</my-todo>



function addTask (e) {

  e.preventDefault();
  var task = this.task.value;
  console.log(task);
  socket.emit("task-added", task);

  $('.task-list').append("<li class='notDone'><span class=''></span> " + task + "</li>");
}
