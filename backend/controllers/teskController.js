const Task = require("../model/taskModel");


// create task
const createTask=async(req,res)=>{
    try {
        const task=await Task.create(req.body)
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

// get tasks
const getTasks=async(req,res)=>{
    try {
        const tasks=await Task.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

//Get single Task
const getTask=async(req,res)=>{
    try {
        const{id}=req.params;
        const task=await Task.findById(id)
        if(!task){
            return res.status(404).json(`No task with given ID:${id}`) 
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error.message}) 
    }
}

//Delete Rask
const deleteTask =async(req,res)=>{
    try {
        const{id}=req.params;
        const task=await Task.findByIdAndDelete(id)
        if(!task){
            return res.status(404).json(`No task with given ID:${id}`) 
        }
        res.status(200).send("Daleted Task")
    } catch (error) {
        res.status(500).json({msg:error.message}) 
    }
}

//Update Task
const updateTask =async(req,res)=>{
    try {
        const{id}=req.params;
        const task=await Task.findByIdAndUpdate(
            {_id:id},req.body,{new:true,runValidators:true}
            )
        if(!task){
            return res.status(404).json(`No task with given ID:${id}`) 
        }
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({msg:error.message}) 
    }
}



module.exports={
    createTask,
    getTasks,
    getTask,
    deleteTask,
    updateTask
}