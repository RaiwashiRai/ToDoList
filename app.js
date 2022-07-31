//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    // res.send("hello");
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleString("en-US", options);
    // res.render method is used for ejs
    res.render("list.ejs", {kindOfDay : day, newListItem: items});
});

app.post("/", function(req, res){
    let item = req.body.newListItem_;

    items.push(item);

    res.redirect("/");
});

app.listen(8000, function(){
    console.log("server is running on port 8000");
});
