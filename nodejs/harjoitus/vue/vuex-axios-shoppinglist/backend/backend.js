let express = require("express");
let bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());

let id = 100;

let shoppingList = [];

app.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();
});

app.get("/api/shoppinglist", function(req,res) {
    res.status(200).json(shoppingList);
});

app.post("/api/shoppinglist"), function(req,res) {
    let shoppingItem = {
        type:req.body.type,
        price:req.body.price,
        count:req.body.count,
        id: id
    }
    id++;
    shoppingList.push(shoppingItem);
    res.status(200).json({"message":"success"});
}

app.post("/api/shoppinglist/:id", function(req,res) {
    let tempId = req.params.id;
    for (let i=0;i<shoppingList.length;i++) {
        if (tempId == shoppingList[i].id) {
            shoppingList.splice(i,1);
            return res.status(200).json({"message":"success"});
        }
    }
    res.status(404).json({"message":"not found"});
});

console.log("Running in port 3001");
app.listen(3001);