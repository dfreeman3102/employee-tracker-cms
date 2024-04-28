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
      name: "action",
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
    switch (data.action) {
      case "View all departments":
        db.query("SELECT * FROM department", function (err, results) {
          console.table(results);
        });
        break;
      case "View all roles":
        db.query("SELECT * FROM role", function (err, results) {
          console.table(results);
        });
        break;
      case "View all employees":
        db.query("SELECT * FROM employee", function (err, results) {
          console.table(results);
        });
        break;
      case "Add a department":
         addDept();
        break;
      case "Add a role":
        addRole();
        break;
      case "Add an employee":
        addEmployee();
      break;
      case "Update an employee role":
        updateRole();
        break;
    }
  });

function addDept(){
    inquirer
        .prompt([
            {
                type:"input",
                name: "deptName",
                message: "Type your new Department Name.",
                validate: (input) => !!input || "Cannot be empty"
            }
        ])
    };
    
    function addRole(){
        inquirer
        .prompt([
            {
                type:"input",
                name: "roleTitle",
                message: "Type your new Role title.",
                validate: (input) => !!input || "Cannot be empty"
            },
            {
                type:"number",
                name:"salary",
                message: "Type the salary for this role.",
                //this validation function states that if the input is not a number it cannot be validated
                validate: function(input){
                    return !isNaN(parseInt(input))  || "Must be a number"
                }
            },
            {
                type:"number",
                name:"deptID",
                message:"Type the number of the department ID.",
                validate: function(input){
                    return !isNaN(parseInt(input))  || "Must be a number"
                }
            }
        ])
};

function addEmployee(){
    inquirer
        .prompt([
            {
                type:"input",
                name: "first",
                message: "Type the first name.",
                validate: (input) => !!input || "Cannot be empty"
            },
            {
                type:"input",
                name:"last",
                message: "Type the last name.",
                validate: (input) => !!input || "Cannot be empty"
            },
            {
                type:"number",
                name:"roleID",
                message:"Type the number of the role ID.",
                validate: function(input){
                    return !isNaN(parseInt(input))  || "Must be a number"
                }
            },
            {
                type:"number",
                name:"managerID",
                message:"Type the number of their Manager's Employee ID.",
                validate: function(input){
                    return !isNaN(parseInt(input))  || "Must be a number"
                }
            }
        ])
};

function updateRole(){
    inquirer
        .prompt([
            {
                type:"number",
                name:"empID",
                message:"Type the employee ID number.",
                validate: function(input){
                    return !isNaN(parseInt(input))  || "Must be a number"
                }
            },
            {
                type:"number",
                name:"roleID",
                message:"Type their updated role ID.",
                validate: function(input){
                    return !isNaN(parseInt(input))  || "Must be a number"
                }
            }
        ])
};