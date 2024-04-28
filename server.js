//adding express and mysql2
const express = require("express");
const mysql = require("mysql2");
const dotenv = require("dotenv").config();
const { dbNAME, dbPASSWORD, dbUSER } = process.env;
//initializing a port and express functions
const PORT = process.env.PORT || 3001;
const app = express();
//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//creating initial connection

const db = mysql.createConnection(
  {
    host: "localhost",
    database: dbNAME,
    password: dbPASSWORD,
    user: dbUSER
  },
  console.log("Connected to the company_db!")
);


app.listen(PORT, () => console.log("Server Connected"));
