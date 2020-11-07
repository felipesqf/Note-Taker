var express = require("express");

var app = express();
app.use(express.static(__dirname + '/public'));
var PORT = process.env.PORT || 8080;

var tableData = require("./db/db.json");


//handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });