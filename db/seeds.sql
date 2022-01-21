-- Data insertion for the employee database

USE employee_DB;

-- values for the department table
INSERT INTO department(name)
VALUES 
("Sales"),
("Engineering"),
("Finance"),
("Legal");

-- values for the role table
INSERT INTO role(title, salary, department_id)
VALUES 
("Sales Manager", 100000, 1),  
("Software Engineer", 120000, 2),  
("Financial Analyst", 80000, 3),  
("Legal Manager", 200000, 4);

-- values for the employee table
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Jane","Doe", 1,2),
("John","Gwen", 2,1),
("Sally","Sanderson", 3,6),
("Tom","Leer", 4,3),
("Daisy", "Reyes", 3, 4),
("Jacob", "Howser", 2, 3),
("Gray", "Hooper", 4,7),
("Larry", "Miller", 1,2);