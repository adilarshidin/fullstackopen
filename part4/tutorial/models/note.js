const mongoose = require('mongoose');


const noteSchema = mongoose.Schema({
  content: String,
  important: Boolean,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Note', noteSchema);
