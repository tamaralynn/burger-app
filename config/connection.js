// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "dyud5fa2qycz1o3v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ipwozqdsrxn38swv",
  password: "h5dgkso5t7ph8pq4",
  database: "jl9eafbpmvel5oab",

});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
