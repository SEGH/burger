// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

const app = express();

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Start Server
app.listen(PORT, function() {
    console.log("Server is listening on port " + PORT);
});