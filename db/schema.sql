-- SQL statements/Commands

-- if the employee database exists drop it
DROP DATABASE IF EXISTS employee_DB;
-- creates the employee database
CREATE DATABASE employee_DB;
-- allows to work with the employee database
USE employee_DB;

-- creates the deparment table
CREATE TABLE department(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- creates the role table
CREATE TABLE role(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10.3) NOT NULL,
    department_id INTEGER NOT NULL
);

-- creates the employee table
CREATE TABLE employee(
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER NOT NULL
);