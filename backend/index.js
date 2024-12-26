//Start with basic express boilerplate code,
//with express.json() middleware.

const express=require("express");
const { newTodoSchema,updateTodoSchema } = require("./types");
const app=express();//initializes empty express app.
app.use(express.json());//make sures all the post endpoints will work,parse the body if its json body.
//Authentication for signup and signin
app.post("/signup",(req,res)=>{})
app.post("/signin",(req,res)=>{})

// input validation for all the routes.
app.get("/todos",(req,res)=>{})
app.post("/newTodo",(req,res)=>{
    const createPayLoad=req.body;
    const parsePayLoad=newTodoSchema.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        res.status(411).json(
            {msg:"You sent the wrong inputs"}
        )
        return;
    }
    // put it in the mongoDB.
})
app.put("updateToDo",(req,res)=>{
    const updatePayLoad=req.body;
    const parsePayLoad=updateTodoSchema.safeParse(updatePayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "there is no such todo"
        })
        return;
    }
    //update todo in mongoDB.
})

app.listen(3000,(error)=>{
    console.log(error);
})