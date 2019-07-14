var express = require("express");

// Creating  router to be exported in the end
var router = express.Router();

// Requiring our models
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers/new", function(req, res) {
    db.Burger.create({
        burger_name: req.body.name
    }).then(function(result) {
        // Send back the ID of the new quote
        // res.json({ id: result.insertId });
        res.redirect("/");
    });
});

router.put("/api/burgers/:id", function(req, res) {

    db.Burger.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            // res.redirect("/");
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {

    db.Burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
    // res.redirect("/");
});

// Export routes for server.js to use.
module.exports = router;