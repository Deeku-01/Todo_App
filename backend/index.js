const express=require('express');
const zod=require('zod');
// Local libs
const {createToDO,UpdateToDO}=require('./types');
const todo = require('./db');
const mongoose=require('mongoose');
const cors=require('cors') //Lets the frontend hit backend

const app=express();

app.use(express.json());
 app.use(cors()); // npw Backend is insecure .. Any Frontend can hit the backend
/* To restrict it only to a single frontend
app.use(cors({
    origin:"http://localhost:5173"
}))*/


app.post("/todos",async (req,res,next)=>{
    const userbody=req.body;
    const parsedpayload=createToDO.safeParse(userbody);
    if(!parsedpayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    //put it to mongo db
    await todo.create({
        title:userbody.title,
        description:userbody.description,
        completed:false
    })

    res.json({
        msg: "Todo Created"
    })
});

app.get("/todos", async (req,res,next)=>{
    const todos= await todo.find({}); //await coz it returns promise
    res.json({
        todos
    })
});

app.put("/completed",async (req,res,next)=>{
    const userbody=req.body;
    const parsedpayload=UpdateToDO.safeParse(userbody);
    if(!parsedpayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    await todo.updateOne({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg: "Todo Marked as Completed"
    })
});


const PORT=3001;
const DB_PAth ="mongodb+srv://ukeedhusmus:root@cluster0.e5tzvys.mongodb.net/Todo-APP"

mongoose.connect(DB_PAth).then(()=>{
    app.listen(PORT ,()=>{
        console.log(`Server running on http://localhost:${PORT}`);
    })
}).catch(err=>{
    console.log("Failed To Connect to Database",err);
})
