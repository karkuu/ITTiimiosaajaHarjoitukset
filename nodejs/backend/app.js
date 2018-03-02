// vaaditaan express (expressjs googleen), pg (tietokanta) ja bodyparser

let express = require("express");
let bodyParser = require("body-parser");
let {Client} = require('pg');


//tietokantaclient
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'northwind',
  password: '12321',
  port: 5432,
});

// startataan express

let app = express();
app.use(bodyParser.json());
// "Database"

let contactList = [];
let id=100;

const pgQuery = 'SELECT * FROM employees';
const pgQueryInsert = "INSERT INTO employees (employeeid, firstname, lastname, city, homephone) VALUES (nextval('emp'), $1, $2, $3, $4)";
const pgQueryDelete = "DELETE FROM employees WHERE employeeid=";
let values = ["","","",""];
let queryContents;
//REST api

// promise


client.connect();


app.get("/api/contacts", function(req,res)
{
	contactList = [];
	let tempContact = {
					"employeeid":"",
					"firstname":"",
					"lastname":"",
					"city":"",
					"homephone":""
					};
	client.query(pgQuery)
		.then(pgres => {
			queryContents = pgres.rows;
			for (let i=0;i<pgres.rows.length;i++)
			{
					tempContact = {
					"employeeid":pgres.rows[i].employeeid,
					"firstname":pgres.rows[i].firstname,
					"lastname":pgres.rows[i].lastname,
					"city":pgres.rows[i].city,
					"homephone":pgres.rows[i].homephone
	
					};
				contactList.push(tempContact);
				id++;
			}
			//console.log(contactList);
			
			res.status(200).json(contactList);
	
  })
  .catch(e => console.error(e.stack));	
});

app.post("/api/contacts", function(req,res) {
	console.log("Add contact:");
	let contact = {
		"firstname":req.body.firstname,
		"lastname":req.body.lastname,
		"city":req.body.city,
		"homephone":req.body.homephone	
	}
	console.log(req.body);
	values[0] = req.body.firstname;
	values[1] = req.body.lastname;
	values[2] = req.body.city;
	values[3] = req.body.homephone;
	
	client.query(pgQueryInsert,values)
		.then(pgQueryInsert => {
			
	console.log("lisätty");
  })
  .catch(e => console.error(e.stack));	
	
	
	
	
	
	res.status(200).json({"message":"success"});
});

app.delete("/api/contact/:id", function(req,res) {
	console.log("Delete contact:"+req.params.id);
	let tempId = req.params.id;
	
	client.query(pgQueryDelete+tempId)
		.then(pgQueryInsert => {
			
	console.log("Poistettu");
  })
  .catch(e => console.error(e.stack));	
	
	
	
	res.status(200).json({"message":"Deleted"+tempId});
});

//Startup

app.listen(3001);
console.log("Running in port 3001");