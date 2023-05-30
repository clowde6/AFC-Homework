//FOUNDATION
//Imported packages and setup
require("dotenv").config()
const express = require("express")
const app = express()
const logger = require("morgan")
const port = process.env.PORT || 3000
app.use(logger("dev"))

//CONECTIONS
//Need the env variables we created
const { PG_HOST, PG_PORT, PG_DB, PG_USER, PG_PW } = process.env;
const credentials = {
  host: PG_HOST,
  port: PG_PORT,
  database: PG_DB,
  user: PG_USER,
  password: PG_PW,
};

const { Client } = require("pg");
const conn = new Client(credentials);
conn.connect().then(console.log(`Connected to ${PG_DB} database`));

app.get("/", (req, res) => {
    res.send("I am the root route")
})

//CONSUMING APIs  -  They Decide!!
//1 - know endpoints
//2 - JSON or XML
//3 - how much dat and what does it look like

//Building (serving) API - We Decide!!
//1 - use specific endpoints
//2 - JSON or XML
//3 - how much data and what does it look like

//NOTE: Your boss says:
//need five route handlers -CRUD
//1) star handler
    // deals with any unmatched routes
    // right now - probably send a string back with comments

//2) /employee/all --READ
    // GET method
    // send back JSON
    // send back ALL employees from the DB
    // send back an array of objects
app.get("/employee/all", (req, res) => {
    res.send("ALL EMPLOYEES")
})

//3) /emplyee/new --CREATE
    // POST method
    // send back JSON
        // one thing - data that DB confirmed was added
        // one object - BUT inital return maybe an array of objects
//4) /employee/<<id>> - UPDATE
    // PUT method
    // send JSON
    // one thing - data that DB confirmed was updated
    // one object - BUT inittial return maybe an array of object
//5) /employee/<<id>> - DELETE
    // DELETE method
    // send JSON
    // one thing - data that DB confirmed was updated
    // one object - BUT inittial return maybe an array of object

app.get("*", (req, res) => {
    res.send("No routes matching")
})

app.listen(port, () => console.log(`Employee crud app on port ${port}`))