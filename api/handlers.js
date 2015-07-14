var path  = require("path");
var index = path.join(__dirname, "../index.html")
console.log(__dirname);

module.exports = {

  home: function(request, reply) {
    console.log("home handler");
    return reply.file(index)
  }
}
