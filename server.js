var express = require("express");

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