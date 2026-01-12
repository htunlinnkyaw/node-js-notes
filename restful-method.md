# RESTful Methods in Node.js (Express)

RESTful APIs in Node.js are commonly built using **Express.js**.

---

## Core HTTP Methods

### GET
- Retrieve data
- Does not modify server state

### POST
- Create a new resource

### PUT
- Update an entire resource

### PATCH
- Partially update a resource

### DELETE
- Remove a resource

---

## RESTful Endpoint Mapping

| Action            | HTTP Method | Endpoint        |
|------------------|------------|-----------------|
| List all users   | GET        | `/users`        |
| Get one user     | GET        | `/users/:id`    |
| Create user      | POST       | `/users`        |
| Update (full)    | PUT        | `/users/:id`    |
| Update (partial) | PATCH      | `/users/:id`    |
| Delete user      | DELETE     | `/users/:id`    |

---

## Express.js Example

```js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/users', (req, res) => {
  res.send('Get all users');
});

app.get('/users/:id', (req, res) => {
  res.send(`Get user ${req.params.id}`);
});

app.post('/users', (req, res) => {
  res.send('Create user');
});

app.put('/users/:id', (req, res) => {
  res.send(`Update user ${req.params.id}`);
});

app.patch('/users/:id', (req, res) => {
  res.send(`Partially update user ${req.params.id}`);
});

app.delete('/users/:id', (req, res) => {
  res.send(`Delete user ${req.params.id}`);
});

app.listen(3000);
