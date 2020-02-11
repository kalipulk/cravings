var express = require("express");
var router = express.Router();

var snacks = require("../models/cravings")

router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            snacks: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.put("/api/snacks/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    burger.update({
        devoured: req.body.devour
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.post("/api/snacks", function(req, res) {
    burger.create([
      "snack_name"
    ], [
      req.body.burger_name
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

module.exports = router;
