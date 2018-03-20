let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let carRouter = require("./carRouter");
let userModel = require("./models/user")

mongoose.Promise = global.Promise;

let app = express();

app.use(bodyParser.json());


let loggedUsers = [];



mongoose.connect("mongodb://localhost/carshopdatabase").then(
    () => console.log("Successfully connected to mongodb"),
    (error) =>{
        console.log("Error in connection to mongodb:");
        console.log(error);


    }
);

app.post("/register", function(req,res){
    let newUser = new userModel({});
    newUser.uname = req.body.uname;
    newUser.passphrase = newUser.generateHash(req.body.passphrase);
    newUser.save(function(err) {
        if (err) {
            return res.status(409).json({"message":"conflict"});
        }
        return res.status(200).json({"message":"success"});
    })
});

app.post("/login", function(req,res){
    userModel.findOne({'uname':req.body.uname}, function(err,item) {
        if (err) {
            return res.status(409).json({"message":"conflict"});
        }
        if (!item){
            return res.status(409).json({"message":"conflict"});
        }
        if (!item.isPassphraseValid(req.body.passphrase))
        {
            return res.status(409).json({"message":"conflict"});
        }

        let token = "";
        let letters = "abcdefghijklmnopqrstu1234567890";

        for (let i=0; i< 128; i++)
        {

            let temp = Math.floor(Math.random() * letters.length);
            token = token + letters[temp];
        }
        console.log(token);
        loggedUsers.push(token);

        return res.status(200).json({"token":token});
    })
});

app.post("/logout", function(req,res) {
	let token = req.headers.token;
	if (token) {
		for(let i=0; i<loggedUsers.length;i++) {
			if(token === loggedUsers[i]) {
				loggedUsers.splice(i,1);
				return res.status(200).json({"message":"Logged out"});
			}
			
		}
		
	}
	
	return res.status(404).json({"message":"Not found"});
	
});


function isUserLogged(req,res,next) {
    let token = req.headers.token;
    for (let i=0; i<loggedUsers.length;i++)
    {
        if (token === loggedUsers[i]) {
            return next();
        }
    }
    return res.status(403).json({"message":"forbidden"});
}


app.use("/api", isUserLogged, carRouter)

app.listen(3001);
console.log("Running on port 3001");