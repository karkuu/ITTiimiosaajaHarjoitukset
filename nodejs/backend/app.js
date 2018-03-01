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

const pgQuery = 'SELECT * FROM customers';

let queryContents;
//REST api

// promise


client.connect();


app.get("/api/contacts", function(req,res)
{
	let tempContact = {
					"id":"",
					"customerid":"",
					"firstName":"",
					"company":"",
					"city":"",
					"phone":""
					};
	client.query(pgQuery)
		.then(pgres => {
			queryContents = pgres.rows;
			for (let i=0;i<pgres.rows.length;i++)
			{
					tempContact = {
					"id":id.toString(),
					"customerid":pgres.rows[i].customerid,
					"firstName":pgres.rows[i].contactname,
					"company":pgres.rows[i].companyname,
					"city":pgres.rows[i].city,
					"phone":pgres.rows[i].phone
	
					};
				contactList.push(tempContact);
				id++;
			}
			//console.log(contactList);
			
			res.status(200).json(contactList);
	
  })
  .catch(e => console.error(e.stack));	
});

app.post("/api/contact", function(req,res) {
	console.log("Add contact:");
	console.log(req.body);
	let contact = {
		id:id,
		firstName: req.body.firstName,
		company: req.body.company,
		city:req.body.city,
		phone:req.body.phone
	}
	id++;
	contactList.push(contact);
	res.status(200).json({"message":"success"});
});

app.delete("/api/contact/:id", function(req,res) {
	console.log("Delete contact:"+req.params.id);
	let tempId = req.params.id;
	for (let i = 0; i < contactList.length; i++) {
		if(tempId == contactList[i].id) {
			contactList.splice(i,1);
			return res.status(200).json({"message":"success"});
		}
		
	}
	res.status(404).json({"message":"not found"});
});

//Startup

app.listen(3001);
console.log("Running in port 3001");