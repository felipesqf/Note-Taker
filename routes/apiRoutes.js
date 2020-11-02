
let tableData = require("../data/tableData");


module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(tableData);
      });

    app.post("/api/notes", function(req, res) {
        tableData.push(req.body);
    });

    app.post("/api/notes/:id", function(req, res) {
        tableData.push(req.body);
    });
    
}









// * The following API routes should be created:

// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

// * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
