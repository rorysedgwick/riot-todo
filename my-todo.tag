var socket = io();

var tasks;

<my-todo>
  <div class="main">
    <header>
      <h2>What will I do today?</h2>
    </header>

    <form onsubmit={ addTask }>
      <input class="text-input" type="text" name="task">
      <input class="submit" type="submit">
    </form>

    <ul class="task-list">
      <li each={ opts.tasks } onclick={ toggle } class={ done }> { taskName }</li>
    </ul>
  </div>

  var that = this;
  // when server sends new data, update task list
  socket.on("update", function(data) {
    console.log("updating tasks");
    that.update(opts.tasks = data);
  });

</my-todo>
