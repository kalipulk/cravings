var express = require("express");
var db = require("../models")
var snacks = require("../models/cravings");
var router = express.Router();

router.get('/', function (req, res) {
    db.cravings.findAll({raw:true}).then(function(data){
        var hbsobject = {
            cravings: data
        }
        console.log("this is cravings", data);
        res.render("index", hbsobject)
    })
});

router.post('/cravings/create', function (req, res) {
    console.log("hit the route", req.body);
    db.cravings.create({
        name: req.body.name,
        devoured: false
    }).then(function(newCrave){
        console.log(newCrave)
        res.json(newCrave);
    })
});

router.put('/cravings/:id', function (req, res) {
    console.log("hit the put route");
    db.cravings.update({
        // name: req.body.name,
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(hbsobject) {
        res.json(hbsobject);
    })
});

router.delete('/cravings/:id', function (req, res) {
    db.cravings.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(hbsobject){
          res.json(hbsobject);
        })
});

// app.use(routes);


module.exports = router;
