const express = require('express'),
    app = express(),
    path = require('path');
app.use(express.json());

let users = [
    {name: "Alice", age: 24, salary: 500, isSingle: true},
    {name: "Bob", age: 28, salary: 650, isSingle: false},
    {name: "Charlie", age: 22, salary: 400, isSingle: true},
    {name: "David", age: 35, salary: 1200, isSingle: false},
    {name: "Eva", age: 27, salary: 700, isSingle: true},
    {name: "Frank", age: 31, salary: 900, isSingle: false},
    {name: "Grace", age: 26, salary: 600, isSingle: true},
    {name: "Henry", age: 29, salary: 800, isSingle: false},
    {name: "Ivy", age: 23, salary: 450, isSingle: true},
    {name: "Jack", age: 34, salary: 1100, isSingle: false}
]


app.get('/', (req, res) => {
    res.send('Welcome From Server');
})

app.get('/users', (req, res) => {
    res.json({con: true, msg: "Users List", results: users})
})


app.listen(3000, () => {
    console.clear();
    console.log(`Server running on port 3000`);
});

