const express = require("express");
const bodyparser = require("body-parser");
const https = require("https");

const app = express();

app.get("/",function(req,res){
    res.send("<h1>Hello ....</h1>");
})







app.listen(3000,function(){
    console.log("server started on port 3000");
})