//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];
let studyItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

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
    res.render("list.ejs", {listTitle : day, newListItem: items});
});

app.post("/", function(req, res){

    let item = req.body.newListItem_;

    // console.log(req.body);

    if (req.body.list === "Study"){
        studyItems.push(item);
        res.redirect("/study");
    }
    else{
        items.push(item);
        res.redirect("/");
    }

});

// study list
app.get("/study", function(req, res){
    res.render("list.ejs", {listTitle : "Study", newListItem: studyItems});
});


app.listen(8000, function(){
    console.log("server is running on port 8000");
});
