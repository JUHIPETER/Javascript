const e = require("express");
var express = require("express");
var router = express.Router();
var employees = [
    {
        fullname: 'Klaus',
        email: 'klaus@gmail.com',
        mobile: 1000,
        city: 'chennai',
        profession: 'manager',
        industry: 'it'
    },
    {
        fullname: 'Derek',
        email: 'derek@gmail.com',
        mobile: 1111,
        city: 'italy',
        profession: 'lead',
        industry: 'software'
    },
    {
        fullname: 'Abby',
        email: 'abby@gmail.com',
        mobile: 2222,
        city: 'Tokyo',
        profession: 'trainer',
        industry: 'Research and Development'
    },
    {
        fullname: 'Xander',
        email: 'xander@gmail.com',
        mobile: 3333,
        city: 'Mexico',
        profession: 'HR',
        industry: 'HRD'
    }
];


router.use(express.static(__dirname+"/open"))

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

router.get("/details/:ph",function(req,res){
    var emp = employees.find((e,i)=>{
        console.log(typeof e.mobile)
        console.log(typeof req.params.ph)
        if(e.mobile===Number(req.params.ph)){
            return true
        }
        else{
            return false;
        }
    })
    res.render("emp1",{
        details:emp
    })
})
module.exports = router;