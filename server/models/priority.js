const mongoose = require('mongoose');

const { Schema } = mongoose

const prioritySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  priorityText: String,
  isCompleted: {
    type: Boolean,
    default: false
  },
  dueDate: Date,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  tasks : [
    {
      type: String, 
      trim: true,
    },
  ],
}, { timestamps: true });

const Priority = mongoose.model('Priority', prioritySchema);

module.exports = Priority;
