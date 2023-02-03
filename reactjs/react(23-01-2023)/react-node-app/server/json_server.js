const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());
const fs = require("fs");

const emp = require('../client/src/employee.json');
//console.log(emp);


app.get('/emp/:id', (req, res) => {

    console.log(req.body);

    //const eid = req.params.id;
    //const result = emp.find(emp);
     //const result = emp.find((t)=>t.id == eid);
    //console.log(result);
    // const n = result;

    //res.json(result);
    // console.log(emp)
    const ans = emp.filter((data)=>{
      return data.id == req.params.id;
    })
    console.log(ans);
     res.json(ans);

    });
    //console.log(res.json(emp));



//     fs.readFile(emp, function(err, data) {
//         if (err) throw err;
//         const emps = JSON.parse(data);
//         console.log(emps); // Print users 
//     });
//     console.log(req.body);
//     res.json({ emps });


app.listen(8000,() => {
    console.log("server is running on Port 8000");
})