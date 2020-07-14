// Require orm.js
const orm = require("../config/orm.js");

// Call ORM functions using burger specific input for the ORM
const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    }
}

// Export
module.exports = burger;