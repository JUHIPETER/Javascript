var express = require("express");
var router = express.Router();
var employees = [];

router.get("/regemployee",function(req,res){
    res.sendFile(__dirname+"/empreg.html");    
})

router.post("/empregister",function(req,res){
    employees.push(req.body);
    res.send("Employee registraiton successful")    
})
router.get("/emplist",function(req,res){
    res.render("employees",{
        allemployees:employees
    })
})
module.exports = router;