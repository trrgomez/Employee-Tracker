const inquirer = require("inquirer");
const db = require("./secrets/connections");
const table = require('console.table');

init();

function init() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "what would you like to do?",
        choices: [
          "view all employees",
          "view all departments",
          "view all roles",
          "add employee",
          "add department",
          "add role",
          "update employee role",
          "QUIT",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.choice) {
        case "view all employees":
          viewEmployees();
          break;
        case "view all departments":
          viewDepartments();
          break;

        case "view all roles":
          viewRoles();
          break;

        case "add employee":
          addEmployee();
          break;

        case "add department":
          addDepartment();
          break;

        case "add role":
          addRole();
          break;

        case "update employee role":
          updateEmployeeRole();
          break;

        default:
          db.end();
          break;
      }
    });
}

const viewEmployees = () => {
  const sql = "SELECT * FROM employee";
  db.query(sql, (err, data) => {
    console.table(data);
    init();
});
}

const addEmployee = () =>{
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employees first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employees last name?",
      },
      {
        type: "number",
        name: "roleId",
        message: "What is the employees role ID",
      },
      {
        type: "number",
        name: "managerId",
        message: "What is the employees manager's ID?",
      },
    ])
    .then((answer) => {
      const sql =
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
      const params = [
        answer.firstName,
        answer.lastName,
        answer.roleId,
        answer.managerId,
      ];
      db.query(sql, params, (err, data) => {
        if (err) throw err;
        console.table("Employee was successfully added to the database");
        init();
    });
    });
}

const updateEmployeeRole = () => {
  inquirer
    .prompt([
      {
        message:
          "which employee would you like to update? (use first name only for now)",
        type: "input",
        name: "name",
      },
      {
        message: "enter the new role ID:",
        type: "number",
        name: "role_id",
      },
    ])
    .then(function (answer) {
      db.query(
        "UPDATE employee SET role_id = ? WHERE first_name = ?",
        [answer.role_id, answer.name],
        function (err, data) {
          console.table("Successfully Updated!");
          init();
        });
    });
}

const viewDepartments = () => {
  const sql = "SELECT * FROM department";
  db.query(sql, (err, data) => {
    console.table(data);
    init();
});
}

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "What is the department that you want to add?",
      },
    ])
    .then((answer) => {
      const sql = "INSERT INTO department (name) VALUES (?)";
      const params = [answer.department];
      db.query(sql, params, (err, data) => {
        if (err) throw err;
        console.table("Department was successfully added to the database");
        init();
    });
});
}

const viewRoles = () => {
  const sql = "SELECT * FROM role";
  db.query(sql, (err, data) => {
    console.table(data);
    init();
});
}

const addRole = () =>{
  inquirer
    .prompt([
      {
        message: "enter title:",
        type: "input",
        name: "title",
      },
      {
        message: "enter salary:",
        type: "number",
        name: "salary",
      },
      {
        message: "enter department ID:",
        type: "number",
        name: "department_id",
      },
    ])
    .then((answer) => {
      const sql =
        "INSERT INTO roles (title, salary, department_id) values (?, ?, ?)";
      const params = [answer.title, answer.salary, answer.department_id];
      db.query(sql, params, (err, data) => {
        console.table("Role was successfully added to the database");
        init();
    });
    });
}