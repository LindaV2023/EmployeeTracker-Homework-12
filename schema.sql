DROP DATABASE IF EXISTS business_db;
-- Creates the "business_db" database --
CREATE DATABASE business_db;

-- Use the business_db --
USE business_db;

-- Creates the table "department" within business_db --
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL,
);


CREATE TABLE bus_role (
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   title VARCHAR(30) NOT NULL,
   salary DECIMAL(10,2) NOT NULL,
   department_id INT NOT NULL,
);


-- Creates the table "employee" within business_db --
CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,

);




