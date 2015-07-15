var socket = io();

var tasks;

riot.tag('my-todo', '<form onsubmit="{ addTask }"> <input type="text" name="task"> <input type="submit"> </form> <ul class="task-list"> <li each="{ opts.tasks }" onclick="{ toggle }" class="{ done }"> { taskName }</li> </ul>', function(opts) {

  var that = this;

  socket.on("update", function(data) {
    console.log("updating");
    opts.tasks = data;
    that.update();
  });



});



