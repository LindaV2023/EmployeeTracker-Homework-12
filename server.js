const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const { allowedNodeEnvironmentFlags } = require('process');

const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '2023SQlpassword$$',
    database: 'business_db'
  },
  console.log(`Connected to the business_db database.`)
);

db.connect(function(err) {
    // connected! (unless 'err' is set)
});

const deptChoices = ["Sales", "Engineering", "Finance", "Legal"];
const roleChoices = ["Sales Lead", "Salesperson", "Lead Engineer", "Software Engineer", "Accountant", "Legal Team Lead", "Lawyer"];
const employeeChoices = ["John Doe", "Mike Chan", "Ashley Rodriguez", "Kevin Tupik", "Malia Brown", "Sarah Lourd", "Tom Allen"];

function askQuestion(){
 
    inquirer.prompt([
        {
            type: "list",
            name: "selection",
            message: "What would you like to do?",
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
    ]).then((answers) => {
        console.log(answers);
    });


        if (answers.selection === "View all departments"){
            viewDepartments();
        }
        else if(answers.selection === "View all roles"){
            viewRoles();
        }
        else if(answers.selection === "View all employees"){
            viewEmployees();
        }
        else if(answers.selection === "Add a department"){
            addDepatment();
        }
        else if(answers.selection === "Add a role"){
            addRole();
        }
        else if(answers.selection === "Add an employee"){
            addEmployee();
        }
        else if(answers.selection === "Update an employee role"){
            updateEmployeeRole();
        }   
        else {
            connection.end();
        }
    }

    askQuestion();

    function viewDepartments() {
        connection.query("SELECT * FROM department", function(err, data) {
            console.table(data);
            runSearch();
        }
        ); };
    
    function viewRoles() {
        connection.query("SELECT * FROM role", function(err, data) {
            console.table(data);
            runSearch();
        }
        ); };
        


