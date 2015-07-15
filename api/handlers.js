var path  = require("path");
var index = path.join(__dirname, "../public/index.html");

module.exports = {

  home: function(request, reply) {
    return reply.file(index);
  }
};
