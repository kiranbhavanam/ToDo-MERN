/**
 * 
 */
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://kirankumarbhavanam:Kiran%4022022002@cluster0.g4vkm.mongodb.net/todos")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema)
module.exports={
    todo
}