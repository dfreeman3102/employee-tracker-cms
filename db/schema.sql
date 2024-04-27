-- Ensures database will not have conflicts prior to creation
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
-- Uses the database
USE company_db;

-- Creates the department table
CREATE TABLE department(
    id INT PRIMARY KEY,
    name VARCHAR(30)
);
-- Creates the role table
CREATE TABLE role(
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);
-- CREATES the employee table
CREATE TABLE employee(
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id) 
    REFERENCES role (id)
    ON DELETE SET NULL,
    manager_id INT,
    FOREIGN KEY (manager_id) 
    REFERENCES employee (id)
    ON DELETE SET NULL
)