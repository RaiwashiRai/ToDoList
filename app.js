
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use('view engine', 'ejs')

app.get("/", function(req, res){
    res.send("hello");
});



app.listen(8000, function(){
    console.log("server is running on port 8000");
});
