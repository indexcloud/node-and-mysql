const faker = require("faker");
const mysql = require("mysql");

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	// password: "",
	database: "join_us",
});

// SELECTING DATA
// const q = "SELECT COUNT(*) AS total FROM users";

// connection.query(q, function (error, results, fields) {
// 	if (error) throw error;
// 	console.log(results[0].total);
// });

// INSERTING DATA
// const person = {sp
// 	email: faker.internet.email(),
// 	created_at: faker.date.past(),
// };

// const end_result = connection.query("INSERT INTO users SET ?", person, function (error, results, fields) {
// 	if (error) throw error;
// 	console.log(results);
// });

// // console.log(end_result.sql);

// connection.end();

// INSERTING LOTS OF DATA! +++++++++++++++++++++++++++++++
// const person = [];

// for (let i = 0; i < 500; i++) {
// 	person.push([faker.internet.email(), faker.date.past()]);
// }

// const q = "INSERT INTO users (email, created_at) VALUES ?";

// connection.query(q, [person], function (err, result) {
// 	console.log(err);
// 	console.log(result);
// });

// connection.end();

// 500 Users Excercises +++++++++++++++++++++++++++++++++++
// const q = "SELECT DATE_FORMAT(created_at, '%M %D %Y') AS earliest_date FROM users ORDER BY earliest_date LIMIT 1";

// const q =
// 	"SELECT email, created_at FROM users WHERE created_at = (SELECT created_at FROM users ORDER BY created_at LIMIT 1)";

// const q = "SELECT MONTHNAME(created_at) AS month, COUNT(*) AS count FROM users GROUP BY month DESC";

// const q = "SELECT COUNT(*) AS yahoo_users FROM users WHERE email LIKE '%@yahoo%'";

const q =
	"SELECT CASE WHEN email LIKE '%@gmail.com' THEN 'gmail' WHEN email LIKE '%@yahoo.com' THEN 'yahoo' WHEN email LIKE '%@hotmail.com' THEN 'hotmail' ELSE 'other' END AS provider, COUNT(*) AS total_users FROM users GROUP BY provider ORDER BY total_users DESC";

connection.query(q, function (error, results, fields) {
	if (error) throw error;
	console.log(results);
});

connection.end();
