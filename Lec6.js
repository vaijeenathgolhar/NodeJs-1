let http = require('http')
let express = require('express')
const app=express()
const users=require('./userdata.json')
const port=8002;

app.get("/",(req,res)=>{
    return res.send("Hello this is Home Page");
});
app.get("/contact",(req,res)=>{
    return res.send("Hello this is Contact Page");
});
app.get("/About",(req,res)=>{
    return res.send(`Hello this is About Page ${req.query.name}`);
});


app.get("/users",(req,res)=>{
    res.send(users)
})
app.get("/users/:id",(req,res)=>{
    const id = Number(req.params.id)
    const user=users.find((user)=>user.id===id)
    return res.json(user)
})

app.listen(port,(req,res)=>{
    console.log("server started")
})