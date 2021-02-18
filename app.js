const express = require("express");
const bodyparser = require("body-parser");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({urlencoded: true}));


app.get("/",function(req,res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/",function (req,res) {
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var email = req.body.email;
    console.log(firstName,lastName,email);
})

app.listen(3000,function(){
    console.log("server started on port 3000");
})