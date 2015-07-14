module.exports = {

  home: function(request, reply) {
    console.log("home handler");
    return reply("index.html")
  }
}
