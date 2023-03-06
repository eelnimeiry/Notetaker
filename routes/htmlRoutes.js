const app = require("express").Routes()
const path = require('path')


app.get("/notes",function(req,res){
    res.senFile(path.join(__dirname,'../public/notes.html'))
})


//homepage
app.get("/",function(req,res){
    res.senFile(path.join(__dirname,'../public/index.html'))
})


module.exports = app;