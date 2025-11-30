const mongoose = require('mongoose');
require('dotenv').config();


const url = process.env.MONGO_DB_URI;
mongoose.set('strictQuery', false);
mongoose.connect(url, { family: 4 })
  .then(result => console.log("Connected to Mongo DB."))
  .catch(error => console.log("Error connecting to Mongo DB."));

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});
noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
});

module.exports = mongoose.model('Note', noteSchema);
