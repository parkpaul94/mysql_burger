// Where mySQL codes and connections are stored.
let mysql = require('mysql');


let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db',
  });
};

connection.connect((err) => {
  if (err) throw err;
  console.log("connected as id:" + connection.threadid);
});

module.exports = connection; // exports connections to orm