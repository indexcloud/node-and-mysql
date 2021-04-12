const express = require("express");
const mysql = require("mysql");
const app = express();

app.set("view engine", "ejs");
// Express Body-parser
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "join_us",
});

app.get("/", (req, res) => {
	const q = "SElECT COUNT(*) AS count FROM users";
	connection.query(q, (error, results) => {
		if (error) throw error;
		const count = results[0].count;
		// res.send(`We have ${count} users in our db.`);
		res.render("home", {data: count});
	});
});

app.post("/register", (req, res) => {
	const person = {
		email: req.body.email,
	};
	connection.query("INSERT INTO users SET ?", person, (error, results) => {
		if (error) throw error;
		res.redirect("/");
	});
});

app.get("/joke", (req, res) => {
	const joke = "What do you call a dog that does magic tricks? A labracadabrador.";
	res.send(joke);
});

app.get("/random_num", (req, res) => {
	const num = Math.floor(Math.random() * 10 + 1);
	res.send("Your luckly number is " + num);
});

app.listen(8080, () => {
	console.log("Server running on 8080!");
});
