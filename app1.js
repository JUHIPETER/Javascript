var express = require("express");
var app = express();

var studentrouter = require("./stud.router");
var emprouter = require("./emp.router");
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

   app.set('view engine', 'pug');
   app.set('views','./views');

app.use(express.static(__dirname+"/open"))

app.get("/",function(req,res){
   res.sendFile(__dirname+"/homepage.html")
})

// app.get("/abc/:x/:y?",function(req,res){
//    console.log(req.params);
//    res.send("hi")
// })

app.use("/student",function(req,res,next){
   console.log("Student Middlware is Excuted");
   next();
})

app.use("/student",studentrouter)

app.use("/employees",emprouter)

app.listen(7080,function(){console.log("listening on 7080")})