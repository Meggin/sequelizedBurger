var express = require("express");

var router = express.Router();

// Import the models
var db = require("../models");

// Get all burgers in burger database and render on page.
router.get("/", function(req, res) {
  db.Burger.findAll({
    // Include the associated customer.
    include: [db.Customer]
  }).then(function(results) {
    var hbsBurgerObject = {
      burgers: results
    };
    console.log("Burger object: " + hbsBurgerObject);
    res.render("index", hbsBurgerObject);
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
// Post customer to database and associate it with burger.
// Refresh page to move it to devoured list.
router.put("/:id", function(req, res) {

  console.log("Customer name is here: " + req.body.customer_name);

  var customer = req.body.customer_name;

  db.Burger.update({
    devoured: req.body.devoured
  }, {
    where: {
      id: req.params.id,
    }
  }).then(function() {
    // Post customer to database and associate it with burger.
    db.Customer.create({
      customer_name: customer,
      BurgerId: req.params.id
    }).then(function() {
      res.redirect("/");
    });
  });
});

// Export routes for server.js to use.
module.exports = router;
