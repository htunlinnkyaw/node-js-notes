const express = require("express"),
  app = express(),
  path = require("path");
app.use(express.json());

let staff = [
  { name: "Alice", age: 24, salary: 500, isSingle: true },
  { name: "Bob", age: 28, salary: 650, isSingle: false },
  { name: "Charlie", age: 22, salary: 400, isSingle: true },
  { name: "David", age: 35, salary: 1200, isSingle: false },
  { name: "Eva", age: 27, salary: 700, isSingle: true },
  { name: "Frank", age: 31, salary: 900, isSingle: false },
  { name: "Grace", age: 26, salary: 600, isSingle: true },
  { name: "Henry", age: 29, salary: 800, isSingle: false },
  { name: "Ivy", age: 23, salary: 450, isSingle: true },
  { name: "Jack", age: 34, salary: 1100, isSingle: false },
];

app.get("/", (req, res) => {
  res.send("Welcome From Server");
});

app.get("/users", (req, res) => {
  res.json({ con: true, msg: "Users List", results: staff });
});

app.post("/user", (req, res) => {
  let newUser = req.body;
  staff.push(newUser);
  res.json({ con: true, msg: "New user added!", result: staff });
});

app.get("/user/:name", (req, res, next) => {
  let name = req.params.name;
  let age = req.params.age;
  let user = staff.find((s) => s.name === name);
  if (user) {
    res.json({ con: true, msg: "Found user", result: user });
  } else {
    next(new Error("No user with that name!"));
  }
});

/* 
app.patch("/user/:name/:salary", (req, res, next) => {
  let name = req.params.name;
  let salary = req.params.salary;
  let findUser = staff.find((s) => s.name === name);
  if (findUser) {
    findUser.salary = salary;
    res.json({ con: true, msg: "Salary updated", result: findUser });
  } else {
    next(new Error("No user found with that name!"));
  }
});
*/

app.patch("/user", (req, res, next) => {
  let name = req.body.name;
  let salary = Number(req.body.salary);
  let findUser = staff.find((s) => s.name === name);
  if (findUser) {
    findUser.salary = salary;
    res.json({ con: true, msg: "Salary updated", result: findUser });
  } else {
    next(new Error("No user found with that name"));
  }
});

app.listen(3000, () => {
  console.clear();
  console.log(`Server running on port 3000`);
});
