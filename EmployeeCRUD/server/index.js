//FOUNDATION
//Imported packages and setup
require("dotenv").config()
const express = require("express")
const app = express()
const logger = require("morgan")
const port = process.env.PORT || 3000
app.use(logger("dev"))

//body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//CONNECTIONS
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




//2) /employee/all --READ
    // GET method - DONE
    // send back JSON - DONE
    // send back ALL employees from the DB - DONE
    // send back an array of objects - DONE
app.get("/employee/all", (req, res) => {
    let query = `SELECT *
                 FROM employees;`
    conn.query(query)
    .then((data) => {
        res.json(data.rows)
    }).catch(err => res.send(`Error reading data: ${err}`))
})

//3) /emplyee/new --CREATE
    // POST method - DONE
    // send back JSON - DONE
        // one thing - data that DB confirmed was added
        // one object - BUT inital return maybe an array of objects
    // NOTE: we need to take ONE bject from client and add to our DB
    app.post("/employee/new", (req, res) => {
        // data will be sent from client as body
        const {first_name, last_name, age, salary} = req.body
        let query = `INSERT INTO employees (first_name, last_name, age, salary)
        VALUES('${first_name}','${last_name}',${age},${salary})
        RETURNING *`;
    conn.query(query)
    .then((data) => {
        console.log("DATA has been added to DB")
        res.json(data.rows[0]);
    }).catch(err => res.send(`Error creating data: ${err}`))
    })


//4) /employee/<<id>> - UPDATE
    // PUT method
    // send JSON
    // one thing - data that DB confirmed was updated
    // one object - BUT inittial return maybe an array of object
    app.put("/employee/:id", (req, res) => {
        const{first_name, last_name, age, salary} = req.body
        let query = `UPDATE employees
            SET first_name='${first_name}',
                last_name='${last_name}',
                age= ${age},
                salary= ${salary}
            WHERE employee_is = ${Number(req.params.id)}
            RETURNING *;`
            conn.query(query)
    .then((data) => {
        console.log("DATA has been updated in DB")
        res.json(data.rows[0]);
    }).catch(err => res.send(`Error updating data: ${err}`))
    })


//5) /employee/<<id>> - DELETE
    // DELETE method - DONE
    // send JSON
    // one thing - data that DB confirmed was updated
    // one object - BUT inittial return maybe an array of object
    app.delete("/employee/:is", (req, res) => {
        let query = `DELETE FROM employees
                     WHERE employee_is = ${Number(req.params.is)}
                     RETURNING *;`
    conn.query(query)
    .then((data) => {
        console.log("DATA has been deleted to DB")
        res.json(data.rows[0]);
    }).catch(err => res.send(`Error deleted data from server: ${err}`))
    })


//1) star handler
    // deals with any unmatched routes
    // right now - probably send a string back with comments
app.get("*", (req, res) => {
    res.send("No routes matching")
})

app.listen(port, () => console.log(`Employee crud app on port ${port}`))