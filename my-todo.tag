// Initializing a socket
// QQ How do we have access to this?
var socket = io();
console.log("socket", socket);

socket.on("connectionSuccess", function(socket) {
  console.log("Connection successful");
})

<my-todo>
  <form onsubmit={ addTask }>
    <input type="text" name="task">
    <input type="submit">
  </form>
</my-todo>

function addTask () {
  socket.emit("task-added")
}
