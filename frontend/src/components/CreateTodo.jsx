import { useState } from "react"

export function CreateTodo(){
    //react-query
    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

    return <div>
        <input id="title" style={{padding:10,margin:5}} type="text" placeholder="title" onChange={function(e){
            const value=e.target.value;
            setTitle(value);
        }}></input><br/>
        <input id="desc" style={{padding:10,margin:5}} type="text" placeholder="description" onChange={function(e){
            const value=e.target.value;
            setDesc(value);
        }}></input> <br/>
        
        <button style={{padding:10,margin:5}} onClick={()=>{
            fetch("http://localhost:3001/todos",{
                method:"POST",
                body:JSON.stringify({
                   title:title,
                   description:desc
                }),
                headers:{"Content-type":"application/json"}
            }).then(async function(res){
                const json =await res.json()
                alert("Todo Added")
            })
        }}>Add A Todo</button>
    </div>
}