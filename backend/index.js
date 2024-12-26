//Start with basic express boilerplate code,
//with express.json() middleware.

const express=require("express");
const app=express();//initializes empty express app.
app.use(express.json());//make sures all the post endpoints will work,parse the body if its json body.

app.post("/signup",(req,res)=>{})
app.post("/signin",(req,res)=>{})


app.get("/todos",(req,res)=>{})
app.post("/newTodo",(req,res)=>{})
app.put("updateToDo",(req,res)=>{})

app.listen(3000,(error)=>{
    console.log(error);
})