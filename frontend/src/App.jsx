import { useEffect, useState } from 'react';
import { Todos } from './components/Todos'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import axios from 'axios'


function App() {
    const [todos, setTodos] = useState([]); 
  /* incorrect way of doing it 
    fetch("http://localhost:3001/todos").then( async function(res){
      const json=await res.json();
      setTodos(json.todos);
    })*/

    //correct ways 
    /* 1. using fetch 
    useEffect(()=>{
      fetch("http://localhost:3001/todos")
      .then( async function(res){
        const json=await res.json();
        setTodos(json.todos);
      })
    },[])*/

    // using axios dependency
    useEffect(()=>{
      axios.get("http://localhost:3001/todos").then(response=>{
        setTodos(response.data.todos);
      })
    },[])

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
