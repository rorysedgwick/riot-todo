var socket = io();

<my-todo>
  <div class="main">
    <header>
      <h2>What will I do today?</h2>
    </header>

    <form onsubmit={ addTask }>
      <input class="text-input" type="text" name="task" placeholder="Start with the 3 most important tasks!" required/>
      <button class="submit" type="submit">+</button>
      <div id="categories">
        <div class="dblue" onclick={ addTask }>+</div>
        <div class="lblue" onclick={ addTask }>+</div>
        <div class="green" onclick={ addTask }>+</div>
        <div class="yellow" onclick={ addTask }>+</div>
        <div class="pink" onclick={ addTask }>+</div>
      </div>
    </form>

    <ul class="task-list">
      <li each={ opts.tasks } onclick={ toggle } id={ category } class={ done }> { taskName }</li>
    </ul>
  </div>

  <script>

  var that = this;
  // when server sends new data, update task list
  socket.on("update", function(data) {

    console.log("updating tasks");
    opts.tasks = data;
    that.update();
  });

  </script>

</my-todo>

