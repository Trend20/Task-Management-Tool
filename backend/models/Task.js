const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  description: String,
  name: String,
  comments: String,
  date: Date
})

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;