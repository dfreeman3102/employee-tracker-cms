//initialize sequelize
const Sequelize = require("sequelize");
//enable .env access
require("dotenv").config();
//use env variables to connect to database
const {DB_NAME, DB_PASSWORD, DB_USER} = process.env;
const sequelize = new Sequelize(
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    {
        host: "localhost",
        dialect: "mysql",
        port: 3306
    }
);

module.exports= sequelize;