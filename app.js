const express = require("express");
const date = require(__dirname + "/date.js");

const app = express();

var items = ["example 1", "example 2"];
var workItems = ["Work item 1", "Work item 2"];

app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){

    var today = date.getDay();

    res.render("list", {listTitle: today, listItems: items});
})

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work To-Do", listItems: workItems})
})

// app.post("/work", function(req, res){
//     workItem = req.body.newListItem;
//     workItems.push(workItem);
//     res.redirect("/work");
// })

app.post("/", function(req, res){
    item = req.body.newListItem;

    console.log(req.body);

    if (req.body.list === "Work"){
        workItems.push(item);
        res.redirect("/work")
    } else {
    items.push(item);
    res.redirect("/");
    }
})

app.listen(3000);