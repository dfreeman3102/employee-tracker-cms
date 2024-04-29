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
function start() {
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
}
//function for handling the add department choice
function addDept() {
  inquirer
    .prompt([
      {
        type: "number",
        name: "id",
        message: "Type the department id.",
        //this validation function states that if the input cannot be parsed into a number,
        //it is not a number it cannot be validated
        validate: function (input) {
          return !isNaN(parseInt(input)) || "Must be a number";
        },
      },
      {
        type: "input",
        name: "deptName",
        message: "Type your new Department Name.",
        validate: (input) => !!input || "Cannot be empty",
      }
    ])
    .then((data) => {
      db.query(`INSERT INTO department (id, name) VALUES (${data.id},'${data.deptName}')`);
    })
}

//function for handling the add role choice
function addRole() {
  inquirer.prompt([
    {
        type: "number",
        name: "id",
        message: "Type the role id.",
        validate: function (input) {
          return !isNaN(parseInt(input)) || "Must be a number";
        },
    },
    {
      type: "input",
      name: "title",
      message: "Type your new Role title.",
      validate: (input) => !!input || "Cannot be empty",
    },
    {
      type: "number",
      name: "salary",
      message: "Type the salary for this role.",
      validate: function (input) {
        return !isNaN(parseInt(input)) || "Must be a number";
      },
    },
    {
      type: "number",
      name: "deptID",
      message: "Type the number of the department ID.",
      validate: function (input) {
        return !isNaN(parseInt(input)) || "Must be a number";
      },
    },
  ])
  .then((data) => {
    db.query(`INSERT INTO role (id, title, salary, department_id) VALUES (${data.id},'${data.title}',${data.salary}, ${data.deptID})`);
  })
}

//function for handling the add employee choice
function addEmployee() {
  inquirer.prompt([
    {
        type: "number",
        name: "id",
        message: "Type the employee id.",
        validate: function (input) {
          return !isNaN(parseInt(input)) || "Must be a number";
        },
    },
    {
      type: "input",
      name: "first",
      message: "Type the first name.",
      validate: (input) => !!input || "Cannot be empty",
    },
    {
      type: "input",
      name: "last",
      message: "Type the last name.",
      validate: (input) => !!input || "Cannot be empty",
    },
    {
      type: "number",
      name: "roleID",
      message: "Type the number of the role ID.",
      validate: function (input) {
        return !isNaN(parseInt(input)) || "Must be a number";
      },
    },
    {
      type: "number",
      name: "managerID",
      message: "Type the number of their Manager's Employee ID.",
      validate: function (input) {
        return !isNaN(parseInt(input)) || "Must be a number";
      },
    },
  ])
  .then((data) => {
    db.query(`INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES (${data.id},'${data.first}','${data.last}', ${data.roleID}, ${data.managerID})`);
  })
}

//function for handling the update role choice
function updateRole() {
  inquirer.prompt([
    {
      type: "number",
      name: "empID",
      message: "Type the employee ID number.",
      validate: function (input) {
        return !isNaN(parseInt(input)) || "Must be a number";
      },
    },
    {
      type: "number",
      name: "roleID",
      message: "Type their updated role ID.",
      validate: function (input) {
        return !isNaN(parseInt(input)) || "Must be a number";
      },
    },
  ])
  .then((data) =>{
    db.query(`UPDATE employee SET role_id = ${data.roleID}  WHERE id = ${data.empID}`)
  })
}

start();
