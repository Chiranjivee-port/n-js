const express= require("express")
const app= express()

app.set("view engine","ejs")
app.get('/',(req,res)=>{
    //res.send("Hello ")
    res.render("home.ejs")
})

app.get("/about",(req,res)=>{
    res.send("hi world")
})


app.listen(3000,function(){
    console.log("Nodejs project has started ")
})
 
