
var path = require("path");

let tableData = require("../db/db.json");
//html routing

module.exports = function(app) {


  app.get("/notes.html", function(req, res) {
    res.sendFile(path.join(process.cwd(), "/public/notes.html"));
  });


  app.get("*", function(req, res) {
    res.sendFile(path.join(process.cwd(), "/public/index.html"));
  });
};




// * The following HTML routes should be created:

//   * GET `/notes` - Should return the `notes.html` file.

//   * GET `*` - Should return the `index.html` file

// * The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.
