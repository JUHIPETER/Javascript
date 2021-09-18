var express = require("express");
var router = express.Router();
 var students = [
    {
        fullname: 'Xavier',
        email: 'xavier@gmail.com',
        mobile: 1001,
        city: 'chennai',
        technology: 'HTML',
        company: 'TCS'
    },
    {
        fullname: 'Parker',
        email: 'parker@gmail.com',
        mobile: 1002,
        city: 'italy',
        technology: 'HTML',
        company: 'CTS'
    },
    {
        fullname: 'Eve',
        email: 'Eve@gmail.com',
        mobile: 1003,
        city: 'Tokyo',
        technology: 'HTML',
        company: 'ZOHO'
    },
    {
        fullname: 'Daniel',
        email: 'daniel@gmail.com',
        mobile: 1004,
        city: 'Mexico',
        technology: 'HTML',
        company: 'MG'
    }
 ];

router.get("/regstudent",function(req,res){
    res.sendFile(__dirname+"/studreg.html");    
})

router.get("/studentlist",function(req,res){
    res.render("students",{
        allstudents:students
    })
})

router.post("/sturegister",function(req,res){    
    students.push(req.body);
    res.send("Student registraiton successful")    
})

router.get("/details/:ph",function(req,res){
    var emp = students.find((e,i)=>{
        console.log(typeof e.mobile)
        console.log(typeof req.params.ph)
        if(e.mobile===Number(req.params.ph)){
            return true
        }
        else{
            return false;
        }
    })
    res.render("stud1",{
        details:emp
    })
})
module.exports = router;