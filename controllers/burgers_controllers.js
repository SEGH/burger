// Require express, burger.js
const express = require("express");
const burger = require("../models/burger.js");

// Create app router
const router = express.Router();

//Routes
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log(req.body.name);
    burger.insertOne(req.body.name, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    console.log(req.params.id);
    burger.updateOne(req.params.id, function(result) {
        if (result.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export router
module.exports = router;