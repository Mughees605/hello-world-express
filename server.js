var express = require("express");

var app = express();

app.get("/",function(req,res,next){

    res.send("hello world");


})
app.get("/home",function(req,res,next){

    res.send("home");


})

app.listen(3000,function(){
    console.log("local host is on port 3000");
})