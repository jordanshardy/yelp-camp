var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

 var campgrounds = [
        {name: "Salmon Creek", image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5cedc6b95f731395da7269d2341f9a5e&auto=format&fit=crop&w=1050&q=80"},
        {name: "Lake Trillium", image: "https://images.unsplash.com/photo-1519395612667-3b754d7b9086?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2408b72d00a5efaf0f2e14d02f144790&auto=format&fit=crop&w=1050&q=80"},
        {name: "Mount Hood", image: "https://images.unsplash.com/photo-1517523976439-e29c573a2b27?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=12bb07633a572791aa50cad3db93b4aa&auto=format&fit=crop&w=1050&q=80"}
        ]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
   
        
        res.render("campgrounds", {campgrounds : campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name : name, image : image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The yelp-camp server has started");
});