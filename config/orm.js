// Require connection.js
const connection = require("../config/connection.js");

const orm = {
    // selectAll() method to query SQL
    selectAll: function(tableInput, callBack) {
        connection.query("SELECT * FROM ??", [tableInput], function(err, res) {
            if (err) throw err;

            callBack(res);
        });
    }
// insertOne() method to query SQL

// updateOne() method to query SQL
}

// Export ORM object
module.exports = orm;