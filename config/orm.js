// Require connection.js
const connection = require("../config/connection.js");

const orm = {
    // selectAll() method to query SQL
    selectAll: function(tableInput, callBack) {
        connection.query("SELECT * FROM ??", [tableInput], function(err, res) {
            if (err) throw err;

            callBack(res);
        });
    },

    // insertOne() method to query SQL
    insertOne: function(tableInput, coltoInsert, valOfCol, callBack) {
        connection.query("INSERT INTO ?? (??) VALUES (?)", [tableInput, coltoInsert, valOfCol], function(err, res) {
            if (err) throw err;

            callBack(res);
        });
    },

    // updateOne() method to query SQL
    updateOne: function(tableInput, colToUpdate, updateValue, conditionValue, callBack) {
        connection.query("UPDATE ?? SET ?? = ? WHERE id = ?", [tableInput, colToUpdate, updateValue, conditionValue], function(err, res) {
            if (err) throw err;

            callBack(res);
        });
    }
}

// Export ORM object
module.exports = orm;