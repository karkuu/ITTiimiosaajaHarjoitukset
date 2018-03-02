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



let contactList = [];
let id=100;


// Tietokantahaut
const pgQuery = 'SELECT * FROM employees';
const pgQueryInsert = "INSERT INTO employees (employeeid, firstname, lastname, city, homephone) VALUES (nextval('emp'), $1, $2, $3, $4)";
const pgQueryDelete = "DELETE FROM employees WHERE employeeid=";
const pgQueryUpdate = "UPDATE employees SET firstname=$2, lastname=$3, city=$4, homephone=$5 WHERE employeeid=$1";
let values = [];
let queryContents;
//REST api



// Clientti päälle
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
	// promise
	client.query(pgQuery)  // Haetaan kaikki tietokannasta
		.then(pgres => {
			queryContents = pgres.rows;
			for (let i=0;i<pgres.rows.length;i++) // Käydään rivit läpi ja lisätään tempcontactiin
			{
					tempContact = {
					"employeeid":pgres.rows[i].employeeid,
					"firstname":pgres.rows[i].firstname,
					"lastname":pgres.rows[i].lastname,
					"city":pgres.rows[i].city,
					"homephone":pgres.rows[i].homephone
	
					};
				contactList.push(tempContact); // Lisätään temppi varsinaiseen listiin
				id++;
			}
			res.status(200).json(contactList); // Pusketaan array ulos jasonina
	
  })
  .catch(e => console.error(e.stack));	// Jos jotain meni pieleen, niin konsoliin
});

app.post("/api/contacts", function(req,res) {
	console.log("Add contact:");
	
	// Pistetään req body arrayhin joka syötetään tietokantakyselyyn parametreiksi
	values[0] = req.body.firstname;
	values[1] = req.body.lastname;
	values[2] = req.body.city;
	values[3] = req.body.homephone;
	
	//Promise
	client.query(pgQueryInsert,values) // Tietokanta insertti
		.then(pgQueryInsert => {
			
		console.log("lisätty"); // Konsoliin viesti, jos onnistui
	})
	.catch(e => console.error(e.stack)); // Consoleen virheilmoitukset
		
	res.status(200).json({"message":"success"}); // Viesti selaimeen, että onnistui (lähinnä, että frontend saa tiedon onnistuneesta lisäyksestä
});

app.delete("/api/contact/:id", function(req,res) {
	console.log("Delete contact:"+req.params.id); // Consoleen deleten tiedot
	let tempId = req.params.id; // Poistettava id temppiin
	
	client.query(pgQueryDelete+tempId) // Tietokantaqueryn perään poistettava id
		.then(pgQueryInsert => {
			
	console.log("Poistettu"); // Consoleen, jos onnistui
  })
  .catch(e => console.error(e.stack)); // Virheilmoitus consoleen, jos meni kätään	
	
	
	
	res.status(200).json({"message":"Deleted"+tempId}); // Clienttiin tieto, että poisto onnistui
});

app.put("/api/contact/:id", function(req,res) {
	console.log("Update :"+req.params.id); // Consoleen Päivityksen tiedot
	let tempId = req.params.id; // Päivitettävä id temppiin
	
	values[0] = tempId;
	values[1] = req.body.firstname;
	values[2] = req.body.lastname;
	values[3] = req.body.city;
	values[4] = req.body.homephone;
	
	//Promise
	client.query(pgQueryUpdate,values) // Tietokantapäivitys
		.then(pgQueryInsert => {
			
		console.log("Päivitetty "); // Konsoliin viesti, jos onnistui
	})
	.catch(e => console.error(e.stack)); // Consoleen virheilmoitukset
		
	
	
	res.status(200).json({"message":"Updated "+tempId}); // Clienttiin tieto, että poisto onnistui
});

//Startup

app.listen(3001);
console.log("Running in port 3001");