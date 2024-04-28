const inquirer = require("inquirer");
const mysql = require("mysql2");
const fs = require("fs");

inquirer
    .createPromptModule([
        {
            type: "list",
            name: "list-choices",
            message: "Choose one of the following options.",
            choices:["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
        },
    ]);