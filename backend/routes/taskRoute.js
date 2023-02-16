const express=require('express')
const { createTask, getTasks, getTask, deleteTask, updateTask } = require('../controllers/teskController')
const Task=require("../model/taskModel")
const router=express.Router()


// Create Task
router.post("/api/tasks",createTask)
//Get all Read tasks
router.get("/api/tasks",getTasks)
// Get a single Task
router.get('/api/tasks/:id',getTask)
//Delete Task
router.delete('/api/tasks/:id',deleteTask)
//Update Task
router.put('/api/tasks/:id',updateTask)


 module.exports=router