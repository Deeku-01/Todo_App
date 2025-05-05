const mongoose=require('mongoose');

//?retryWrites=true&w=majority&appName=Cluster0

const todoschema =mongoose.Schema({
    title: String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('Todos',todoschema);

module.exports=todo;