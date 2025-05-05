/*
    {
    title: "go To Gym"
    description: "go to Gym"
    }


*/
import { useState } from "react"


export function Todos({todos}){
    const [completed,setCompleted]=useState();

    return <div>
        {todos.map((todo) => {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={()=>{
                    fetch("http://localhost:3001/completed",{
                    method:"PUT",
                    body:JSON.stringify({
                        id:todo._id
                        }),
                    headers:{"Content-type":"application/json"}
                    }).then(async function(res){
                            const json =await res.json()
                            alert("Todo Marked Completed")})
                    }}>{todo.completed== true ? "Completed": "Mark as Completed"}</button>
                </div>
        })}
    </div>
}