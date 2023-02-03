const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

const projects = require('../client/src/projects.json')

app.get('/project/:id', (req, res) => {

    console.log(req.body);
    const ans = projects.filter((data)=>{
      return data.projectid == req.params.id;
    })
    console.log(ans);
     res.json(ans);

    });

app.listen(8000,() => {
    console.log("server is running on Port 8000");
})