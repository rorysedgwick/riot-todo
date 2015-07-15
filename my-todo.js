var socket = io();

var tasks;

riot.tag('my-todo', '<div class="main"> <header> <h2>What will I do today?</h2> </header> <form onsubmit="{ addTask }"> <input class="text-input" type="text" name="task" placeholder="What will I do today?"> <button class="submit" type="submit">+</button>  </form> <ul class="task-list"> <li each="{ opts.tasks }" onclick="{ toggle }" class="{ done }"> { taskName }</li> </ul> </div>', function(opts) {

  var that = this;

  socket.on("update", function(data) {
    console.log("updating tasks");
    that.update(opts.tasks = data);
  });


});
