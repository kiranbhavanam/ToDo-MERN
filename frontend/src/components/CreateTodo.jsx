import { useState } from "react"

export function CreateTodo({onAddToDo}){
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");

    const addToDo=()=>{
            fetch("http://localhost:4000/newTodo",{
                method:"POST",
                body:JSON.stringify({title:title,description:description}),
                headers:{"Content-Type":"application/json"}
            }).then(async function(res){
                    // const json=await res.json();
                    onAddToDo({title,description})
                    alert("Todo Added");

            })
        
    }
        
    const changeTitle=(e)=>{
        setTitle(e.target.value);
    }
    const changeDesc=(e)=>{
        setDescription(e.target.value);
    }
    return <div>
        <input style={{
            padding:10,
            margin:10
        }}
        
        onChange={changeTitle}
         type="text" placeholder="title" /><br/>
        <input style={{
            padding:10,
            margin:10
        }}
        
        onChange={changeDesc}
         type="text"  placeholder="description"/><br/>
        <button style={{
            padding:10,
            margin:10
        }} onClick={addToDo}>Add a todo</button>
    </div>
}