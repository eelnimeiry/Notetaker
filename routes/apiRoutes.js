const app = require("express").Router()
const fs = require("fs");
let db = require("../db/db.json")


app.get("/api/notes",function(req,res){
    db = JSON.parse(fs.readFileSync(".db/db.json"))  ||  []
    res.json(db)
});
//req.bod
//req.param

app.post("/api/notes",function(req,res){

    let newData = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random()*1000289)
    }
    db.push(newData)
    fs.writeFileSync("./db/db.json",JSON.stringify(db),function(err){
        if(err){throw err}
    })
    res.json(db)
})

module.exports = app;