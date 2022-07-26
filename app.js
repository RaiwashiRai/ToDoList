//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use('view engine', 'ejs');

app.get("/", function(req, res){
    // res.send("hello");
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    if (currentDay == 6 || currentDay == 0){
        day = "Weekend";
    }
    else{
        day = "Weekday";
    }
    // res.render method is used for ejs
    res.render("list", {kindOfDay : day});
});



app.listen(8000, function(){
    console.log("server is running on port 8000");
});
