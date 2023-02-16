const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  name:{
    type: String,
    required:[true, 'Please Add a task']
  },
  completed:{
    type:Boolean,
    required:true,
    default:false
  }
},
{
    timestamps:true
});

const Task=mongoose.model("Task",taskSchema)

module.exports=Task;