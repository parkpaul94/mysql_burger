//Where I call my CRUD Actions
let connection = require('./connection.js');

let orm = {
  all: (tableInput, cb) => {
    connection.query('SELECT * FROM ' + tableInput + ';', (err, result) => {
      if (err) throw err;
      cb(result)
    })
  },
  update: function(tableInput, condition, cb) {
    connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', (err, result) => {
      if (err) throw err;
      cb(result);
    })
  },
  create: (tableInput, val, cb) => {
    connection.query('INSERT INTO ' + tableInput + " (burger_name) VALUES ('" + val + "');", (err, result) => {
      if (err) throw err;
      cb(result);
    })
  }
} // Getting all callbacks.

module.exports = orm;