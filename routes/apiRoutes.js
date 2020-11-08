const fs = require('fs');
let rawTableData = fs.readFileSync('./db/db.json'); //reading the db file
let tableData = JSON.parse(rawTableData);


module.exports = function(app) {
    //route to display notes
    app.get("/api/notes", function(req, res) {
        return res.json(tableData);
      });
    //route to create note
    app.post("/api/notes", function(req, res) {
        if (tableData.length == 0){ //if db is empty id = 0
            req.body.id= 1;
        }else{
        req.body.id = tableData[tableData.length - 1].id +1 ; //selecting the last id on db and adding 1
        }
        req.body.id.toString()
        tableData.push(req.body);
        let tableDataString = JSON.stringify(tableData)
        fs.writeFileSync('./db/db.json', tableDataString) //writing new array into the db
        return res.json(tableData);
    });
    //Route to delete note
    app.delete("/api/notes/:id", function(req, res) {
        const toFilter = parseInt(req.params.id) 
        tableData = tableData.filter((item) => item.id !== toFilter) //filtering the everything that is not equal to id
        let newTableData = JSON.stringify(tableData)
        fs.writeFileSync('./db/db.json', newTableData) //writing new array into the db
        return res.json(tableData);
    });
}

