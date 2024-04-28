//initialize sequelize
const Sequelize = require("sequelize");
//enable .env access
const dotenv = require("dotenv").config();
const {dbNAME, dbPASSWORD, dbUSER} = process.env;

//use env variables to connect to database
const sequelize = new Sequelize(
    dbNAME,
    dbUSER,
    dbPASSWORD,
    {
        host: "localhost",
        dialect: "mysql",
        port: 3306
    }
);

module.exports = sequelize;