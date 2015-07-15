var socket = io();

var tasks;

<my-todo>
  <form onsubmit={ addTask }>
    <input type="text" name="task">
    <input type="submit">
  </form>

  <ul class="task-list">
    <li each={ opts.tasks } class={ status }> { taskName }</li>
  </ul>

  var that = this;

  // when server sends new data, update task list
  socket.on("update", function(data) {
    console.log("updating");
    opts.tasks = data;
    that.update();
  });

</my-todo>



