const router = require("express").Router()
const fs = require("fs");
let db = require("../db/db.json")


router.get("/notes",function(req,res){
    fs.readFile('db/db.json', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
      })
});
//req.bod
//req.param

router.post("/notes",function(req,res){

    let newData = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random()*1000289)
    }
    fs.readFile('db/db.json', (err, data) => {
        if (err) throw err;
        const parseData= JSON.parse(data);
        parseData.push(newData)
        fs.writeFile("db/db.json",JSON.stringify(parseData),
      err=>err ? console.log(err):res.redirect("/notes"))
    
})
})
module.exports = router;