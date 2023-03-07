// check
console.log("this is a test")

// bringing in the functions preovided by the express framework
const express = require('express');

// create an application object using express
let app = express();
// define the port we'll communicate through
let PORT = 8080;

// where we'll write our code

// first get request

app.get("/hello", (req, res) => {
    res.send("hello from the hello route")
})

// write a GET route-definition that will let me get by an id
// request/hello/Nate
// request/hello/Sasha

// request parameters 
app.get("/hello/:name", (req, res) => {
    let name = req.params.name;
    // either way works
    let message = "hello" + name;
    let msg2 = `hello ${name}`

    // res.send(`hello ${name}`)
    res.send(msg2)
})

// request query




app.listen(PORT, () => { console.log('Application is listening on port ', PORT)})