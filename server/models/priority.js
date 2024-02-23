const mongoose = require('mongoose');

const prioritySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: String,
  isCompleted: {
    type: Boolean,
    default: false
  },
  dueDate: Date,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
}, { timestamps: true });

const Priority = mongoose.model('Priority', prioritySchema);

module.exports = Priority;
