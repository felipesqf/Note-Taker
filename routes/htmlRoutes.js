var path = require("path");

//html routing
module.exports = function(app) {
//route for the notes page
  app.get("/notes.html", function(req, res) {
    res.sendFile(path.join(process.cwd(), "/public/notes.html"));
  });

//rout for the main page and everything else
  app.get("*", function(req, res) {
    res.sendFile(path.join(process.cwd(), "/public/index.html"));
  });
};

