var socket = io();

var tasks;

<my-todo>
  <div class="main">
    <header>
      <h2>What will I do today?</h2>
    </header>

    <form onsubmit={ addTask }>
      <input class="text-input" type="text" name="task" placeholder="What will I do today?"/>
      <button class="submit" type="submit">+</button>
      <!--
      <div id="categories">
        <div class="dblue-category" onclick={ addTaskWithCategory }>+</div>
        <div class="lblue-category" onclick={ addTaskWithCategory }>+</div>
        <div class="green-category" onclick={ addTaskWithCategory }>+</div>
        <div class="yellow-category" onclick={ addTaskWithCategory }>+</div>
        <div class="pink-category" onclick={ addTaskWithCategory }>+</div>
      </div>
      -->
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
