const express = require('express'),
     app = express(),
     path = require('path');

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/names',(req,res)=> {
    res.sendFile(path.join(__dirname,'/index.html'));
    // res.send('Hello World!');
    // res.json({names:["shaun","john","lucifer","blah blah"]})
})

app.listen(3000,()=> {
    console.clear();
    // console.log('Dir Name is ', __dirname);
    console.log(`Server running on port 3000`);
});

