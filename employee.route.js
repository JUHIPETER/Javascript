var express = require("express");
var router = express.Router();
var emp = [];

router.get("/emp1",function(req,res){
    res.sendFile(__dirname+"/empform.html");
})
router.post("/eregmsg",function(req,res){
    emp.push(req.body);
    res.send("Registration is Successful")
})
router.get("/employeelist",function(req,res){
    res.render("emp",{
        allemployees:emp
    })    
})
module.exports = router;