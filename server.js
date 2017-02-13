var express = require("express");
var mongoose = require("mongoose");






var app = express();

var port = (process.env.PORT || 3000);
app.get("/",function(req,res,next){

    res.send("hello world");


})
app.get("/home",function(req,res,next){

    res.send("home");


});

app.listen(port,function(){
    console.log("local host is on port 3000");
})


mongoose.connect('mongodb://mughees605:mughees1996@ds151289.mlab.com:51289/hello-world');
mongoose.connection.on("connected",function(){
    console.log("moongose is connected")
})