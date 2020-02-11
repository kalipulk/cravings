var express = require("express");
var db = require("../models")
var snacks = require("../models/cravings");
var router = express.Router();

router.get('/', function (req, res) {
    res.redirect('/cravings');
});

router.get('/cravings', function (req, res) {
    db.Cravings.findAll({ raw: true }).then(function(snacks) {
        console.log('getting snacks', snacks)
        res.render('index', { snack_data: snacks });
    });
});

router.post('/cravings/create', function (req, res) {
    db.Cravings.create({
        name: req.body.name,
        devoured: false
    }).then(function(snacks) {
        console.log('created new snack', snacks);
        res.redirect('/');
    })
});

router.put('/cravings/:id', function (req, res) {
    db.Cravings.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(snacks) {
        res.sendStatus(200);
    })
});

module.exports = router;
