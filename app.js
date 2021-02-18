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
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;
    const data = {
        members: [
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

    const url = "https://us1.api.mailchimp.com/3.0/lists/cdbcd94809";
    const options = {
        method: "POST",
        auth: "karthy:c32a504b13277d128e04d57312616cf6-us1"
    }
   const request = https.request(url,options,function(response){

    if(response.statusCode === 200){
        res.sendFile(__dirname + "/success.html");
    }else{
        res.sendFile(__dirname + "/failure.html");
    }

        response.on("data",function (data) {
            var dataa = JSON.parse(data);
            console.log(dataa);
        })
    })

    request.write(jsonData);
    request.end();
})

app.post("/failure",function (req,res) {
    res.redirect("/")
})

app.listen(process.env.PORT || 3000,function(){
    console.log("server started on port 3000");
})


