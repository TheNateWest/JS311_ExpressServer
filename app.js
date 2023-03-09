console.log("loading the app.js file")

// bring in express framework
let express = require("express");

// define the PORT
let PORT = 8080;

// create application server object
let app = express();

// make sure all the data pasing back and forth is in json format
// using a middleware component
app.use(express.json());


app.use(express.static('public'));

const toDos = require(./routes/router);

let db = []; // this is just for testing. We don't really do this. Not persistent.

app.get("/todos", (req, res) => {
    console.log("GET /todos")
    res.json(db);
    
})

app.get("/todos/:id", (req, res) => {
    console.log("GET /todos/:id")
    
    let myId = req.params.id;
    
    let matchingItem = db.find( (item, index) => {
        return item.id === myId
     })
     if (matchingItem) {
        res.json(matchingItem);
     } else {
        res.send("Invalid ID")
     }
     
})

app.delete("/todos/:id", (req, res) => {
    console.log("DELETE /todos/:id")

    let myId = req.params.id;
    
    let matchingIndex = db.findIndex( (item, index) => {
        return item.id === myId;
     })

     if(matchingIndex) {
        let deletedItem = db.splice(matchingIndex, 1);
        res.json(deletedItem)
     } else {
        res.send("No matching Id. No record deleted.")
     }
})
// app.post("/todos", (req, res) => {
//     console.log("POST /todos")

//     let newItem = {};
//     newItem.id = getRandomInt();
//     newItem.description = req.body.description;
//     newItem.completed = false

//     // put it in the database
//     db.push(newItem);

//     // return the newItem on the response
//     res.json(newItem);




//     // res.send()
// })

app.put("/todos/:id", (req, res) => {
    console.log("PUT /todos")

    let myId = req.params.id;
    let description = req.body.description;
    let completed = req.body.completed == true;

    let matchingItem = db.find( (item, index) => {
        return item.id == myId;
    })

    if (matchingItem) {
        matchingItem.description = description;
        matchingItem.completed = completed;
        res.json(matchingItem)

    } else {
        res.send("invalid ID. No updates were performed")
    }
})





// function that returns a random integer
const getRandomInt = () => {
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 100000;
    let randomInt = Math.floor(bigRandomFloat);

    return randomInt;
}





app.listen(PORT, () => {console.log("Application is listening on port", PORT)})






// const { application } = require("express");