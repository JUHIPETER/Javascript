var express = require("express");
var app = express();

var studrouter = require("./student.route");
var emprouter = require("./employee.route");

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.set('view engine', 'pug');
app.set('views','./views');

app.get("/",function(req,res){
    res.sendFile(__dirname+"/homepage1.html")
   })


   app.use("/student",studrouter)

   app.use("/employee",emprouter)

app.listen(7000,function(){console.log("Listining on 7000")})