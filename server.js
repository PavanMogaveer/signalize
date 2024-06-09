// model importing
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { dirname } = require("path");
const { stringify } = require("querystring");

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));



// parsing form data 
app.use(bodyParser.urlencoded({ extended: true }));



// connecntin to database
mongoose.connect('mongodb://localhost:27017/signalize');

// create dataschema
const userSchema = {
    email: String,
    password: String
}

const user = mongoose.model("user", userSchema);



// initilize by serving form file
app.get("/", function (req, res) {
    res.sendFile(__dirname + '/public/signup.html');
})


app.post("/register", function (req, res) {
// default code its running
    let newuser = new user({
        email: req.body.email,
        password: req.body.epass
    });
    newuser.save();
    res.sendFile(__dirname + '/public/signin.html');


})


app.post('/login',function(req,res){
     res.sendFile(__dirname+'/public/home.html')
 
})



// start the server port  
app.listen(3000, function () {
    console.log('Server is running on the port "localhost:3000"');
})
