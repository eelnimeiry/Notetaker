const express = require("express")
const app = express()
const PORT = process.env.PORT || 3003
const apiRoutes = require("./routes/apiRoutes")
const htmlRoutes = require("./routes/htmlRoutes")


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname + "/public"));


app.use("/api",apiRoutes)
app.use("/",htmlRoutes)

app.listen(PORT, function(){
    console.log("Server started on port " + PORT)
})