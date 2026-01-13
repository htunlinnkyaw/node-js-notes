const express = require('express'),
     app = express(),
     path = require('path');
app.use(express.json());

app.get('/', (req, res) => {
    res.json({con:true,msg:"success",result: {data:"data"}});
})

app.post('/', (req, res) => {
    let bodyData = req.body;
    console.log(bodyData);
    res.json({con:true,msg:"success",result: bodyData})
})

app.listen(3000,()=> {
    console.clear();
    console.log(`Server running on port 3000`);
});

