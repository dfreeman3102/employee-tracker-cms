const inquirer = require("inquirer");
const fs = require("fs");
//adding mysql2
const mysql = require("mysql2");
const dotenv = require("dotenv").config();
const { dbNAME, dbPASSWORD, dbUSER } = process.env;

//creating initial connection

const db = mysql.createConnection(
  {
    host: "localhost",
    database: dbNAME,
    password: dbPASSWORD,
    user: dbUSER,
  },
  console.log("Connected to the company_db!")
);
//inquirer prompts to start interactivity
inquirer
  .prompt([
    {
      type: "list",
      name: "list",
      message: "Choose one of the following options.",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
      ],
    },
  ])
//depending on the choice made, an action will occur
  .then((data) => {
    if (data.list === "View all departments") {
      db.query("SELECT * FROM department", function (err, results) {
        console.table(results);
      });
    } else if (data.list === "View all roles") {
      db.query("SELECT * FROM role", function (err, results) {
        console.table(results);
      });
    } else if (data.list === "View all employees") {
      db.query("SELECT * FROM employee", function (err, results) {
        console.table(results);
      });
    }
  });
