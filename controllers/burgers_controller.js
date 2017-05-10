var express = require("express");

var router = express.Router();

// Import the models
var db = require("../models");

// Get all burgers in burger database and render on page.
router.get("/", function(req, res) {
  db.Burger.findAll({}).then(function(results) {
    var hbsObject = {
      burgers: results
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Post new burger to database and refesh page to see it.
router.post("/", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function(){
    res.redirect("/");
  });
});

// Mark burger as devoured in database.
// Refresh page to move it to devoured list.
router.put("/:id", function(req, res) {

  db.Burger.update({
    devoured: req.body.devoured
  }, {
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
