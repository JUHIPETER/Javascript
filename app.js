var express = require("express");
var app=express();
var first_view=[];
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.set('view engine', 'pug');
app.set('views','./views');


app.get("/",function(req,res){
    res.sendFile(__dirname + "/register.html");
})

app.get('/', function(req, res){
    res.render('first_view',{
        allstudents:first_view
    })
})


app.post("/register",function(req,res){
    console.log("Request Params Data ::",req.body);
    first_view.push(req.body);
    //res.send(JSON.stringify(students));
    res.render('first_view',{
        allstudents:first_view
    })
})

app.listen(7080,function(){console.log("listening on 7080")})