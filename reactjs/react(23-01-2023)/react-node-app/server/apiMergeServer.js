const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

const employee = require('../client/src/employee.json');
const project = require('../client/src/projects.json');

app.get('/getemployeedetails', (req, res) => {
    const merged = employee.map((e) => {
        const matched = project.filter((p) => {
            return p.projectid == e.projectid
        });
        // if(matched)
        // {
        //     return{...e, ...matched}
        // }
         e.projects = matched;
        return e;    
    });
    res.json(merged);
});
app.listen(8000,()=>{
    console.log("server is running on port 8000")
})