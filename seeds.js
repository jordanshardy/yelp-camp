var Campground = require("./models/campground"),
    mongoose = require("mongoose")

var data = [{
    name: "Clouds Rest"
}]

function seedDB() {
    // ADD NEWCAMPGROUNDS
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("removed campground");
    });
}

module.exports = seedDB;
