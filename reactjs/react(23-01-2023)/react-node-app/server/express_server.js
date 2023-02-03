const express = require('express');
const app = express();
const router_file = require('./router_file')
app.use('/birds', router_file);

var data = {
    portal : "GeeksforGeeks",
    knowledge : "unlimited",
    location : "Noida"  
}
  
// On localhost:3000/welcome
app.get('/welcome', function (req, res) {
    res.send('<b>Hello</b> welcome to my http server made with express');
});

app.get("/",(req,res)=>{
    res.send("<h1>vishal sarvaiya</h1>")
})

// responds to : batmobile, batwing, batcave, batarang
app.get(/bat/, function(req, res) {
    res.send('/bat/');
});

app.get('/the*man', function(req, res) {
    res.send('the*man');
});

// route with parameters
// matches to : /books/stephenking/category/horror
app.get('/books/:user/category/:categorySlug', function(req, res) {
    console.log(req.params);
    var username = req.params.user;
    var category = req.paramas.categorySlug;
    res.send(req.params);
});


app.get("/app",(req,res)=>{
    res.send("<h1>vishal Sarvaiya</h1>")
})
const cb0 = function (req, res, next) {
    const num1 = req.params.num1;
    const num2= req.params.num2;
    if(isNaN(num1) || isNaN(num2)){
        res.send("<h1>Please Enter Number In URL</h1>")
    }
    next();
}

app.get("/:num1/:num2",(cb0),(req,res)=>{
    console.log(req.params)
    const num1 = Number(req.params.num1);
    const num2= Number(req.params.num2);
    const ans = num1+num2;
    res.send(`<h1>${ans}</h1>`);
})
app.get("/mul/:num1/:num2",(cb0),(req,res)=>{
    console.log(req.params)
    const num1 = Number(req.params.num1);
    const num2= Number(req.params.num2);
    const ans = num1*num2;
    res.send(`<h1>${ans}</h1>`);
})


// Server setup
app.listen(8000 , ()=>{
	console.log("server running");
});

