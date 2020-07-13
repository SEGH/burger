// Require express, burger.js
const express = require("express");
const burger = require("../models/burger.js");

// Create app router
const router = express.Router();

router.get("/", function(req, res) {
    res.render("index");
});

// Export router
module.exports = router;