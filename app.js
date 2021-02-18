const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({urlencoded: true}));


app.get("/",function(req,res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/",function (req,res) {
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;
    const data = {
        members = [
            {
                email_address: email,
                status:  "subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    }

    const jsonData = JSON.stringify(data);
    console.log(firstName,lastName,email);

    const url = "https://usX.api.mailchimp.com/3.0/lists"
    https.request(url,options,function(response){

    })

})

app.listen(3000,function(){
    console.log("server started on port 3000");
})


//Api key
//c32a504b13277d128e04d57312616cf6-us1

//List Id
//cdbcd94809