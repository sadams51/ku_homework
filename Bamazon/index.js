var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost", 
	port: 3306,
	user: "root", 
	password: "", 
	database: "bamazonDB"
});

connection.connect(function(err) {
	if (err) throw err;
	console.log("connected as id " + connectionthreadId);
	connection.end();
});