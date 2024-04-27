INSERT INTO department(id, name)
VALUES(1, "Sales"),
      (2, "HR"),
      (3, "Production"),
      (4, "Shipping"),
      (5, "Quality Control");

INSERT INTO role( id, title, salary, department_id)
VALUES(1, "Sales Manager", 90000, 1),
      (2, "HR Manager", 70000, 2),
      (3, "Production Manager", 100000, 3),
      (4, "Shipping Manager", 80000, 4),
      (5, "QC Manager", 85000, 5),
      (6, "Sales Rep", 65000, 1),
      (7, "HR Rep", 50000, 2),
      (8, "Production Worker", 60000, 3),
      (9, "Shipping Worker", 55000, 4),
      (10, "QC Worker", 70000, 5);

INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES(1, "John", "Daniels", 1, NULL),
      (2, "Mary", "Jackson", 2, NULL),
      (3, "Adam", "Marshall", 3, NULL),
      (4, "Abbie", "Greene", 4 , NULL),
      (5, "Henry", "Thompson", 5, NULL),
      (6, "Stanley", "Barker", 6, 1),
      (7, "Kelsie", "Nord", 6, 1),
      (8, "Peter", "Parker", 6, 1),
      (9, "Tony", "Stark", 7, 2),
      (10, "Steve", "Rodgers", 7, 2),
      (11, "Clint", "Barton", 8, 3),
      (12, "Nick", "Fury", 8, 3),
      (13, "Scott", "Lang", 8, 3),
      (14, "Bruce", "Wayne", 9, 4),
      (15, "Clark", "Kent", 9, 4),
      (16, "Oliver", "Queen", 9, 4),
      (17, "Wally", "West", 10, 5),
      (18, "Barry", "Allen", 10, 5);
