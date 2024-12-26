import { useEffect, useState } from 'react';
import './App.css';
import { CreateTodo } from './components/CreateTodo';
import { Todo } from './components/Todos';

function App() {
 const [todos,setTodos]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:4000/todos").then(async function(res) {
      const json=await res.json();
      setTodos(json.todos)
    })
  },[])

  const addToDo=(newTodo)=>{
    setTodos((prevTodos)=>[...prevTodos,newTodo]);
  }
  
  return (
    <div className="App">
      hi there
      <CreateTodo onAddToDo={addToDo}/>
      <Todo todos={todos}/>
    </div>
  );
}

export default App;
