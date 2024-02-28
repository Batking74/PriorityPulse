const { Schema } = mongoose

// Creating my subdocument schema
const prioritySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  priorityDescription: {
    type: String,
    required: true
  },
  priorityId: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  dueDate: {
    type: Date 
  },
  category: {
    type: String,
    required: true
  },
  tasks : [
    {
      type: String, 
      trim: true,
    },
  ],
}, { timestamps: true });

module.exports = prioritySchema;
