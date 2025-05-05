// here type all the zod inputs that u expect from the user ; install zod
//for Validation  typically like express-validator 
const zod=require('zod');

/*
    To  add a new Todo 
    {
    title: String,
    description: string
    }

    To Mark Completed 
    {
    id:string
    }
*/

const createToDO=zod.object({
    title: zod.string(),
    description:zod.string()
})

const UpdateToDO =zod.object({
    id: zod.string()
})

module.exports={
    createToDO:createToDO,
    UpdateToDO:UpdateToDO
}