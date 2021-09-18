var express = require("express");
var router = express.Router();
var stud = [];

router.get("/stud1",function(req,res){
    res.sendFile(__dirname+"/studform.html");
})
router.post("/regmsg",function(req,res){
    stud.push(req.body);
    res.send("Registration is Successful")
})
router.get("/studlist",function(req,res){
    res.render("stud",{
        allstudents:stud
    })    
})
module.exports = router;