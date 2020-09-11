// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const favicon = require("serve-favicon");

const PORT = process.env.PORT || 8080;

const app = express();

// Favicon middleware
app.use(favicon(__dirname + "/public/favicon.ico"));

// Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import and use routes
const routes = require("./controllers/burgers_controllers.js");

app.use(routes);

// Start Server
app.listen(PORT, function() {
    console.log("Server is listening on port " + PORT);
});