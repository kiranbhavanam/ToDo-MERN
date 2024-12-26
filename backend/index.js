//Start with basic express boilerplate code,
//with express.json() middleware.

const express=require("express");
const { newTodoSchema,updateTodoSchema } = require("./types");
const {todo} =require("./db")
const app=express();//initializes empty express app.
app.use(express.json());//make sures all the post endpoints will work,parse the body if its json body.
//Authentication for signup and signin
app.post("/signup",(req,res)=>{})
app.post("/signin",(req,res)=>{})

// input validation for all the routes.
app.get("/todos",async (req,res)=>{
    const todos=await todo.find({});
    res.json({todos})
})
app.post("/newTodo",async (req,res)=>{
    const createPayLoad=req.body;
    const parsePayLoad=newTodoSchema.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        res.status(411).json(
            {msg:"You sent the wrong inputs"}
        )
        return;
    }
    // put it in the mongoDB.
   await todo.create({
        title:createPayLoad.title,
        description:createPayLoad.description,
        completed:false
    })
    res.json({
        msg:"Todo Created"
    })
})
app.put("updateToDo",async (req,res)=>{
    const updatePayLoad=req.body;
    const parsePayLoad=updateTodoSchema.safeParse(updatePayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "there is no such todo"
        })
        return;
    }
    //update todo in mongoDB.
    await todo.update({_id:req.body.id },{completed:true})
    res.json({
        msg:"Todo marked as completed."
    })
})

app.listen(3000,(error)=>{
    console.log(error);
})