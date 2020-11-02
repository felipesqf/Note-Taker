
var path = require("path");

//html routing

module.exports = function(app) {


  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });


  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
};






// * The following HTML routes should be created:

//   * GET `/notes` - Should return the `notes.html` file.

//   * GET `*` - Should return the `index.html` file

// * The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.
