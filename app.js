const faker = require("faker");
const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	// password: "",
	database: "join_us",
});

const q = "SELECT CURTIME() as time, CURDATE() as date, NOW() as now";
connection.query(q, function (error, results, fields) {
	if (error) throw error;
	console.log(results);
});
