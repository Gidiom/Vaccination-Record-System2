require("./api/database/databaseConnection");
const express = require("express");
const path = require("path");
const route = require("./api/route");

const app = express();

// setting the port number 
app.set("port", 3000);

// body parser ... necessary for post method
app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));


// logging the requests method and url
app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next()
})
app.use("/",route);

var server = app.listen(app.get("port"),function(){
    var port = server.address().port;
    console.log("Server listening on port ",port);
});