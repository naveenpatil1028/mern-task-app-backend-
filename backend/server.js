const dotenv=require("dotenv").config()
const Task=require("./model/taskModel")
const express=require('express')
const mongoose = require('mongoose');
const taskRoutes=require('./routes/taskRoute')
const cors=require("cors")

const app=express()

//Middeleware

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(taskRoutes)

// Routes
app.get('/',(req,res)=>{
    res.send("Home Page")
})

// Connect to server and Database

const PORT=process.env.PORT || 5000
mongoose
.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`);
    })
})
.catch((error)=>{
    console.log(error);
})


