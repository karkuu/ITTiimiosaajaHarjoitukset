// vaaditaan express (expressjs googleen), pg (tietokanta) ja bodyparser

let express = require("express");
let bodyParser = require("body-parser");
var mongoose = require('mongoose');


//tietokantaclient

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connection open");
});

// startataan express

let app = express();
app.use(bodyParser.json());



let contactList = [];
let id=100;
let values = [];

var employeesSchema = new mongoose.Schema(
	{
	 firstname: String,
	 lastname: String,
	 city: String,
	 homephone: String
	}
);

var employees = mongoose.model('employees', employeesSchema);

mongoose.connect('mongodb://localhost/testdb');

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
					
	
	employees.find({}, function(err,obj)
	{
		for (let i=0; i < obj.length; i++)
		{
			tempContact = {
				"employeeid":obj[i]._id,
				"firstname":obj[i].firstname,
				"lastname":obj[i].lastname,
				"city":obj[i].city,
				"homephone":obj[i].homephone
			};
				contactList.push(tempContact); // Lisätään temppi varsinaiseen listiin
		}
		
		res.status(200).json(contactList); // Pusketaan array ulos jasonina
	});
});

app.post("/api/contacts", function(req,res) {
	console.log("Add contact.");

	
	var newEmp = new employees({ firstname: req.body.firstname, lastname: req.body.lastname, city: req.body.city, homephone: req.body.homephone});
	newEmp.save(function (err)
	{
		if (err) return handleError(err);
		// saved!
	});
	
	res.status(200).json({"message":"success"}); // Viesti selaimeen, että onnistui (lähinnä, että frontend saa tiedon onnistuneesta lisäyksestä
});

app.delete("/api/contact/:id", function(req,res) {
	let tempId = req.params.id

	employees.remove({ _id: tempId }, function (err)
	{
		if (err) return handleError(err);
		console.log("Delete contact:"+req.params.id); // Consoleen deleten tiedot
	});
	
	res.status(200).json({"message":"Deleted"+tempId}); // Clienttiin tieto, että poisto onnistui
});

app.put("/api/contact/:id", function(req,res) {
	console.log("Update :"+req.params.id); // Consoleen Päivityksen tiedot
	let tempId = req.params.id; // Päivitettävä id temppiin
	
	employees.findByIdAndUpdate(tempId, { firstname: req.body.firstname, lastname: req.body.lastname, city: req.body.city, homephone: req.body.homephone}, function (err)
	{
		if (err) return handleError(err);
		console.log("Update:"+req.params.id); // Consoleen deleten tiedot
	});
	
	res.status(200).json({"message":"Updated "+tempId}); // Clienttiin tieto, että poisto onnistui
});

//Startup

app.listen(3001);
console.log("Running in port 3001");