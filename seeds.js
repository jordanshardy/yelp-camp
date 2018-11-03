var Campground = require("./models/campground"),
    mongoose = require("mongoose")

function seedDB() {
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("removed campground");
    });
}

module.exports = seedDB;
