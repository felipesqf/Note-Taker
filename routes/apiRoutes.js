
// let tableData = require("../db/db.json");

const fs = require('fs');
let rawTableData = fs.readFileSync('./db/db.json');
let tableData = JSON.parse(rawTableData);


module.exports = function(app) {
    app.get("/api/notes", function(req, res) {
        return res.json(tableData);
      });

    app.post("/api/notes", function(req, res) {
        if (tableData.length == 0){
            req.body.id= 1;
        }else{
        req.body.id = tableData[tableData.length - 1].id +1 ;
        }
        req.body.id.toString()
        tableData.push(req.body);
        let tableDataString = JSON.stringify(tableData)
        fs.writeFileSync('./db/db.json', tableDataString)
        return res.json(tableData);
    });

    app.delete("/api/notes/:id", function(req, res) {
        const toFilter = parseInt(req.params.id)
        tableData = tableData.filter((item) => item.id !== toFilter)
        let newTableData = JSON.stringify(tableData)
        fs.writeFileSync('./db/db.json', newTableData)
        return res.json(tableData);
    });
}


// * The following API routes should be created:
// * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.
// * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
// * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
