const mongoose = require("mongoose");
require("./patients-model");

const dbName = "patientsDB";
const dbURL = "mongodb://localhost:27017/"+dbName;

mongoose.connect(dbURL);

mongoose.connection.on("connected",function(){
    console.log("Mongoose connected to",dbName);
});

mongoose.connection.on("disconnected",function(){
console.log("Mongoose disconnected");
});

mongoose.connection.on("error",function(){
console.log("Mongoose connection error",err);
});

process.on("SIGINT",function(){
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected by app termination");
        process.exit(0);
    })
});

process.on("SIGTERM",function(){
    mongoose.connection.close(function(){
        console.log("Mongoose disconnected by app termination");
        process.exit(0);
    });
});
