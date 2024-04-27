//adding inquirer, express, mysql2, and sequelize
const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const sequelize = require("./config/connection.js");
//initializing a port and express functions
const PORT = process.env.PORT || 3001;
const app = express();
//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connecting to database before starting the express server
sequelize.sync().then(()=>{
    app.listen(PORT, () => console.log("Server Connected"));
});