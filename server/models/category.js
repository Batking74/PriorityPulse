const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  priorities: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Priority'
  }]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
