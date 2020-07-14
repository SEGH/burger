// Require orm.js
const orm = require("../config/orm.js");

// Call ORM functions using burger specific input for the ORM
const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(value, cb) {
        orm.insertOne("burgers", "burger_name", value, function(res) {
            cb(res);
        });
    },
    updateOne: function(value, cb) {
        orm.updateOne("burgers", "devoured", 1, value, function(res) {
            cb(res);
        });
    }
}

// Export
module.exports = burger;