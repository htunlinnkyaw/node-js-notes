const express = require('express');
const app = express();

app.get('/names',(req,res)=> {
    // res.send('Hello World!');
    // res.json({names:["shaun","john","lucifer","blah blah"]})
})

app.listen(3000,()=> console.log(`Server running on port 3000`));

